import { hexToRgb, text } from "../../../drawing";
import { GUIElement } from "./util";

export class GUILabel extends GUIElement {
	static Flag = {
		FlagBackground: 1 << 0,
		FlagSelectable: 1 << 15,
	};

	x: number;
	y: number;
	text: string;

	constructor(
		x: number,
		y: number,
		text: string,
		flags?: number,
		textColor?: Uint16Array,
		backgroundColor?: Uint16Array,
		showShadow?: boolean,
		shadowColor?: number
	) {
		super();

		this.text = text;
		this.x = x;
		this.y = y;

		// Handle optional parameters
		flags = flags || 0;
		textColor = textColor || new Uint16Array(1);
		backgroundColor = backgroundColor || new Uint16Array(1);
		showShadow = showShadow || false;
		shadowColor = shadowColor || 0;

		// Initialize the label
		const font = null; // Assuming there's a default font
		const unknown0 = 0;
		const unknown1 = 0;

		GUILabel_ctor(
			this,
			x,
			y,
			text,
			unknown0,
			flags,
			font,
			textColor,
			backgroundColor,
			showShadow,
			shadowColor,
			unknown1
		);
	}

	Draw(): void {
		text(this.x, this.y, this.text, hexToRgb("#5A595A"), hexToRgb("#E7E3E7"));
	}
}

// External function declaration (you need to provide the implementation)
export function GUILabel_ctor(
	label: GUILabel,
	x: number,
	y: number,
	text: string,
	unknown0: number,
	flags: number,
	font: any,
	textColor: Uint16Array,
	backgroundColor: Uint16Array,
	showShadow: boolean,
	shadowColor: number,
	unknown1: number
): void {}
