import { WIDTH, HEIGHT } from "../../../specs";
import {
	fillScreen,
	LCD_Refresh,
	line,
	rectangle,
	setPixel,
	color,
	INT_HEXTORGB,
	INT_RGB565TO888,
} from "../../drawing";
import type { BOOL, UCHAR, WORD } from "../native/windows";
import {
	type PegBitmap,
	type PegColor,
	PegRect,
	type PegPoint,
	PegCapture,
	PSF_VISIBLE,
	type SIGNED,
} from "../PEG/pegtypes";
import type { PegFont } from "../PEG/pfonts";
import { PegScreen } from "../PEG/pscreen";
import type { PegThing } from "../PEG/pthing";

export const PEG_VIRTUAL_XSIZE = WIDTH;
export const PEG_VIRTUAL_YSIZE = HEIGHT;
export const ROTSCRATCH_SIZE = 10240;

// TODO
const LCD_HEIGHT = PEG_VIRTUAL_YSIZE;
const LCD_WIDTH = PEG_VIRTUAL_XSIZE;
const LCD_BITS_PER_PIXEL = 8; // 256 colors

export const DISPLAY_BUF_SIZE =
	(LCD_HEIGHT * LCD_WIDTH * LCD_BITS_PER_PIXEL) / 8;

export class CPCanvasScreen extends PegScreen {
	static s_ucBuf: UCHAR[] = Array(DISPLAY_BUF_SIZE);

	protected mbPointerHidden: BOOL;
	protected mCapture: PegCapture;
	protected mLastPointerPos: PegPoint;

	RectangleXOR(caller: PegThing, inRect: PegRect): void {
		throw new Error("Method not implemented.");
	}
	GetPointerType(): number {
		throw new Error("Method not implemented.");
	}
	GetPixel(caller: PegThing, x: number, y: number): number {
		throw new Error("Method not implemented.");
	}
	CreateBitmap(wWidth: number, wHeight: number): PegBitmap {
		throw new Error("Method not implemented.");
	}
	DestroyBitmap(pMap: PegBitmap) {
		throw new Error("Method not implemented.");
	}
	Line(
		caller: PegThing,
		wXStart: number,
		wYStart: number,
		wXEnd: number,
		wYEnd: number,
		pColor: PegColor,
		wWidth: number
	) {
		console.log("Line Color ", pColor);
		line(wXStart, wYStart, wXEnd, wYEnd, INT_RGB565TO888(pColor.uForeground)); /// TODO: remove me later !

		// fillScreen(color(0,0,64));

		// //Example for Debug_Printf(x,y,invert_color,0,format_string) //(small text)
		// Debug_Printf(10, 1, false, "Test");

		// //Example for Debug_PrintString(string, invert_color) //(big text)
		// Debug_SetCursorPosition(16,1);
		// Debug_PrintString("HelloWorld", true);

		// //use this command to actually update the screen
		// LCD_Refresh();

		// //Example for setPixel(x,y,color)
		// for (let x=0; x<256;x++){
		//     for (let y=0; y<256; y++){
		//         setPixel(50+x,250+y, color(x,y,0) );
		//     }
		// }
		// // get debug state
		// triangle(10,20,40,250,300,100,color(0,255,0),color(0,0,255));

		// //Example for line(x1,y1,x2,y2,color);
		// line(100,30,290,500,color(255,0,0));      //Use RGB color

		// throw new Error('Method not implemented.')
	}
	Rectangle(caller: PegThing, rect: PegRect, color: PegColor, wWidth: number) {
		rectangle(
			rect.wLeft,
			rect.wTop,
			rect.Width(),
			rect.Height(),
			INT_RGB565TO888(color.uForeground)
		);
		LCD_Refresh(); /// TODO: remove me later !
	}
	Bitmap(
		caller: PegThing,
		where: PegPoint,
		bitmap: PegBitmap,
		bOnTop: boolean
	) {
		throw new Error("Method not implemented.");
	}
	BitmapFill(caller: PegThing, rect: PegRect, bitmap: PegBitmap) {
		throw new Error("Method not implemented.");
	}
	RectMove(caller: PegThing, rect: PegRect, point: PegPoint) {
		throw new Error("Method not implemented.");
	}
	ViewportMove(caller: PegThing, rect: PegRect, point: PegPoint) {
		throw new Error("Method not implemented.");
	}
	DrawText(
		caller: PegThing,
		where: PegPoint,
		text: number[],
		color: PegColor,
		font: PegFont,
		count: number
	) {
		let rect: PegRect = new PegRect(
			where.x,
			where.y,
			where.x + this.TextWidth(text, font) - 1,
			where.y + this.TextHeight(text, font) - 1
		);

		if (caller) {
			// if (!caller.StatusIs(PSF_VISIBLE)) {
			// 	return;
			// }
			// if (!ClipRect(Rect, caller.mClip)) return;
		}

		this.DrawTextView(where, text, color, font, count, rect);
	}

