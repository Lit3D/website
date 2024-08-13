import {gsap} from "gsap";
import { textRevealConfig } from './scrollConfig'

const revealText = (target) => {

	const revealText = gsap.to(target,{
		duration: textRevealConfig.duration,
		y: 0,
		autoAlpha: 1,
		stagger: textRevealConfig.stagger,
		ease: textRevealConfig.ease,
	});

	return revealText;
}

const fadeInSliderCard = (target) => {

	const fadeInSliderCard = gsap.fromTo(target, {
		autoAlpha: 0,
	}, {
		duration: textRevealConfig.duration,
		autoAlpha: 1,
		stagger: 0.3,
		ease: textRevealConfig.ease,
	});

	return fadeInSliderCard;
}

export { revealText, fadeInSliderCard }
