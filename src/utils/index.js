export function heightOnMobile(breakpoint, element) {
	if (window.innerWidth < breakpoint) return element.offsetHeight;
	return 0;
}

export function verticalPosition(element, offset) {
	const el = document.querySelector(element);
	const actualPos = window.pageYOffset;
	const position = actualPos + el.getBoundingClientRect().top - offset;
	return [actualPos, position];
}
