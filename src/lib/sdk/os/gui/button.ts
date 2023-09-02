import { hexToRgb, line, rectangle, text } from "../../../drawing";
import { GUIElement } from "./util";

export class GUIButton extends GUIElement {
	text: string;
	x: number;
	y: number;
	rightX: number;
	bottomY: number;

	pressed: boolean = false;

	public get width(): number {
		return this.rightX - this.x;
	}

	public get height(): number {
		return this.bottomY - this.y;
	}

	static Flag = {
		FlagEnabled: 1 << 15,
	};

	constructor(
		leftX: number,
		topY: number,
		rightX: number,
		bottomY: number,
		text: string,
		eventID: number,
		flags: number = 0
	) {
		super();
		GUIButton_ctor(this, [leftX, topY, rightX, bottomY], text, eventID, flags);
	}

	Draw(): void {
		rectangle(
			this.x,
			this.y,
			this.width - 2,
			this.height - 3,
			hexToRgb(this.pressed ? "#5ADBFF" : "#fff")
		);
		// Inner
		let boderColors = this.pressed
			? ["#B5B2B5", "#737173", "#5A96AD", "#5ABAD6", "#5ACBEF"]
			: ["#B5B2B5", "#737173", "#ADAEAD", "#DEDFDE", "#EFEFEF"];

		for (let i = 0; i < boderColors.length; i++) {
			const color = boderColors[i];
			line(
				this.x + i,
				this.y + i,
				this.x + i,
				this.y + this.height - i - 3,
				hexToRgb(color)
			);
			line(
				this.x + i,
				this.y + i,
				this.x + this.width - i - 2,
				this.y + i,
				hexToRgb(color)
			);
			line(
				this.x + this.width - i - 2,
				this.y + i,
				this.x + this.width - i - 2,
				this.y + this.height - i - 3,
				hexToRgb(color)
			);
			line(
				this.x + i,
				this.y + this.height - i - 3,
				this.x + this.width - i - 2,
				this.y + this.height - i - 3,
				hexToRgb(color)
			);
		}

		// Top gradient ?
		let topColors = this.pressed
			? ["#B5EFFF", "#8CD7EF", "#4ACFF7", "#52D7FF", "#52D7FF", "#5AD7FF"]
			: ["#FFFBFF", "#EFE7EF", "#EFEBEF", "#EFEFEF", "#F7F3F7", "#F7F7F7"];

		for (let i = 0; i < topColors.length; i++) {
			const color = topColors[i];
			line(
				this.x + 5,
				this.y + 3 + i,
				this.x + this.width - 7,
				this.y + 3 + i,
				hexToRgb(color)
			);
		}

		// rectangle(
		// 	this.x,
		// 	this.y,
		// 	this.width - 2,
		// 	this.height - 3,
		// 	hexToRgb("#B5B2B5")
		// );
		// rectangle(
		// 	this.x + 1,
		// 	this.y + 1,
		// 	this.width - 4,
		// 	this.height - 5,
		// 	hexToRgb("#737173")
		// );
		// rectangle(
		// 	this.x + 2,
		// 	this.y + 2,
		// 	this.width - 6,
		// 	this.height - 7,
		// 	hexToRgb("#ADAEAD")
		// );

		// Shadows

		// bottom
		line(
			this.x + 1,
			this.y + this.height - 2,
			this.x + this.width - 2,
			this.y + this.height - 2,
			hexToRgb("#C6C3C6")
		);
		line(
			this.x + 2,
			this.y + this.height - 1,
			this.x + this.width - 2,
			this.y + this.height - 1,
			hexToRgb("#D6D3D6")
		);
		line(
			this.x + 3,
			this.y + this.height,
			this.x + this.width - 2,
			this.y + this.height,
			hexToRgb("#EFEBEF")
		);

		// right
		line(
			this.x + this.width - 1,
			this.y + 1,
			this.x + this.width - 1,
			this.y + this.height - 1,
			hexToRgb("#EFEBEF")
		);
		line(
			this.x + this.width,
			this.y + 2,
			this.x + this.width,
			this.y + this.height - 2,
			hexToRgb("#F7F7F7")
		);

		// Text

		let colorFill = hexToRgb(this.pressed ? "#000000" : "#5A595A");

		let colorShadow = hexToRgb(this.pressed ? "#5ADBFF" : "#E7E3E7");

		text(this.x + 6, this.y + 7, this.text, colorFill, colorShadow);
	}
}

// External function declaration (you need to provide the implementation)
export function GUIButton_ctor(
	button: GUIButton,
	bounds: number[],
	text: string,
	eventID: number,
	flags: number
): void {
	button.text = text;
	button.x = bounds[0];
	button.y = bounds[1];

	button.rightX = bounds[2];
	button.bottomY = bounds[3];
}
