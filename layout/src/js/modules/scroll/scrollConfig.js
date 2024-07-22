export const globalScrollConfig = {
	lerp: 0.0175,
	smooth: true,
	smoothWheel: true,
	wheelMultiplier: 1,
	touchMultiplier: 0.75,
}

export const globalRevealConfig = {
	toggleActions: 'restart none none reverse',
	ease: 'power1.inOut',
	defaultStart: 'top top',
	defaultEnd: 'bottom top',
	delay: 0.15,
	duration: 0.85,
	stagger: 0.3,
	y: 24,
	anticipatePin: 0,
	pinReparent: false,
}

export const textRevealConfig = {
	toggleActions: 'play none none none',
	ease: 'power1.inOut',
	start: 'top top',
	end: 'bottom top',
	delay: 0,
	duration: 2.5,
	stagger: 0.3,
	y: 24,
}

export const blobRevealConfig = {
	scrub: true,
	fastScrollEnd: false,
	preventOverlaps: false,
	projectsJumpDuration: 1,
	projectsJumpDepth: -2.8,
	projectsJumpEase: 'power4.inOut',
}

export const overlayRevealConfig = {
	ease: 'power1.in',
	autoAlpha: 0.3,
	duration: 1,
}
