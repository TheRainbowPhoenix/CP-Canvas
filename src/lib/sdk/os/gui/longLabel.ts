import { hexToRgb, text, textWrap } from "../../../drawing";
import { GUIElement, type VTableFunctionType } from "./util";

interface GUILongLabel_Wrapped_VTable {
	Refresh: VTableFunctionType<void>;
	SetText: VTableFunctionType<void, string>;
}

interface GUILongLabel_Wrapped {
	unknown0: Uint8Array;
	vtable: GUILongLabel_Wrapped_VTable;
	unknown1: Uint8Array;
}

// GUILongLabel class
export class GUILongLabel extends GUIElement {
	x: number;
	y: number;
	rightX: number;
	bottomY: number;
	text: string;

	constructor(
		leftX: number,
		topY: number,
		rightX: number,
		bottomY: number,
		text: string
	) {
		super();

		this.text = text;
		this.x = leftX;
		this.y = topY;
		this.rightX = rightX;
		this.bottomY = bottomY;

		GUILongLabel_ctor(this, [leftX, topY, rightX, bottomY], 0, 0, text, 0);
	}

	Draw(): void {
		// TODO: manage wrapping
		textWrap(
			this.x,
			this.y,
			this.rightX - this.x,
			this.bottomY - this.y,
			this.text,
			hexToRgb("#5A595A"),
			hexToRgb("#E7E3E7")
		);
	}

	SetText(text: string): void {
		GUILongLabel_SetText(this, text);
	}

	Refresh(): void {
		GUILongLabel_Refresh(this);
	}
}

export function GUILongLabel_ctor(
	longLabel: GUILongLabel,
	bounds: number[],
	unk0: number,
	unk1: number,
	text: string,
	unk2: number
): void {}


// External function declarations (you need to provide the implementations)
declare function GUILongLabel_SetText(
	longLabel: GUILongLabel,
	text: string
): void;

declare function GUILongLabel_Refresh(longLabel: GUILongLabel): void;
