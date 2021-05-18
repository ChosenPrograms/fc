import InterfaceDOM from "./DOM.d";
import $ from "./Helper";

const DOM: InterfaceDOM = {
	// selection
	select: (selector: string) => {
		try {
			return document.querySelectorAll(selector);
		} catch (err) {
			throw new Error(err);
		}
	},

	on: (
		event: string,
		element: string | HTMLElement | NodeList,
		callback: Function
	) => {
		if ($.isString(element)) {
			//@ts-ignore
			document.querySelectorAll(element).forEach((elm) => {
				//@ts-ignore
				elm.addEventListener(event, callback);
			});

			return false;
		}

		if (element instanceof HTMLElement) {
			//@ts-ignore
			element.addEventListener(event, callback, false);
			return false;
		}

		if (element instanceof NodeList) {
			//@ts-ignore
			element.forEach((elm) => {
				//@ts-ignore
				elm.addEventListener(event, callback, false);
			});
			return false;
		}

		console.log(typeof element);

		console.log(element);
	},
};

export default DOM;
