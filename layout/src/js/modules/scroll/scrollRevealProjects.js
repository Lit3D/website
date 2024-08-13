import {gsap} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {globalRevealConfig, globalScrollConfig} from "./scrollConfig";
gsap.registerPlugin(ScrollTrigger);

const scrollRevealProjects = (startSection, targetSection, animation, markerIndent = 100, markerColor = 'red', log = 'section') => {

	const st1 = ScrollTrigger.create({
		trigger: targetSection,
		start: "top-=2px top",
		end: "+=75%",
		anticipatePin: globalRevealConfig.anticipatePin,
		invalidateOnRefresh: true,
		toggleActions: 'play none none none',
	});
}

export { scrollRevealProjects };
