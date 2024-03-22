import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock-upgrade';

import {lenis} from "./lenis";
import {widthMD} from "./page-config";
import {gsap} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {blobRevealConfig} from "./scroll/scrollConfig";
const pageHeaderNav = document.querySelector('.page-header__nav');
const pageHeaderNavToggle = document.querySelector('.js-header-nav-toggle');
const pageHeaderNavBlockTarget = document.querySelector('.page-header__nav-inner');

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
	event.preventDefault();
	const target = event.target.closest('.js-page-link');

	if (target) {
		const href = target.getAttribute('href');
		const section = document.getElementById(href.slice(1));

		closeHeaderNav(() => {
			gsap.to(window, {
				scrollTo: {
					y: section,
					offsetY: -1,
				},
				duration: 2,
				onComplete: function () {
					if (href === '#team' && section.classList.contains('is-leaved')) {
						gsap.to(window, {
							scrollTo: {
								y: section,
								offsetY: 1,
							},
							duration: 0,
						});
					}
				}
			});
		});
	}
}

function getScrollLookup(
	targets,
	{ start, pinnedContainer, containerAnimation }
) {
	let triggers = gsap.utils.toArray(targets).map((el) =>
			ScrollTrigger.create({
				trigger: el,
				start: start || "top top",
				pinnedContainer: pinnedContainer,
				refreshPriority: -10,
				containerAnimation: containerAnimation,
			})
		),
		st = containerAnimation && containerAnimation.scrollTrigger;
	return (target) => {
		let t = gsap.utils.toArray(target)[0],
			i = triggers.length;
		while (i-- && triggers[i].trigger !== t) {}
		if (i < 0) {
			return console.warn("target not found", target);
		}
		return containerAnimation
			? st.start +
			(triggers[i].start / containerAnimation.duration()) *
			(st.end - st.start)
			: triggers[i].start;
	};
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
