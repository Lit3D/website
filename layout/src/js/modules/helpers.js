const getIndexOfElement = (targets, target) => {
	const elements = document.querySelectorAll(targets);
	return Array.from(elements).indexOf(target);
}

export { getIndexOfElement };
