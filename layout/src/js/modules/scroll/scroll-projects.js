import {gsap} from "gsap";
import {globalRevealConfig} from "./scrollConfig";

const initProjectsReveal = () => {

	gsap.fromTo('.p-card', {
		autoAlpha: 0,
		y: globalRevealConfig.y,
	}, {
		scrollTrigger: {
			trigger: '.section--5',
			// start: globalRevealConfig.defaultStart,
			// end: globalRevealConfig.defaultEnd,
			toggleActions: globalRevealConfig.toggleActions,
			onRefresh: self => self.progress && self.animation.progress(1),
		},
		autoAlpha: 1,
		y: 0,
		duration: 3,
		stagger: 0.3,
	});
}

export { initProjectsReveal };
