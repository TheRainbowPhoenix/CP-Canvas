import { hexToRgb, line, rectangle, text } from "../../../drawing";
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
	text: string;
	x: number;
	y: number;
	rightX: number;
	height: number = 26;

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
		rightX: number,
		text: string,
		maxLength: number,
		countLengthByBytes: boolean
	) {
		super();
		this.text = text;
		this.x = x;
		this.y = y;
		this.rightX = rightX;
	}

	Draw(): void {
		rectangle(
			this.x,
			this.y,
			this.rightX - this.x,
			this.height,
			hexToRgb("#FFFFFF")
		);

		// border

		line(this.x, this.y, this.x, this.y + this.height, hexToRgb("#848284"));
		line(this.x, this.y, this.rightX, this.y, hexToRgb("#848284"));
		line(
			this.rightX,
			this.y,
			this.rightX,
			this.y + this.height,
			hexToRgb("#848284")
		);
		line(
			this.x,
			this.y + this.height,
			this.rightX,
			this.y + this.height,
			hexToRgb("#848284")
		);

		// shadow

		//left
		line(
			this.x + 1,
			this.y + 1,
			this.x + 1,
			this.y + this.height - 1,
			hexToRgb("#DEDFDE")
		);

		// top
		let topColors = ["#EFE7EF", "#EFEFEF", "#F7F7F7"];
		for (let i = 0; i < topColors.length; i++) {
			const color = topColors[i];
			line(
				this.x + 2,
				this.y + 1 + i,
				this.rightX - 1,
				this.y + 1 + i,
				hexToRgb(color)
			);
		}

		// text - TODO: font
		text(this.x + 3, this.y + 5, this.text, hexToRgb("#000"), hexToRgb("#fff"));
	}

	GetText(): string | null {
		return this.text; // TODO
	}
	SetText(text: string): void {
		this.text = text;
	}
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
