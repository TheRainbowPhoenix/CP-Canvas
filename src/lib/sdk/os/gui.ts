import { GUIElement } from "./gui/util";

// Constants
export const BUTTON_OK = 1 << 5;
export const BUTTON_YES = 1 << 6;
export const BUTTON_NO = 1 << 7;
export const BUTTON_ABORT = 1 << 8;
export const BUTTON_RETRY = 1 << 9;
export const BUTTON_CANCEL = 1 << 10;

// Enumerations
export enum Height {
	Height25 = 0,
	Height55 = 1,
	Height75 = 2,
	Height95 = 3,
	Height35 = 4,
	Height60 = 5,
}

export enum Alignment {
	AlignTop = 0,
	AlignCenter = 1,
	AlignBottom = 2,
}

export enum KeyboardState {
	KeyboardStateNone = 0, // 2 gives the same effect
	KeyboardStateMath1 = 1, // 3 gives the same effect
	KeyboardStateMath2 = 4,
	KeyboardStateMath3 = 5,
	KeyboardStateTrig = 6,
	KeyboardStateVar = 7,
	KeyboardStateABC = 8,
	KeyboardStateCatalog = 9,
	KeyboardStateAdvance = 10,
	KeyboardStateNumber = 11,
}

export enum DialogResult {
	DialogResultOK = 0x3ea,
	DialogResultCancel = 0x3eb,
}

export function GUI_DisplayMessageBox(
	unknown: number,
	titleStringID: number,
	contentStringID: number
): void {
	// Implementation for GUI_DisplayMessageBox
}

function GUI_DisplayMessageBox_Internal(
	unknown: number,
	titleString: string,
	contentPrefix: string,
	contentString: string,
	buttons: number,
	disableCloseButton: boolean
): any {
	// Implementation for GUI_DisplayMessageBox_Internal
	return null;
}
