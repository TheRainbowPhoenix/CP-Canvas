import { get } from "svelte/store";
import { width as sWidth, height as sHeight } from "../../../../specs";
import { hexToRgb, LCD_Refresh, line, rectangle } from "../../../drawing";
import { Alignment, Height, type KeyboardState } from "../gui";
import {
	Wrapped,
	type VTableFunctionType,
	type VTableFunctionType3,
} from "./util";

// Interfaces and types
interface GUIDialog_Wrapped_VTable {
	OnEvent: VTableFunctionType<number, GUIDialog_OnEvent_Data>;
	AddElement: VTableFunctionType3<void, any, number>;
	Refresh: VTableFunctionType<void>;
	ShowDialog: VTableFunctionType<number>;
}

export interface GUIDialog_Wrapped {
	unknown0: Uint8Array;
	leftX: number;
	topY: number;
	rightX: number;
	bottomY: number;
	unknown1: Uint8Array;
	vtable: GUIDialog_Wrapped_VTable;
	unknown2: Uint8Array;
}

export interface GUIDialog_OnEvent_Data {
	type: number;
	data: number;
	element: any;
}

// GUIDialog class
export class GUIDialog extends Wrapped {
	wrapped: GUIDialog_Wrapped;

	static Height = {
		Height25: 0,
		Height55: 1,
		Height75: 2,
		Height95: 3,
		Height35: 4,
		Height60: 5,
	};

	static Alignment = {
		AlignTop: 0,
		AlignCenter: 1,
		AlignBottom: 2,
	};

	static KeyboardState = {
		KeyboardStateNone: 0,
		KeyboardStateMath1: 1,
		KeyboardStateMath2: 4,
		KeyboardStateMath3: 5,
		KeyboardStateTrig: 6,
		KeyboardStateVar: 7,
		KeyboardStateABC: 8,
		KeyboardStateCatalog: 9,
		KeyboardStateAdvance: 10,
		KeyboardStateNumber: 11,
	};

	static DialogResult = {
		DialogResultOK: 0x3ea,
		DialogResultCancel: 0x3eb,
	};

	constructor(
		height: Height,
		alignment: Alignment,
		title: string,
		keyboard: KeyboardState
	) {
		super();

		this.wrapped = GUIDialog_ctor(
			this,
			height,
			alignment,
			title,
			0, // unknown2
			0, // unknown3
			keyboard
		);
	}

