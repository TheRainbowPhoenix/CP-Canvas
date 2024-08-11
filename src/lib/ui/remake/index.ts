import { get } from "svelte/store";
import {
	zoomFactor,
	classpad,
	canvas as canvasStore,
	context as contextStore,
} from "../../../specs";
import { Debug_Printf, LCD_Refresh } from "../../drawing";
import {
	Alignment,
	DialogResult,
	Height,
	KeyboardState,
} from "../../sdk/os/gui";
import { GUIButton } from "../../sdk/os/gui/button";
import {
	GUIDialog,
	type GUIDialog_OnEvent_Data,
	type GUIDialog_Wrapped,
} from "../../sdk/os/gui/dialog";
import { GUILabel } from "../../sdk/os/gui/label";
import { GUILongLabel } from "../../sdk/os/gui/longLabel";
import { GUITextBox } from "../../sdk/os/gui/textBox";

class MyDialog extends GUIDialog {
	private m_label: GUILabel;
	private BUTTON_OK_EVENT_ID: number;
	private m_buttonOK: GUIButton;
	private BUTTON_CANCEL_EVENT_ID: number;
	private m_buttonCancel: GUIButton;
	private BUTTON_TEST_EVENT_ID: number;
	private m_buttonTest: GUIButton;
	private m_textBox: GUITextBox;
	private m_longLabel: GUILongLabel;

	constructor(
		height: number,
		align: number,
		title: string,
		keyboardState: number
	) {
		super(height, align, title, keyboardState);

		this.m_label = new GUILabel(
			this.GetLeftX() + 10,
			this.GetTopY() + 10,
			"Label 0 Text"
		);

		this.BUTTON_OK_EVENT_ID = DialogResult.DialogResultOK;
		this.m_buttonOK = new GUIButton(
			this.GetLeftX() + 10,
			this.GetTopY() + 40,
			this.GetLeftX() + 10 + 120,
			this.GetTopY() + 40 + 35,
			"Close (OK)",
			this.BUTTON_OK_EVENT_ID
		);

		this.BUTTON_CANCEL_EVENT_ID = DialogResult.DialogResultCancel;
		this.m_buttonCancel = new GUIButton(
			this.GetRightX() - 10 - 120,
			this.GetTopY() + 40,
			this.GetRightX() - 10,
			this.GetTopY() + 40 + 35,
			"Close (Cancel)",
			this.BUTTON_CANCEL_EVENT_ID
		);

		this.BUTTON_TEST_EVENT_ID = 1;
		this.m_buttonTest = new GUIButton(
			this.GetLeftX() + 10,
			this.GetTopY() + 85,
			this.GetRightX() - 10,
			this.GetTopY() + 85 + 35,
			"Test",
			this.BUTTON_TEST_EVENT_ID
		);

		this.m_textBox = new GUITextBox(
			this.GetLeftX() + 10,
			this.GetTopY() + 130,
			this.GetRightX() - this.GetLeftX() - 10,
			"Initial text box text",
			100,
			false
		);

		this.m_longLabel = new GUILongLabel(
			this.GetLeftX() + 10,
			this.GetTopY() + 160,
			this.GetRightX() - 10,
			this.GetBottomY() - 10,
			"Long labels like these allow text wrapping, and support newlines. They're great for lots of text!\nHere's some text, after a newline."
		);

		// Add elements to the dialog
		this.AddElement(this.m_label);
		this.AddElement(this.m_buttonOK);
		this.AddElement(this.m_buttonCancel);
		this.AddElement(this.m_buttonTest);
		this.AddElement(this.m_textBox);
		this.AddElement(this.m_longLabel);
	}

	OnEvent(dialog: GUIDialog_Wrapped, event: GUIDialog_OnEvent_Data): number {
		if (event.GetEventID() === this.BUTTON_TEST_EVENT_ID) {
			this.m_textBox.SetText("Test button pressed!");

			// Refresh the dialog to ensure the text box's updated content is drawn.
			this.Refresh();

			// Since we processed the event, return 0.
			return 0;
		}

		// If we don't process the event, let the base class process it.
		return super.OnEvent(dialog, event);
	}
}

function drawBG() {
	console.log("TODO");

	let canvas = get(canvasStore);
	let ctx = get(contextStore);

	ctx.clearRect(0, 0, canvas.width, canvas.height);

	ctx.fillStyle = "#ffffff";
	ctx.fillRect(0, 0, canvas.width, canvas.height);
}

export function RemakeUI() {
	drawBG();

	(async () => {
		// ======================================
		// START YOUR CODE HERE

		let dialog = new MyDialog(
			Height.Height55,
			Alignment.AlignTop,
			"My Demo Dialog",
			KeyboardState.KeyboardStateABC
		);

		let result = await dialog.ShowDialog();

		// Debug_Printf(0, 0, false, `Dialog closed with result ${result}`);
		LCD_Refresh();

		// END YOUR CODE HERE
		// ======================================
		return result;
	})().then((return_code) => {
		console.log("Done RemakeUI with code ", return_code);
	});
}
