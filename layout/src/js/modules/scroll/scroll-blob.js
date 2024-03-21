import { gsap } from "gsap";
import { pageOverlay } from "../page/pageBlocks";
import { blobRevealConfig } from "./scrollConfig";

const initBlobScroll = (experience) => {

	// to ABOUT

	// Camera
	gsap.to(experience.camera.instance.position, {
		scrollTrigger: {
			trigger: '.section--2a',
			markers: false,
			start: 'top 50%',
			end: 'bottom 50%',
			immediateRender: false,
			scrub: blobRevealConfig.scrub,
		},
		z: 1,
		ease: blobRevealConfig.ease,
	});

	// Rotation
	gsap.to(experience.world.blob.particles.rotation, {
		scrollTrigger: {
			trigger: '.section--2a',
			markers: false,
			start: 'top 50%',
			end: 'bottom 50%',
			immediateRender: false,
			scrub: blobRevealConfig.scrub,
		},
		z: experience.world.blob.particles.rotation.z + Math.PI / 4,
		y: experience.world.blob.particles.rotation.y + Math.PI / 8,
		ease: blobRevealConfig.ease,
	});

	// fade
	gsap.to('.page-overlay', {
		scrollTrigger: {
			trigger: '.section--2a',
			markers: false,
			start: 'top+=100% 50%',
			end: 'bottom+=100% 50%',
			immediateRender: false,
			scrub: blobRevealConfig.scrub,
		},
		autoAlpha: 1,
		ease: blobRevealConfig.ease,
	});

	// to Contacts

	gsap.to(experience.camera.instance.position, {
		scrollTrigger: {
			trigger: '.section--5a',
			markers: false,
			start: 'top+=200% 50%',
			end: 'bottom+=300% 50%',
			immediateRender: false,
			scrub: blobRevealConfig.scrub,
		},
		z: 9,
		ease: blobRevealConfig.ease,
	});

	gsap.to(experience.world.blob.particles.rotation, {
		scrollTrigger: {
			trigger: '.section--5a',
			markers: false,
			start: 'top+=300% 50%',
			end: 'bottom+=300% 50%',
			immediateRender: false,
			scrub: blobRevealConfig.scrub,
		},
		z: experience.world.blob.particles.rotation.z - Math.PI / 4,
		y: experience.world.blob.particles.rotation.y - Math.PI / 8,
		ease: blobRevealConfig.ease,
	});

	gsap.to('.page-overlay', {
		scrollTrigger: {
			trigger: '.section--5a',
			markers: false,
			start: 'top+=300% 50%',
			end: 'bottom+=300% 50%',
			immediateRender: false,
			scrub: blobRevealConfig.scrub,
		},
		autoAlpha: 0,
		ease: blobRevealConfig.ease,
	});

	gsap.to('.page-overlay', {
		scrollTrigger: {
			trigger: '.section--5b',
			markers: false,
			start: 'top+=300% 50%',
			end: 'bottom+=300% 50%',
			immediateRender: false,
			scrub: blobRevealConfig.scrub,
		},
		autoAlpha: 1,
		ease: blobRevealConfig.ease,
	});

	// to Outro

	gsap.to('.page-fade', {
		scrollTrigger: {
			trigger: '.section--7',
			markers: false,
			start: 'top+=175% 50%',
			end: 'bottom+=200% 50%',
			immediateRender: false,
			scrub: blobRevealConfig.scrub,
		},
		autoAlpha: 1,
		ease: blobRevealConfig.ease,
	});
}

export { initBlobScroll };
