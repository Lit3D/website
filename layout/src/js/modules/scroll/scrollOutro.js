import {gsap} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const scrollOutro = (targetSection, animation, markerIndent = 100, markerColor = 'red') => {

	const fadeOut = gsap.to('.js-page-fade',{
		autoAlpha: 1,
		immediateRender: false
	});

	ScrollTrigger.create({
		trigger: targetSection,
		start: "top 50%",
		end: "bottom 50%",
		animation: animation,
		toggleActions: 'play none none none',
	});

	const st2 = ScrollTrigger.create({
		trigger: targetSection,
		start: "top 50%",
		end: "40% 50%",
		animation: fadeOut,
		toggleActions: 'play none none none',
		scrub: true,
		immediateRender: false,
	});
}

export { scrollOutro };
