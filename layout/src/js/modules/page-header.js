let prevScrollPosition = 0;

const pageHeaderScrolling = (element) => {
	let currentScrollPosition = scrollY;
	let pageHeaderHeight = element.offsetHeight;

	if (currentScrollPosition >= pageHeaderHeight) {

		if (prevScrollPosition < currentScrollPosition) {
			element.classList.add('page-header--detached');
			prevScrollPosition = currentScrollPosition;
		}

		if (currentScrollPosition >= 0) {
			prevScrollPosition = currentScrollPosition;
		}
	}

	if (currentScrollPosition === 0) {
		element.classList.remove('page-header--detached');
	}
}

export { pageHeaderScrolling };
