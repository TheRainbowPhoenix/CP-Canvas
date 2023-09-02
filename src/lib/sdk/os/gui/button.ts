import { GUIElement } from "./util";

export class GUIButton extends GUIElement {
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
		// GUIButton_ctor(this, [leftX, topY, rightX, bottomY], text, eventID, flags);
	}
}

// External function declaration (you need to provide the implementation)
declare function GUIButton_ctor(
	button: GUIButton,
	bounds: number[],
	text: string,
	eventID: number,
	flags: number
): void;
