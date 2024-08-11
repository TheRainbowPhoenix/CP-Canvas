import { prevent_default } from "svelte/internal";
import type { BOOL, UCHAR, WORD } from "../native/windows";
import {
	FF_NONE,
	HAS_TRANS,
	PCI_NORMAL,
	PCLR_DESKTOP,
	PegBaseSignals,
	PegPoint,
	PSF_ACCEPTS_FOCUS,
	PSF_CURRENT,
	PSF_OWNS_POINTER,
	PSF_SELECTABLE,
	PSF_VIEWPORT,
	PSF_VISIBLE,
	TYPE_WINDOW,
	type PegBitmap,
	type PegRect,
	type SIGNED,
	type TCHAR,
} from "./pegtypes";
import { FIRST_USER_MESSAGE, PegMessage, PegSystemMessage } from "./pmessage";
import type { PegThing } from "./pthing";
import { PegWindow } from "./pwindow";

export class PegPresentationManager extends PegWindow {
	protected mpInputThing: PegThing;
	protected mpDefaultInputThing: PegThing;
	protected mpLastPointerOver: PegThing;
	protected mpPointerOwners: Array<PegThing>; //[MAX_POINTER_CAPTURE_NESTING]
	protected mpWallpaper: PegBitmap;
	protected mpScratchPad: TCHAR;
	protected muPointerCaptures: UCHAR;
	protected mbMoveFocusFlag: BOOL;

	constructor(total: PegRect) {
		super(total, FF_NONE);
		this.mpInputThing = null;
		this.mpLastPointerOver = null;
		this.mpScratchPad = null;
		this.RemoveStatus(0xffff);

		// I am ALLWAYS in the current branch
		this.AddStatus(
			PSF_VIEWPORT | PSF_CURRENT | PSF_VISIBLE | PSF_ACCEPTS_FOCUS
		);

		this.muColors[PCI_NORMAL] = PCLR_DESKTOP;

		this.muPointerCaptures = 0;
		this.mbMoveFocusFlag = false;
		this.mpWallpaper = null;
	}

	Draw() {
		console.log("PegPresentationManager::Draw");

		if (this.mpWallpaper) {
			this.BeginDraw();

			if (HAS_TRANS(this.mpWallpaper)) {
				this.DrawFrame();
			}

			this.BitmapFill(this.mReal, this.mpWallpaper);
			this.DrawChildren();
			this.EndDraw();
		} else {
			super.Draw();
		}
	}

	Message(mesg: PegMessage): number {
		switch (mesg.wType) {
			case PegSystemMessage.PM_EXIT:
				if (mesg.pSource == this) {
					// did I send this Exit message?

					if (!this.First()) {
						// still no top-level windows?

						if (!mesg.iData) {
							let NewSend: PegMessage = mesg;
							NewSend.iData = 1;
							this.MessageQueue().Push(NewSend);
						} else {
							return PegSystemMessage.PM_EXIT; // exit!
						}
					}
				} else {
					return PegSystemMessage.PM_EXIT;
				}
				break;

			case PegSystemMessage.PM_CLOSE:
				this.MessageChildren(mesg);
				break;

			case PegSystemMessage.PM_MOVE_FOCUS:
				if (this.mbMoveFocusFlag) {
					if (this.First()) {
						this.mpInputThing = this.First();
						this.SetFocus(this.First());
					}
					this.mbMoveFocusFlag = false;
				}
				break;

			default:
				return super.Message(mesg);
		}
		return 0;
	}

	Add(what: PegThing, bDraw?: boolean): void {
		// An object can only be placed on top if the pointer is not captured by another object
		if (this.muPointerCaptures) {
			if (
				this.mpPointerOwners[this.muPointerCaptures - 1] != what &&
				what.mReal.Overlap(
					this.mpPointerOwners[this.muPointerCaptures - 1].mReal
				)
			) {
				super.AddToEnd(what, bDraw);
				return;
			}
		}

		if (what.Type() >= TYPE_WINDOW) {
			this.mbMoveFocusFlag = false;
		}

		if (!what.StatusIs(PSF_VISIBLE) && what.StatusIs(PSF_ACCEPTS_FOCUS)) {
			if (this.First()) {
				this.KillFocus(this.First());
			}

			super.Add(what, bDraw);
			this.mpInputThing = what;
			this.SetFocus(what);
		} else {
			super.Add(what, bDraw);
		}
	}

