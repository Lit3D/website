import Lenis from "@studio-freight/lenis";
import { globalScrollConfig } from "./scroll/scrollConfig";
const modalLenisParams = {
	wrapper: document.querySelector('.modal'),
	content:	document.querySelector('.modal__inner'),
	duration: 3,
	//smoothTouch: true,
	smooth: true,
	smoothWheel: true,
	wheelMultiplier: 1.5,
	touchMultiplier: 2,
};

let lenis = new Lenis({
	lerp: globalScrollConfig.lerp,
	smooth: globalScrollConfig.smooth,
	smoothWheel: globalScrollConfig.smoothWheel,
	wheelMultiplier: globalScrollConfig.wheelMultiplier,
	touchMultiplier: globalScrollConfig.touchMultiplier,
	smoothTouch: true,
	syncTouch: true,
	syncTouchLerp: 0.1,
});

let modalLenis = new Lenis(modalLenisParams);

export { lenis, modalLenis };
