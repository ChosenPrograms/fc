export default interface DOM {
	// Element selection
	select: (selector: string) => NodeList | null;

	// Event Listener
	on: (
		event: string,
		element: HTMLElement | NodeList | string,
		callback: CallableFunction
	) => void;
}
