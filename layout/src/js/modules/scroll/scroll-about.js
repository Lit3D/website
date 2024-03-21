import {gsap} from "gsap";
import { globalRevealConfig, textRevealConfig } from './scrollConfig'

const initAboutReveal = () => {

	gsap.fromTo('.js-reveal-about-1', {
		autoAlpha: 0,
		y: globalRevealConfig.y,
	}, {
		duration: globalRevealConfig.duration,
		y: 0,
		autoAlpha: 1,
		ease: globalRevealConfig.ease,
		scrollTrigger: {
			trigger: '.section--3',
	//		markers: textRevealConfig.isBlobMarkers,
			start: globalRevealConfig.defaultStart,
			end: globalRevealConfig.defaultEnd,
			toggleActions: globalRevealConfig.toggleActions,
			pin: true,
			pinSpacing: true,
			anticipatePin: 1,
			onRefresh: self => self.progress && self.animation.progress(1),
		}
	});

	gsap.fromTo('.js-reveal-about-2', {
		autoAlpha: 0,
		y: globalRevealConfig.y,
	}, {
		delay: globalRevealConfig.delay,
		duration: globalRevealConfig.duration,
		y: 0,
		autoAlpha: 1,
		ease: globalRevealConfig.ease,
		scrollTrigger: {
			trigger: '.section--3',
//			markers: textRevealConfig.isBlobMarkers,
			start: 'top top',
			end: 'bottom 50%',
			toggleActions: globalRevealConfig.toggleActions,
			onRefresh: self => self.progress && self.animation.progress(1),
		}
	});


}

export { initAboutReveal };