	FindLowestThingContaining(start: PegThing, point: PegPoint): PegThing {
		let current: PegThing = start.First();

		while (current) {
			if (current.mClip.Contains(point)) {
				if (current.StatusIs(PSF_VISIBLE) && current.StatusIs(PSF_SELECTABLE)) {
					start = current;
					current = current.First();
					continue;
				}
			}
			current = current.Next();
		}
		return start;
	}

	protected KillFocus(start: PegThing): void {
		while (start) {
			if (start.StatusIs(PSF_CURRENT)) {
				start.Message(new PegMessage(start, PegSystemMessage.PM_NONCURRENT));
				return;
			}
			start = start.Next();
		}
	}

	SetFocus(start: PegThing): void {
		if (start) {
			start.Message(new PegMessage(PegSystemMessage.PM_CURRENT));
			start.CheckSendSignal(PegBaseSignals.PSF_FOCUS_RECEIVED);
		}
	}

	MoveFocusTree(current: PegThing) {
		// TODO
	}
	InsureBranchHasFocus(current: PegThing) {
		let parent: PegThing = current.Parent();

		while (parent) {
			if (parent.StatusIs(PSF_CURRENT)) {
				return;
			}
			if (parent.StatusIs(PSF_ACCEPTS_FOCUS)) {
				this.MoveFocusTree(parent);
			}
			parent = parent.Parent();
		}
	}

	Execute(): Promise<SIGNED> {
		let pSend: PegMessage = new PegMessage();
		let iStatus: SIGNED = null;
		let animationFrameId;

		return new Promise(async (resolve, reject) => {
			while (true) {
				await this.MessageQueue().Pop(pSend);
				console.log(pSend);

				iStatus = this.DispatchMessage(this, pSend);

				if (iStatus == PegSystemMessage.PM_EXIT) {
					break;
					// return iStatus;
				}
			}
			resolve(iStatus);
		});
	}

	DispatchMessage(from: PegThing, pSend: PegMessage): SIGNED {
		let wSaveType: WORD;

		if (pSend?.pTarget) {
			return pSend.pTarget.Message(pSend);
		} else {
			switch (pSend.wType) {
				case PegSystemMessage.PM_LBUTTONDOWN:
				case PegSystemMessage.PM_RBUTTONDOWN:
					if (this.muPointerCaptures) {
						return this.mpPointerOwners[this.muPointerCaptures - 1].Message(
							pSend
						);
					}

					// figure out which thing it should go to based on the position:
					let current: PegThing = this.FindLowestThingContaining(
						from,
						pSend.point
					);

					// #if defined(PEG_TOUCH_SUPPORT)
					// For touch screens, we may not get PM_POINTER_MOVE messages. In that case, make sure objects get PM_POINTER_EXIT and PM_POINTER_ENTER messages.
					if (current != this.mpLastPointerOver) {
						if (this.mpLastPointerOver) {
							this.mpLastPointerOver.Message(
								new PegMessage(PegSystemMessage.PM_POINTER_EXIT)
							);
						}
						current.Message(new PegMessage(PegSystemMessage.PM_POINTER_ENTER));
					}
					// #endif

					this.mpLastPointerOver = current;

					if (current != this.mpInputThing) {
						if (current.StatusIs(PSF_ACCEPTS_FOCUS)) {
							this.MoveFocusTree(current);
						} else {
							// make sure the nearest window parent has focus:
							this.InsureBranchHasFocus(current);
						}
					}
					return current.Message(pSend);

				case PegSystemMessage.PM_LBUTTONUP:
				case PegSystemMessage.PM_RBUTTONUP:
					if (this.muPointerCaptures) {
						// #if defined(PEG_TOUCH_SUPPORT)
						wSaveType = pSend.wType;
						pSend.wType = PegSystemMessage.PM_POINTER_MOVE;
						this.mpPointerOwners[this.muPointerCaptures - 1].Message(pSend);
						pSend.wType = wSaveType;
						// #endif

						return this.mpPointerOwners[this.muPointerCaptures - 1].Message(
							pSend
						);
					}

					if (this.mpLastPointerOver) {
						if (this.mpLastPointerOver.mReal.Contains(pSend.point)) {
							// #if defined(PEG_TOUCH_SUPPORT)

							// Fill in any missing PM_POINTER_MOVE messages:
							wSaveType = pSend.wType;
							pSend.wType = PegSystemMessage.PM_POINTER_MOVE;
							this.mpLastPointerOver.Message(pSend);
							pSend.wType = wSaveType;
							// #endif
							return this.mpLastPointerOver.Message(pSend);
							// #if defined(PEG_TOUCH_SUPPORT)
						} else {
							this.mpLastPointerOver.Message(
								new PegMessage(PegSystemMessage.PM_POINTER_EXIT)
							);
							current = this.FindLowestThingContaining(from, pSend.point);
							this.mpLastPointerOver = current;
							this.mpLastPointerOver.Message(
								new PegMessage(PegSystemMessage.PM_POINTER_ENTER)
							);
							// #endif
						}
					}
					break;

				case PegSystemMessage.PM_POINTER_MOVE:
					this.Screen().SetPointer(pSend.point);

					if (this.muPointerCaptures) {
						return this.mpPointerOwners[this.muPointerCaptures - 1].Message(
							pSend
						);
					}

					current = this.FindLowestThingContaining(from, pSend.point);

					if (current != this.mpLastPointerOver) {
						if (this.mpLastPointerOver) {
							this.mpLastPointerOver.Message(
								new PegMessage(PegSystemMessage.PM_POINTER_EXIT)
							);
						}
						this.mpLastPointerOver = current;
						this.mpLastPointerOver.Message(
							new PegMessage(PegSystemMessage.PM_POINTER_ENTER)
						);
					} else {
						if (current != this) {
							return current.Message(pSend);
						}
					}
					break;

				case PegSystemMessage.PM_KEY:
				case PegSystemMessage.PM_KEY_RELEASE:
				case PegSystemMessage.PM_CUT:
				case PegSystemMessage.PM_COPY:
				case PegSystemMessage.PM_PASTE:
					if (this.mpInputThing) {
						return this.mpInputThing.Message(pSend);
					}
					break;

				default:
					if (pSend.wType < FIRST_USER_MESSAGE) {
						return this.First().Message(pSend);
					} else {
						if (pSend.iData) {
							let target: PegThing = this.Find(pSend.iData);
							if (target) {
								return target.Message(pSend);
							}
							return 0;
						}
					}
			}
		}

		return 0;
	}