	Draw(): void {
		// =================================
		// Header
		rectangle(
			this.GetLeftX(),
			this.GetTopY(),
			this.width,
			this.GetTopY() + 31,
			hexToRgb("#6B696B")
		);
		// Bg

		let lineColors = ["#313031", "#4A494A", "#5A595A"];

		for (let i = 0; i < lineColors.length; i++) {
			const color = lineColors[i];

			line(
				this.GetLeftX() + i + 1,
				this.GetTopY() + 2 * i,
				this.GetLeftX() + i + 1,
				this.GetTopY() + 30,
				hexToRgb(color)
			);

			line(
				this.GetRightX() - i - 2,
				this.GetTopY() + 2 * i,
				this.GetRightX() - i - 2,
				this.GetTopY() + 30,
				hexToRgb(color)
			);
		}

		line(
			this.GetLeftX(),
			this.GetTopY(),
			this.GetLeftX(),
			this.GetTopY() + 30,
			hexToRgb("#101010")
		);

		line(
			this.GetRightX() - 1,
			this.GetTopY(),
			this.GetRightX() - 1,
			this.GetTopY() + 30,
			hexToRgb("#101010")
		);

		// Top

		line(
			this.GetLeftX(),
			this.GetTopY(),
			this.GetRightX() - 1,
			this.GetTopY(),
			hexToRgb("#080808")
		);

		line(
			this.GetLeftX() + 1,
			this.GetTopY() + 1,
			this.GetRightX() - 2,
			this.GetTopY() + 1,
			hexToRgb("#080808")
		);

		line(
			this.GetLeftX() + 1,
			this.GetTopY() + 2,
			this.GetRightX() - 2,
			this.GetTopY() + 2,
			hexToRgb("#181818")
		);

		line(
			this.GetLeftX() + 1,
			this.GetTopY() + 3,
			this.GetRightX() - 2,
			this.GetTopY() + 3,
			hexToRgb("#212021")
		);

		line(
			this.GetLeftX() + 1,
			this.GetTopY() + 4,
			this.GetRightX() - 2,
			this.GetTopY() + 4,
			hexToRgb("#292829")
		);

		line(
			this.GetLeftX() + 1,
			this.GetTopY() + 5,
			this.GetRightX() - 2,
			this.GetTopY() + 5,
			hexToRgb("#313031")
		);

		line(
			this.GetLeftX() + 2,
			this.GetTopY() + 6,
			this.GetRightX() - 3,
			this.GetTopY() + 6,
			hexToRgb("#393839")
		);

		line(
			this.GetLeftX() + 3,
			this.GetTopY() + 7,
			this.GetRightX() - 4,
			this.GetTopY() + 7,
			hexToRgb("#4A494A")
		);

		line(
			this.GetLeftX() + 3,
			this.GetTopY() + 8,
			this.GetRightX() - 4,
			this.GetTopY() + 8,
			hexToRgb("#525152")
		);

		line(
			this.GetLeftX() + 4,
			this.GetTopY() + 9,
			this.GetRightX() - 5,
			this.GetTopY() + 9,
			hexToRgb("#5A595A")
		);

		// bot
		line(
			this.GetLeftX() + 4,
			this.GetTopY() + 26,
			this.GetRightX() - 5,
			this.GetTopY() + 26,
			hexToRgb("#5A595A")
		);
		line(
			this.GetLeftX() + 3,
			this.GetTopY() + 27,
			this.GetRightX() - 4,
			this.GetTopY() + 27,
			hexToRgb("#525152")
		);

		line(
			this.GetLeftX() + 2,
			this.GetTopY() + 28,
			this.GetRightX() - 3,
			this.GetTopY() + 28,
			hexToRgb("#4A494A")
		);

		line(
			this.GetLeftX() + 1,
			this.GetTopY() + 29,
			this.GetRightX() - 2,
			this.GetTopY() + 29,
			hexToRgb("#292829")
		);

		line(
			this.GetLeftX(),
			this.GetTopY() + 30,
			this.GetRightX() - 1,
			this.GetTopY() + 30,
			hexToRgb("#181818")
		);

		// light line
		line(
			this.GetLeftX() + 2,
			this.GetTopY() + 1,
			this.width - 1,
			this.GetTopY() + 1,
			hexToRgb("#A5A2A5")
		);

		// END HEADER
		// =================================

		// Bg

		rectangle(
			this.GetLeftX(),
			this.GetTopY() + 31,
			this.GetRightX(),
			this.GetBottomY() - 31 - 5,
			hexToRgb("#fff")
		);

		// Border
		line(
			this.GetLeftX(),
			this.GetTopY() + 31,
			this.GetLeftX(),
			this.GetBottomY() - 6,
			hexToRgb("#5A595A")
		);
		line(
			this.GetLeftX(),
			this.GetBottomY() - 6,
			this.GetRightX() - 1,
			this.GetBottomY() - 6,
			hexToRgb("#5A595A")
		);
		line(
			this.GetRightX() - 1,
			this.GetTopY() + 31,
			this.GetRightX() - 1,
			this.GetBottomY() - 6,
			hexToRgb("#5A595A")
		);

		// Border Shadow
		// Top lines
		line(
			this.GetLeftX() + 1,
			this.GetTopY() + 31,
			this.GetRightX() - 2,
			this.GetTopY() + 31,
			hexToRgb("#BDBABD")
		);
		line(
			this.GetLeftX() + 1,
			this.GetTopY() + 32,
			this.GetRightX() - 2,
			this.GetTopY() + 32,
			hexToRgb("#ADAAAD")
		);
		line(
			this.GetLeftX() + 2,
			this.GetTopY() + 33,
			this.GetRightX() - 3,
			this.GetTopY() + 33,
			hexToRgb("#CECBCE")
		);
		line(
			this.GetLeftX() + 3,
			this.GetTopY() + 34,
			this.GetRightX() - 4,
			this.GetTopY() + 34,
			hexToRgb("#E7E3E7")
		);
		line(
			this.GetLeftX() + 4,
			this.GetTopY() + 35,
			this.GetRightX() - 2,
			this.GetTopY() + 35,
			hexToRgb("#F7F3F7")
		);

		let borderColors = ["#BDBABD", "#DEDBDE", "#EFEBEF", "#F7F3F7"];
		for (let i = 0; i < borderColors.length; i++) {
			const color = borderColors[i];

			line(
				this.GetLeftX() + 1 + i,
				this.GetTopY() + 31 + 2 + i,
				this.GetLeftX() + 1 + i,
				this.GetBottomY() - 6 - 1,
				hexToRgb(color)
			);

			line(
				this.GetRightX() - 2 - i,
				this.GetTopY() + 31 + 2 + i,
				this.GetRightX() - 2 - i,
				this.GetBottomY() - 6 - 1,
				hexToRgb(color)
			);
		}

		line(
			this.GetLeftX() + 1,
			this.GetBottomY() - 7,
			this.GetRightX() - 2,
			this.GetBottomY() - 7,
			hexToRgb("#B5B2B5")
		);

		// Shadow
		let colors = ["#F7F3F7", "#DEDBDE", "#BDBABD", "#A5A2A5", "#949294"];

		for (let i = colors.length - 1; i >= 0; i--) {
			const color = colors[i];

			line(
				this.GetLeftX(),
				this.GetBottomY() - i - 1,
				this.GetRightX() - 1,
				this.GetBottomY() - i - 1,
				hexToRgb(color)
			);
		}
	}

