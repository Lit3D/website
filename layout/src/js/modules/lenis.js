import Lenis from "@studio-freight/lenis";

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
	duration: 3,
	smooth: true,
	smoothWheel: true,
	// smoothTouch: true,
	wheelMultiplier: 1.5,
	touchMultiplier: 2,
	// normalizeWheel: true,
});

let modalLenis = new Lenis(modalLenisParams);

export { lenis, modalLenis };
