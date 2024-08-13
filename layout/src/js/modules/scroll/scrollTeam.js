import {gsap} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { globalRevealConfig } from "./scrollConfig";
import { fadeInSliderCard } from "./scrollAnimations";

gsap.registerPlugin(ScrollTrigger);

const scrollTeam = (startSection, targetSection, animation) => {

	let mm = gsap.matchMedia();

	mm.add("(min-width: 1280px)", () => {

		const st1 = ScrollTrigger.create({
			trigger: ".section--team",
			anticipatePin: globalRevealConfig.anticipatePin,
			start: "top top",
			end: "+=50%",
			invalidateOnRefresh: true,
			animation: fadeInSliderCard('.js-reveal-team'),
		});
	});
}

export { scrollTeam };