	OnEvent(dialog: GUIDialog_Wrapped, event: GUIDialog_OnEvent_Data): number {
		return GUIDialog_OnEvent_Wrap(dialog, event);
	}

	GetLeftX(): number {
		return this.wrapped.leftX;
	}

	GetTopY(): number {
		return this.wrapped.topY;
	}

	GetRightX(): number {
		return this.wrapped.rightX;
	}

	public get width(): number {
		return this.GetRightX() - this.GetLeftX();
	}

	public get height(): number {
		return this.GetBottomY() - this.GetTopY();
	}

	GetBottomY(): number {
		return this.wrapped.bottomY;
	}

	AddElement(element: any): void {
		// GUIDialog_AddElement(this, element, 0); // unknown0
	}

	Refresh(): void {
		GUIDialog_Refresh(this);
	}

	ShowDialog(): Promise<number> {
		return GUIDialog_ShowDialog(this);
	}
}

// External function declarations (you need to provide the implementations)
function GUIDialog_ctor(
	dialog: GUIDialog,
	height: number,
	alignment: number,
	title: string,
	unknown2: number,
	unknown3: number,
	keyboard: number
): GUIDialog_Wrapped {
	Height.Height55;
	Alignment.AlignTop;

	let bottomY = 0;
	let topY = 0;

	// switch (height) {
	// 	case Height.Height25:

	// }

	let dlg_height = 0;

	switch (height) {
		case Height.Height55:
			dlg_height = Math.round(get(sHeight) * 0.55 - 6);
	}

	switch (alignment) {
		case Alignment.AlignTop:
			topY = 0;
			bottomY = dlg_height;
			break;

		case Alignment.AlignCenter:
			let diff = Math.round((get(sHeight) - dlg_height) / 2);
			topY = diff;
			bottomY = diff;
			break;

		case Alignment.AlignBottom:
			topY = get(sHeight) - dlg_height;
			bottomY = 0;
			break;

		default:
			topY = 0;
			break;
	}

	let leftX = 3;
	let rightX = get(sWidth) - leftX;

	return {
		unknown0: new Uint8Array(),
		leftX: leftX,
		topY: topY,
		rightX: rightX,
		bottomY: bottomY,
		unknown1: new Uint8Array(),
		vtable: null, // GUIDialog_Wrapped_VTable
		unknown2: new Uint8Array(),
	};
}

declare function GUIDialog_OnEvent_Wrap(
	dialog: GUIDialog_Wrapped,
	event: GUIDialog_OnEvent_Data
): number;

declare function GUIDialog_AddElement(
	dialog: GUIDialog,
	element: any,
	unknown0: number
): void;

declare function GUIDialog_Refresh(dialog: GUIDialog): void;

export function GUIDialog_ShowDialog(dialog: GUIDialog): Promise<number> {
	let animationFrameId;
	let timeout = 0;

	// clear BG, todo remove me !!
	rectangle(0, 0, 2000, 2000, [255, 255, 255]);

	return new Promise(async (resolve, reject) => {
		const loop = () => {
			dialog.doDraw();

			timeout++;
			if (timeout > 1000) {
				cancelAnimationFrame(animationFrameId);
				resolve(0);
			}

			animationFrameId = requestAnimationFrame(loop);
		};
		animationFrameId = requestAnimationFrame(loop);
	});
}