	DrawTextView(
		where: PegPoint,
		text: number[],
		color: PegColor,
		font: PegFont,
		iCount: number,
		rect: PegRect
	): void {
		rectangle(rect.wLeft, rect.wTop, rect.Width(), rect.Height(), [64, 64, 64]);
		// TODO :::
		LCD_Refresh(); /// TODO: remove me later !
	}

	TextHeight(text: number[], font: PegFont): number {
		if (!text || !font) {
			return 0;
		}
		return font.uHeight;
	}
	TextWidth(text: number[], font: PegFont, iLen?: number): number {
		if (!text || !font) {
			return 0;
		}
		let iWidth: SIGNED = 0;

		let wStart: WORD = font.wFirstChar;

		for (let index = 0; index < text.length && index < iLen; index++) {
			const letter = text[index];
			// TODO !
			iWidth += 10;
		}

		return iWidth;
	}
	Circle(
		xCenter: number,
		yCenter: number,
		radius: number,
		color: PegColor,
		iWidth: number
	) {
		throw new Error("Method not implemented.");
	}

	constructor(rect: PegRect) {
		super(rect);

		this.mdNumColors = 256;

		this.mwHRes = rect.Width();
		this.mwVRes = rect.Height();

		this.mpScanPointers = Array.from(Array(rect.Height()));

		let currentPtr: UCHAR[] = this.GetVideoAddress();
		let wPitch: WORD = this.mwHRes >> 1;

		// Windows bitmaps must be modulo-4 byte in width:
		// wPitch += 3;
		// wPitch &= 0xfffc;

		// for (let iLoop = 0; iLoop < rect.Height(); iLoop++) {
		//     this.mpScanPointers[iLoop] = currentPtr
		//     currentPtr += wPitch

		// }

		// this.SetPalette(0, 265, ColorPalette256)
	}

	GetVideoAddress() {
		return CPCanvasScreen.s_ucBuf;
	}

	BeginDraw(caller: PegThing, pMap?: PegBitmap): void {
		if (pMap === null || pMap === undefined) {
			if (!this.mwDrawNesting) {
				// ifdef PEG_MOUSE_SUPPORT
				/*
			if (this.miInvalidCount) {
				if (this.mInvalid.Overlap(this.mCapture.Pos())) {
					this.HidePointer();
					this.mbPointerHidden = true;
				}
			}
            */
			}
			this.mwDrawNesting++;
		} else {
			if (this.mbVirtualDraw) {
				return;
			}
			// LOCK_PEG
			this.mpSaveScanPointers = this.mpScanPointers;

			if (pMap.wHeight && pMap.wWidth && pMap.pStart) {
				let wBytesPerLine: WORD = (pMap.wWidth + 1) >> 1;

				// this.mpScanPointers = Array.from(Array(pMap.wHeight)).map((i) => (i*wBytesPerLine));

				// let currentPtr = pMap.pStart;
				// for (let iLoop = 0; iLoop < pMap.wHeight; iLoop++) {
				//     this.mpScanPointers[iLoop] = currentPtr;
				//     currentPtr += wBytesPerLine;

				// }
				this.mVirtualRect.Set(0, 0, pMap.wWidth - 1, pMap.wHeight - 1);
				this.mbVirtualDraw = true;
			}
		}
	}

	EndDraw(pMap?: PegBitmap): void {
		if (pMap === null || pMap === undefined) {
			this.mwDrawNesting--;

			if (!this.mwDrawNesting) {
				this.MemoryToScreen();

				while (this.miInvalidCount > 0) {
					this.miInvalidCount--;
					// UNLOCK_PEG
				}
			}
		}
		// UNLOCK_PEG
		LCD_Refresh();
	}

	PlotPointView(x: number, y: number, color: number) {
		setPixel(x, y, [color & 0xff0000, color & 0xff00, color & 0xff]);
	}
}

export let CreatePegScreen = (): CPCanvasScreen => {
	let rect: PegRect = PegRect.Set(
		0,
		0,
		PEG_VIRTUAL_XSIZE - 1,
		PEG_VIRTUAL_YSIZE - 1
	);
	return new CPCanvasScreen(rect);
};
