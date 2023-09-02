import { GUIElement, VTableFunction, type VTableFunctionType } from "./util";

interface GUITextBox_Wrapped_VTable {
	SetText: VTableFunctionType<void, string>;
}

interface GUITextBox_Wrapped {
	unknown0: Uint8Array;
	vtable: GUITextBox_Wrapped_VTable;
	unknown1: Uint8Array;
	text: string | null;
	unknown2: Uint8Array;
}

// GUITextBox class
export class GUITextBox extends GUIElement {
	// constructor(
	// 	x: number,
	// 	y: number,
	// 	width: number,
	// 	maxLengthOrText: number | string,
	// 	countLengthByBytesorMaxLength: boolean,
	//     maxLength?: number
	// ) {
	// 	super();

	// 	if (typeof maxLengthOrText === "string") {
	// 		// Constructor with text
	// 		// Initialize with text
	// 	} else {
	// 		// Constructor with maxLength
	// 		// Initialize without text
	// 	}
	// }

	// constructor(
	// 	x: number,
	// 	y: number,
	// 	width: number,
	// 	maxLength: number,
	// 	countLengthByBytes: boolean
	// );

	constructor(
		x: number,
		y: number,
		width: number,
		text: string,
		maxLength: number,
		countLengthByBytes: boolean
	) {
		super();
	}

	GetText(): string | null {
		return ""; // TODO
	}
	SetText(text: string): void {}
}

// Function to construct GUITextBox_Wrapped
export function GUITextBox_ctor(
	textBox: any,
	x: number,
	y: number,
	width: number,
	text: string | null,
	unknown0: number,
	flags: number,
	maxLength: number,
	countLengthByBytes: boolean
): GUITextBox_Wrapped {
	return null;
}
