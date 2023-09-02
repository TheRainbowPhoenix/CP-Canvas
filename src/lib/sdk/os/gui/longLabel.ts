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
	constructor(
		leftX: number,
		topY: number,
		rightX: number,
		bottomY: number,
		text: string
	) {
		super();
		// GUILongLabel_ctor(this, [leftX, topY, rightX, bottomY], 0, 0, text, 0);
	}

	SetText(text: string): void {
		GUILongLabel_SetText(this, text);
	}

	Refresh(): void {
		GUILongLabel_Refresh(this);
	}
}

// External function declarations (you need to provide the implementations)
declare function GUILongLabel_ctor(
	longLabel: GUILongLabel,
	bounds: number[],
	unk0: number,
	unk1: number,
	text: string,
	unk2: number
): void;

declare function GUILongLabel_SetText(
	longLabel: GUILongLabel,
	text: string
): void;

declare function GUILongLabel_Refresh(longLabel: GUILongLabel): void;
