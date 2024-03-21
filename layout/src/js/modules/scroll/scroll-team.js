import { gsap } from "gsap";
import { globalRevealConfig } from './scrollConfig'
import { lenis } from "../lenis";
import { scaleBlob } from "../animations";

const initTeamReveal = () => {
	const teamSection = document.getElementById('team');
	const teamSlider = document.querySelector('.slider--team');

	gsap.fromTo('.js-reveal-team-1', {
		autoAlpha: 0,
	}, {
		duration: globalRevealConfig.duration,
		autoAlpha: 1,
		ease: globalRevealConfig.ease,
		scrollTrigger: {
			trigger: '.section--4',
			markers: false,
			start: 'top top',
			end: 'bottom 50%',
			toggleActions: globalRevealConfig.toggleActions,
			pin: true,
			pinSpacing: true,
			anticipatePin: 1,
			onEnter: () => {
				teamSlider.classList.remove('slider--disabled');
				scaleBlob(2, 2, 2);
			},
			onEnterBack: () => {
				teamSection.classList.remove('is-leaved');
				teamSlider.classList.remove('slider--disabled');
				scaleBlob(2, 2, 2);
			},
			onLeave: () => {
				teamSection.classList.add('is-leaved');
				lenis.start();
				teamSlider.classList.add('slider--disabled');
				scaleBlob(1, 1, 1);
			},
			onLeaveBack: () => {
				lenis.start();
				teamSlider.classList.add('slider--disabled');
				scaleBlob(1, 1, 1);
			},
			onRefresh: self => self.progress && self.animation.progress(1),
		}
	});
}

export { initTeamReveal };
