import {gsap} from "gsap";

const initCommonScrollEffects = () => {

	const projectCols = document.querySelectorAll('.projects__col');

	for (let i = 3 - 1; i < projectCols.length; i += 4) {
		projectCols[i].querySelector('.p-card__inner').classList.add('p-card__inner--alternate');
	}


	gsap.utils.toArray('.projects__col').forEach(container => {
		const img = container.querySelector('.p-card__inner');

		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: container,
				scrub: true,
				pin: false,
				markers: false,
			}
		});

		tl.fromTo(img, {
			yPercent: () => {
				if (img.classList.contains('p-card__inner--alternate')) {
					return 8
				}
				return -8
			},
			ease: 'power2.inOut',
		}, {
			yPercent: () => {
				if (img.classList.contains('p-card__inner--alternate')) {
					return -8
				}
				return 8
			},
			ease: 'power2.inOut'
		});



	});
}

export { initCommonScrollEffects };
