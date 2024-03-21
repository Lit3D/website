import {gsap} from "gsap";

const fadeIn = (element, duration, callback) => {
	element.style.opacity = 0;
	element.style.display = 'block';

	let startTime = null;

	const animate = (timestamp) => {
		if (!startTime) startTime = timestamp;
		const elapsed = timestamp - startTime;
		const progress = elapsed / duration;

		element.style.opacity = Math.min(progress, 1);

		if (progress < 1) {
			requestAnimationFrame(animate);
		} else {
			if (callback) {
				callback();
			}
		}
	};

	requestAnimationFrame(animate);
};

const fadeOut = (element, duration, callback) => {
	const startOpacity = parseFloat(getComputedStyle(element).opacity);

	const start = performance.now();

	const animate = (timestamp) => {
		const elapsed = timestamp - start;
		const progress = 1 - elapsed / duration;

		element.style.opacity = startOpacity * progress;

		if (elapsed < duration) {
			requestAnimationFrame(animate);
		} else {
			element.style.display = 'none';
			if (callback) {
				callback();
			}
		}
	};

	requestAnimationFrame(animate);
};

const scaleBlob = (x, y, z, duration = 1.5) => {

	gsap.to(experience.world.blob.particles.scale, {
		x: x,
		y: y,
		z: z,
		duration: duration,
		ease: 'power2.inOut',
	});
}

const rotateBlob = (x, y, z, duration = 1.5) => {

	gsap.to(experience.world.blob.particles.rotation, {
		x: x,
		y: y,
		z: z,
		duration: duration,
		ease: 'power2.inOut',
	});
}

export { fadeIn, fadeOut, scaleBlob };
