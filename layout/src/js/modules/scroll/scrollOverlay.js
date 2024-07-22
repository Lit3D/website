import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const scrollOverlay = () => {
	const overlay = document.querySelector(".js-page-overlay");
	const fadeSections = gsap.utils.toArray('[data-fade]');

	fadeSections.forEach((section, i) => {
		const fadeIn = section.dataset.fade === "in";
		const t = gsap.fromTo(
			overlay,
			{
				opacity: fadeIn ? 0 : 0.7,
				immediateRender: false
			},
			{
				opacity: fadeIn ? 0.7 : 0,
				scrollTrigger: {
					trigger: section,
					start: "top top",
					end: "bottom top",
					scrub: true,
					immediateRender: false,
					id: i + 1
				}
			}
		);
	});

	gsap.set(overlay, { opacity: 0 });
}

export { scrollOverlay };
