import {gsap} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { blobRevealConfig } from "./scrollConfig";
gsap.registerPlugin(ScrollTrigger);

const scrollProjects = () => {
	const projectCards = gsap.utils.toArray('.p-card');

	projectCards.forEach((card) => {
		const inner = card.querySelector('.p-card__inner');
		const imgWrap = card.querySelector('.p-card__img-wrap');
		const img = card.querySelector('.p-card__img');
		const title = card.querySelector('.p-card__title');

		const timeline = gsap.timeline({paused: true});

		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: inner,
				scrub: true,
				pin: false,
				markers: false,
			}
		});

		tl.fromTo(inner, {
			yPercent: () => {
				if (inner.classList.contains('p-card__inner--alternate')) {
					return 12
				}
				return -12
			},
			ease: 'power2.inOut',
		}, {
			yPercent: () => {
				if (inner.classList.contains('p-card__inner--alternate')) {
					return -12
				}
				return 12
			},
			ease: 'power2.inOut'
		});


		timeline
			.fromTo(imgWrap, {
				scale: 0,
			},{
				scale: 1,
				ease: blobRevealConfig.projectsJumpEase,
				duration: blobRevealConfig.projectsJumpDuration,
			})
			.fromTo(title, {
				opacity: 0,
			},{
				opacity: 1,
				ease: blobRevealConfig.projectsJumpEase,
				duration: blobRevealConfig.projectsJumpDuration,
			}, '-=0.5')
			.fromTo(img, {
				opacity: 0,
			}, {
				opacity: 1,
				ease: blobRevealConfig.projectsJumpEase,
				duration: blobRevealConfig.projectsJumpDuration,
				onComplete: () => {}
				}, '-=1')

		ScrollTrigger.create({
			trigger: card,
			start: 'top bottom',
			end: 'top bottom',
			onEnter: () => timeline.play(),
		})
	});
}

export { scrollProjects };
