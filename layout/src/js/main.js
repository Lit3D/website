'use strict';
import { getDocumentHeight, getPageHeaderHeight, getDocumentScrollBarWidth } from './modules/base.js';
import { headerNavTrigger, headerNavTo } from "./modules/hamburger";
import { modalOpenTrigger, modalCloseTrigger, modalCloseEscape, closeModal, modalCloseOutside } from './modules/modal.js';
import {sliderInit, getSliderInstance, sliderInstances} from './modules/slider.js';
/* ============= THREE JS IMPORTS ============= */
import Experience from "./modules/experience/Experience";
/* ============= GSAP IMPORTS ============= */
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
/* ============= LENIS IMPORTS ============= */
import {lenis} from "./modules/lenis";
/* ============= OTHER IMPORTS ============= */
import { shuffleProjects } from './modules/projects'

import {scrollToSection, scrollToSectionFromHash} from "./modules/scroll/scrollHelpers";
import {getCurrentSectionIndex} from "./modules/scroll/scrollHelpers";
import { initCommonScrollEffects } from "./modules/scroll/scroll-common";
import { initIntroReveal } from "./modules/scroll/scroll-intro";

// Animations
import { revealText, fadeInSliderCard } from "./modules/scroll/scrollAnimations";
import { scrollReveal } from "./modules/scroll/scrollReveal";
import { scrollRevealProjects } from "./modules/scroll/scrollRevealProjects";
import { scrollProjects} from "./modules/scroll/scrollProjects";
import { scrollTeam } from "./modules/scroll/scrollTeam";
import { scrollOutro } from "./modules/scroll/scrollOutro";
import { scrollBlob } from "./modules/scroll/scrollBlob";
import { scrollOverlay } from "./modules/scroll/scrollOverlay";
import {blobRevealConfig, textRevealConfig} from "./modules/scroll/scrollConfig";
import {getIndexOfElement} from "./modules/helpers";

const iOS = !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);


if (iOS) {
	document.addEventListener('gesturestart', function (e) {
		e.preventDefault();
	});
}

// Is the menu link pressed now?
window.isMoveToSection = false;
// Index of the current section
window.indexOfCurrentSection = 0;

document.addEventListener("DOMContentLoaded", function () {
	const pageHeader = document.querySelector('.page-header');

	// Set document height in CSS global variable `vh`
	getDocumentHeight();
	window.addEventListener('resize', getDocumentHeight);
	window.addEventListener('orientationchange', getDocumentHeight);
	window.addEventListener('scroll', getDocumentHeight); /* todo: remove ??? */

	if (document.contains(pageHeader)) {
		// Set `.page-header` height in CSS global variable `hh`
		getPageHeaderHeight();
		window.addEventListener('resize', getPageHeaderHeight);
		window.addEventListener('orientationchange', getPageHeaderHeight);
		window.addEventListener('scroll', getPageHeaderHeight);
	}

	/* ======= MODAL =======*/
	document.addEventListener('click', modalOpenTrigger);
	document.addEventListener('click', modalCloseTrigger);
	document.addEventListener('keydown', (event) => {
		// Close modal by clicking ESC
		modalCloseEscape(event);
	});
	// document.addEventListener('click', (event) => {
	// 	// Close modal by clicking outside
	// 	modalCloseOutside(event);
	// });

	/* ======= HEADER ======= */
	document.addEventListener('click', headerNavTo);

	/* ======= HAMBURGER =======*/

	document.addEventListener('click', headerNavTrigger);

	shuffleProjects();

	function setRandomScaleToLi() {
		// Получаем все элементы <li>
		const liElements = document.querySelectorAll('.p-card');

		// Для каждого элемента <li> устанавливаем случайный scale
		liElements.forEach(li => {
			// Генерируем случайный scale от 0.8 до 1.2
			const randomScale = 0.8 + Math.random() * 0.3;
			li.style.transform = `scale(${randomScale})`;
		});
	}

	setRandomScaleToLi()
	/* ======= SLIDER =======*/
	sliderInit();

	/* ===================================================== THREE.JS ===================================================== */

	// Init Experience
	const experience = new Experience(document.querySelector('canvas.webgl'));

	/* =================================================== SCROLL / GSAP =================================================== */

	gsap.registerPlugin(ScrollTrigger);
	gsap.registerPlugin(ScrollToPlugin);
	gsap.config({ nullTargetWarn: false });

	lenis.on('scroll', ScrollTrigger.update);

	gsap.ticker.add((time)=>{
		lenis.raf(time * 1000)
	})

	gsap.ticker.lagSmoothing(0)

	ScrollTrigger.defaults({
		ignoreMobileResize: true,
	});

	// SCENES REVEAL INIT
	getCurrentSectionIndex();

	scrollReveal('.section--about', revealText('.js-reveal-about'), 0, 'white');
	scrollReveal('.section--team', revealText('.js-reveal-team'), 0, 'white');
	// scrollRevealProjects('.section-spacer--about', '.section--projects', undefined, 300, 'white');
	scrollProjects();
	// scrollTeam();
	scrollReveal('.section--contacts', revealText('.js-reveal-contacts'), 300, 'yellow');
	scrollOutro('.section--outro', revealText('.js-reveal-outro'), 600, 'blue');

	// scrollBlob(experience);
	scrollOverlay();
	//scrollBlob(experience);
	scrollBlob(experience);
/*
	gsap.delayedCall(0, () => {
		scrollBlob(experience);
		// experience.world.blob.particles.rotation.y = 0;
		// experience.world.blob.particles.rotation.z = 0;
		// experience.camera.instance.position.z = 15;
	});
*/


	gsap.delayedCall(0, () => {
		ScrollTrigger.sort();
	});

	const pageLoader = document.querySelector('.page-loader');

	window.addEventListener('load', () => {
		const pageScrollPosition = window.scrollY || document.documentElement.scrollTop;
		let hash = window.location.hash;

		if (hash && document.querySelector(hash)) {
			setTimeout(function() {
				// window.scrollTo(0,0);
				// ScrollTrigger.refresh();
			},0);
			setTimeout(function () {
				scrollToSection(document.querySelector(hash), 2, () => {
					gsap.delayedCall(0.5, ()=>{
						gsap.to(pageLoader, {
							autoAlpha: 0,
							onComplete: () => {
								initIntroReveal();
							}
						})
					});
				});
			}, 0)

		} else if ((hash && !document.querySelector(hash)) || pageScrollPosition > 0) {
			setTimeout(function() {
				// window.scrollTo(0,0);
		//		ScrollTrigger.refresh();
			},0);
			gsap.delayedCall(0.5, ()=>{
				gsap.to(pageLoader, {
					autoAlpha: 0,
					onComplete: () => {
						initIntroReveal();
					}
				})
			});
		} else {
			gsap.delayedCall(0.5, ()=>{

				gsap.to(pageLoader, {
					autoAlpha: 0,
					onComplete: () => {
						initIntroReveal();
					}
				})
			});
		}


	});

	window.addEventListener('popstate', (event) => {
		const modal = document.querySelector('.modal--open');

		if (modal) {
			const modalID = modal.getAttribute('data-modal');
			closeModal(modalID);
		} else {
			window.history.back();
		}
	});

	let resizeTimer;
	let wWidth = window.innerWidth;
	window.addEventListener('resize', function() {
		clearTimeout(resizeTimer);
		resizeTimer = setTimeout(() => {
			if (window.innerWidth !== wWidth) {
				shuffleProjects();
			}
			wWidth = window.innerWidth;
		}, 250);
	});
});
