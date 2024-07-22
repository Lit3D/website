import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {blobRevealConfig} from "./scrollConfig";
gsap.registerPlugin(ScrollTrigger);

const scrollBlob = (experience) => {

	// Blob rotation
	const rotationSections = gsap.utils.toArray('[data-rotation]');

	rotationSections.forEach((section, i) => {
		const rotationIn = section.dataset.rotation === "in";
		const t = gsap.fromTo(
			experience.world.blob.particles.rotation,
			{
				z: rotationIn ? 0 : Math.PI / 2,
				y: rotationIn ? 0 : Math.PI / 6,
				immediateRender: false,
			},
			{
				z: rotationIn ? Math.PI / 2 : 0,
				y: rotationIn ? Math.PI / 6 : 0,
				scrollTrigger: {
					trigger: section,
					start: "top 50%+=2px",
					end: "bottom+=100% 50%",
					scrub: blobRevealConfig.scrub,
					preventOverlaps: blobRevealConfig.preventOverlaps,
					fastScrollEnd: blobRevealConfig.fastScrollEnd,
					immediateRender: false,
					// markers: {
					// 	indent: 150 * i,
					// 	startColor: 'blue',
					// 	endColor: 'yellow'
					// },
					id: i + 1
				}
			}
		);
	});

	// Camera position
	const cameraSections = gsap.utils.toArray('[data-camera-from]');

	cameraSections.forEach((section, i) => {
		const cameraPositionFrom = section.getAttribute('data-camera-from');
		const cameraPositionTo = section.getAttribute('data-camera-to');
		const cameraDistance = section.getAttribute('data-camera-distance');

		const t = gsap.fromTo(
			experience.camera.instance.position,
			{
				z: cameraPositionFrom,
				immediateRender: false,
			},
			{
				z: cameraPositionTo,
				scrollTrigger: {
					trigger: section,
					start: "50% 50%+=2px",
					end: `bottom+=${cameraDistance}% 50%+=2px`,
					scrub: blobRevealConfig.scrub,
					preventOverlaps: blobRevealConfig.preventOverlaps,
					fastScrollEnd: blobRevealConfig.fastScrollEnd,
					immediateRender: false,
					// markers: {
					// 	indent: 150 * i,
					// },
					id: i + 1
				}
			}
		);
	});

	experience.world.blob.particles.rotation.y = 0;
	experience.world.blob.particles.rotation.z = 0;
	experience.camera.instance.position.z = 15;
};

export { scrollBlob };