	ReleasePointer(who?: PegThing): void {
		if (!who) return;

		if (who.StatusIs(PSF_OWNS_POINTER)) {
			who.RemoveStatus(PSF_OWNS_POINTER);

			if (this.muPointerCaptures > 0) {
				for (let uLoop = this.muPointerCaptures - 1; uLoop >= 0; uLoop--) {
					if (this.mpPointerOwners[uLoop] == who) {
						for (
							let uLoopP = uLoop;
							uLoopP < this.muPointerCaptures - 1;
							uLoopP++
						) {
							this.mpPointerOwners[uLoopP] = this.mpPointerOwners[uLoopP + 1];
						}
						this.muPointerCaptures--;
						break;
					}
				}

				if (this.muPointerCaptures) {
					this.mpInputThing = this.mpPointerOwners[this.muPointerCaptures - 1];
					this.mpInputThing.AddStatus(PSF_OWNS_POINTER);
				} else {
					this.mpInputThing = this.mpDefaultInputThing;
				}
			} else {
				this.mpInputThing = this.mpDefaultInputThing;
			}
		}
	}

	GetPointerOwner(): PegThing {
		if (this.muPointerCaptures) {
			return this.muPointerCaptures[this.muPointerCaptures - 1];
		}
		return null;
	}

	NullInput(current: PegThing) {
		let pTest: PegThing;

		// Check to see if the thing being removed is or is a parent of my
		// private "last pointer over" thing:

		if (this.mpLastPointerOver) {
			pTest = this.mpLastPointerOver;

			while (pTest && pTest != current) {
				pTest = pTest.Parent();
			}

			if (pTest == current) {
				this.mpLastPointerOver = null;
			}
		}

		// Check to see if the thing being removed is or is a parent of
		// my private "Input Thing":

		if (this.mpInputThing) {
			pTest = this.mpInputThing;

			while (pTest && pTest != current) {
				pTest = pTest.Parent();
			}

			if (pTest == current) {
				if (this.mpInputThing.StatusIs(PSF_OWNS_POINTER)) {
					this.ReleasePointer(this.mpInputThing);
				}
				this.mpInputThing = null;
			}
		}
	}
}
