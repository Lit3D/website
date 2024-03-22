import {gsap} from "gsap";
import { globalRevealConfig, textRevealConfig } from './scrollConfig'

const initIntroReveal = () => {


	gsap.to('.js-reveal-intro', {
		autoAlpha: 1,
		y: 0,
		duration: 3,
		stagger: 0.3,
	});
}

export { initIntroReveal };
