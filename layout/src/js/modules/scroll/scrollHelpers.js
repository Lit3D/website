import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {getIndexOfElement} from "../helpers";
import {lenis} from "../lenis";

gsap.registerPlugin(ScrollTrigger);

const getCurrentSectionIndex = () => {

	gsap.utils.toArray('.section').forEach(section => {
		ScrollTrigger.create({
			trigger: section,
			start: "top 50%",
			end: "bottom 50%",
			onToggle: (self) => {
				window.indexOfCurrentSection = getIndexOfElement('.section', self.trigger);
			}
		});
	});
}

// ScrollTo and initial scroll

const scrollToSection = (target, duration, cb) => {
	lenis.stop();
	// ScrollTrigger.refresh();
	setTimeout(function () {
		lenis.start();
	}, 0)
	window.isMoveToSection = true;

	gsap.to(window, {
		scrollTo: {
			y: target,
			autoKill: false,
			offsetY: -2
		},
		duration: duration,

		onComplete: function () {
			gsap.delayedCall(0, () => {
				 ScrollTrigger.refresh();
			})

			setTimeout(function (){
				window.isMoveToSection = false;
			},100);
			if (cb) {
				cb();
			}
		}
	});
}

const scrollToSectionFromHash = () => {
	let hash = window.location.hash;

	if (hash && document.querySelector(hash)) {
		scrollToSection(document.querySelector(hash), 2);
	}

	if (hash && !document.querySelector(hash)) {
		window.scrollTo(0, 0);
	}
}

export { getCurrentSectionIndex, scrollToSection, scrollToSectionFromHash };
