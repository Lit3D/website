import {gsap} from "gsap";
import { globalRevealConfig, textRevealConfig } from './scrollConfig'

const initOutroReveal = () => {

	gsap.fromTo('.js-reveal-outro', {
		autoAlpha: 0,
		y: globalRevealConfig.y,
	}, {
		duration: globalRevealConfig.duration,
		y: 0,
		autoAlpha: 1,
		ease: globalRevealConfig.ease,
		scrollTrigger: {
			trigger: '.section--7',
			markers: false,
			start: 'top top+=15px',
			end: 'bottom top+=15px',
			toggleActions: globalRevealConfig.toggleActions,
			onRefresh: self => self.progress && self.animation.progress(1),
		}
	});

}

export { initOutroReveal };
