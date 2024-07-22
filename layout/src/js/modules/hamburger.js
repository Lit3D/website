import { getIndexOfElement } from "./helpers";
import { lenis } from "./lenis";
import { widthMD } from "./page-config";
import { scrollToSection } from "./scroll/scrollHelpers";
const pageHeaderNav = document.querySelector('.page-header__nav');
const pageHeaderNavList = document.querySelector('.page-header__nav-list');
const pageHeaderNavToggle = document.querySelector('.js-header-nav-toggle');

// toggle mobile nav clicking hamburger
const headerNavTrigger = (event) => {
	const target = event.target.closest('.js-header-nav-toggle');

	if (target) {

		if (!widthMD.matches) {
			target.classList.toggle('is-active');

			if (target.classList.contains('is-active')) {
				openHeaderNav();
			} else {
				closeHeaderNav();
			}
		}
	}
}

// go to section by clicking nav link
const headerNavTo = (event) => {
	const target = event.target.closest('.js-page-link');

	if (target) {
		event.preventDefault();
		const href = target.getAttribute('href');
		const section = document.getElementById(href.slice(1));
		const targetIndex = getIndexOfElement('.section', section);
		const currentIndex = window.indexOfCurrentSection;
		let calculatedIndex = currentIndex - targetIndex;
		let duration = 1.5;
		let multiplier = 0.75;
		history.replaceState(undefined, undefined, href)

		if (calculatedIndex !== 0) {
			duration = Math.abs(currentIndex - targetIndex) * multiplier;
		}

		closeHeaderNav(() => {
			pageHeaderNavList.classList.add('is-disabled');
			scrollToSection(section, duration, () => {
				pageHeaderNavList.classList.remove('is-disabled');
			});
		});
	}
}

// open mobile nav
const openHeaderNav = (cb) => {
	lenis.stop();

	pageHeaderNavToggle.classList.add('is-active');
	pageHeaderNav.style.display = 'block';

	setTimeout(function () {
		pageHeaderNav.classList.add('page-header__nav--active');

		if (cb) {
			cb();
		}
	}, 0);
}

// close mobile nav
const closeHeaderNav = (cb) => {
	lenis.start();

	pageHeaderNavToggle.classList.remove('is-active');
	pageHeaderNav.classList.remove('page-header__nav--active');

	setTimeout(function () {
		pageHeaderNav.style.display = 'none';
	}, 600);

	if (cb) {
		cb();
	}
}

export { headerNavTrigger, headerNavTo };
