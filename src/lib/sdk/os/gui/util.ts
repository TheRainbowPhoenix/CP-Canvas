import { LCD_Refresh } from "../../../drawing";

// Interfaces and types
export type VTableFunctionType<T = void, U = void> = (...args: any[]) => T;
export type VTableFunctionType3<T = void, U = void, V = void> = (
	...args: any[]
) => T;

/**
 * Represents an entry in a vtable.
 *
 * The function can be called with the () operator. The first argument must be
 * the object to call the function on, followed by the arguments to the
 * function.
 *
 * @template TReturn The return type of the function.
 * @template TArgs The types of the function's arguments.
 */
export class VTableFunction<TReturn, TArgs extends any[]> {
	offset: number;
	unused: number;
	func: (...args: [any, ...TArgs]) => TReturn;

	constructor(offset: number, func: (...args: [any, ...TArgs]) => TReturn) {
		this.offset = offset;
		this.unused = 0;
		this.func = func;
	}

	call(self: any, ...args: TArgs): TReturn {
		const self2 = self + this.offset;
		return this.func(self2, ...args);
	}
}

/**
 * Wraps an internal class.
 */
export class Wrapped {
	protected m_wrapped: any;
	protected children: Wrapped[] = [];

	protected isChanged: boolean = true;

	/**
	 * Returns a pointer to the internal class.
	 *
	 * @template T The type of the pointer to return. Can be `void`.
	 * @returns A pointer to the internal class.
	 */
	GetWrapped<T = any>(): T | null {
		return this.m_wrapped;
	}

	Add(elem: Wrapped) {
		this.children.push(elem);
	}

	doDraw(): void {
		if (!this.isChanged) return;
		console.log("Base::doDraw");

		this.Draw();

		for (const child of this.children) {
			child.doDraw();
		}

		this.isChanged = false;

		this.EndDraw();

		LCD_Refresh();
	}

	Draw(): void {}
	EndDraw(): void {}
}

/**
 * Utility class which is the parent of all GUI element classes.
 */
export class GUIElement extends Wrapped {}
