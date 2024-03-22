'use strict';
import { getDocumentHeight, getPageHeaderHeight, getDocumentScrollBarWidth } from './modules/base.js';
import { headerNavTrigger, headerNavTo } from "./modules/hamburger";
import { modalOpenTrigger, modalCloseTrigger, modalCloseEscape, closeModal, modalCloseOutside } from './modules/modal.js';
import {sliderInit, getSliderInstance, sliderInstances} from './modules/slider.js';
/* ============= THREE JS IMPORTS ============= */
import * as THREE from 'three';
import Experience from "./modules/experience/Experience";
/* ============= GSAP IMPORTS ============= */
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
/* ============= LENIS IMPORTS ============= */
import {lenis} from "./modules/lenis";
/* ============= OTHER IMPORTS ============= */
import SplitType from 'split-type'
import { shuffleProjects } from './modules/projects'

import {initBlobScroll} from "./modules/scroll/scroll-blob";
import { initCommonScrollEffects } from "./modules/scroll/scroll-common";
import { initIntroReveal } from "./modules/scroll/scroll-intro";
import { initAboutReveal } from "./modules/scroll/scroll-about";
import { initTeamReveal } from "./modules/scroll/scroll-team";
import { initProjectsReveal } from "./modules/scroll/scroll-projects";
import { initContactsReveal } from "./modules/scroll/scroll-contacts";
import { initOutroReveal } from "./modules/scroll/scroll-outro";
import {blobRevealConfig} from "./modules/scroll/scrollConfig";

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


	// SCENES REVEAL INIT
	/*todo: refactor this*/
	setTimeout(function () {
		initCommonScrollEffects();
	},0)
	initIntroReveal();
	initBlobScroll(experience);
	initAboutReveal();
	initTeamReveal();
	initProjectsReveal();
	initContactsReveal();
	initOutroReveal();

	window.addEventListener('load', () => {
		ScrollTrigger.refresh()
		shuffleProjects();
	});

	/* ======= SLIDER =======*/
	sliderInit();

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
