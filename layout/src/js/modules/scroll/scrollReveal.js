import {gsap} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const scrollReveal = (targetSection, animation, markerIndent = 100, markerColor = 'red') => {

	ScrollTrigger.create({
		trigger: targetSection,
		start: "top 60%",
		end: "bottom 60%",
		animation: animation,
		toggleActions: 'play none none none',
	});
}

export { scrollReveal };
