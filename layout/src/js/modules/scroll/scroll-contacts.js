import {gsap} from "gsap";
import { globalRevealConfig, textRevealConfig } from './scrollConfig'

const initContactsReveal = () => {
	gsap.fromTo('.js-reveal-contacts-1', {
		autoAlpha: 0,
		y: globalRevealConfig.y,
	}, {
		duration: globalRevealConfig.duration,
		y: 0,
		autoAlpha: 1,
		ease: globalRevealConfig.ease,
		scrollTrigger: {
			trigger: '.section--6',
			markers: false,
			start: globalRevealConfig.defaultStart,
			end: globalRevealConfig.defaultEnd,
			toggleActions: globalRevealConfig.toggleActions,
			pin: true,
			pinSpacing: true,
			onRefresh: self => self.progress && self.animation.progress(1),
		}
	});

	gsap.fromTo('.js-reveal-contacts-2', {
		autoAlpha: 0,
		y: globalRevealConfig.y,
	}, {
		delay: globalRevealConfig.delay,
		duration: globalRevealConfig.duration,
		y: 0,
		autoAlpha: 1,
		ease: globalRevealConfig.ease,
		scrollTrigger: {
			trigger: '.section--6',
//			markers: textRevealConfig.isBlobMarkers,
			start: globalRevealConfig.defaultStart,
			end: globalRevealConfig.defaultEnd,
			toggleActions: globalRevealConfig.toggleActions,
			onRefresh: self => self.progress && self.animation.progress(1),
		}
	});
}

export { initContactsReveal };
