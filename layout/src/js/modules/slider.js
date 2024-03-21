import Swiper, { Navigation, Pagination, Scrollbar, EffectCoverflow, Keyboard, Mousewheel } from 'swiper';
import {lenis} from "./lenis";
import {isLandscape, isPortrait, widthMD} from "./page-config";
import {gsap} from "gsap";
const sliderInstances = [];

const sliderInit = () => {
	const sliderTrigger = document.querySelectorAll('.js-slider');

	sliderTrigger.forEach(function (el, index) {
		const sliderWrapper = el.closest('.slider');
		const sliderInstance = el;
		const sliderType = sliderInstance.getAttribute('data-slider-params');
		const sliderSlidesQuantity = sliderInstance.querySelectorAll('.swiper-slide').length;

		let isPaginationDynamic = false;

		let sliderParams = {};

		if (sliderSlidesQuantity > 12) {
			isPaginationDynamic = true;
		}

		/* todo: add check, if pagination element exist in DOM */
		if (sliderSlidesQuantity > 1) {
			sliderWrapper.classList.add('slider--pagination');
		}

		switch (sliderType) {
			case 'team':
				sliderParams = {
					modules: [Navigation, Pagination, Scrollbar, EffectCoverflow, Keyboard, Mousewheel],
					direction: 'horizontal',
					slidesPerView: 1,
					spaceBetween: 0,
					speed: 600,
					effect: "coverflow",
					centeredSlides: true,
					coverflowEffect: {
						rotate: 0,
						stretch: 0,
						depth: 100,
						modifier: 1,
						slideShadows: false,
					},
					keyboard: {
						enabled: true
					},
					mousewheel: {
						sensitivity: 1,
						releaseOnEdges: true,
					},
					observer: true,
					watchOverflow: true,
					watchSlidesProgress: true,
					watchSlidesVisibility: true,
					slideVisibleClass: 'slider__item--visible',
					slideActiveClass: 'slider__item--active',
					breakpoints: {
						1024: {
							slidesPerView: 3,
							spaceBetween: 128,
							coverflowEffect: {
								modifier: 1,
							}
						},
						1440: {
							slidesPerView: 3,
							spaceBetween: 192,
							coverflowEffect: {
								modifier: 1,
							}
						},
						1700: {
							slidesPerView: 3,
							spaceBetween: 260,
							coverflowEffect: {
								modifier: 1,
							}
						},
					},
					pagination: {
						el: sliderWrapper.querySelector('.swiper-pagination'),
						type: 'bullets',
						dynamicBullets: isPaginationDynamic,
						clickable: true,
						hideOnClick: false,
					},
					on: {
						resize: function () {
							const swiper = this;

							if (isLandscape.matches && !widthMD.matches) {
								swiper.params.slidesPerView = 3;
								swiper.params.spaceBetween = 128;
								swiper.update();
							}

							if (isPortrait.matches && !widthMD.matches) {
								swiper.params.slidesPerView = 1;
								swiper.params.spaceBetween = 0;
								swiper.update();
							}

							lenis.start();
						},
						slideChange: function() {
							const swiper = this;
							lenis.stop();
						},
						reachEnd: function() {
							const swiper = this;
							setTimeout(function () {
								lenis.start();
							}, 500);
						},
						reachBeginning: function () {
							setTimeout(function () {
								lenis.start();
							}, 500);
						},
						slideNextTransitionStart: function () {
							gsap.to(experience.world.blob.particles.rotation, {
								z: experience.world.blob.particles.rotation.z + Math.PI / 16,
								duration: 0.6,
								ease: 'power1.inOut',
							});
						},
						slidePrevTransitionStart: function () {
							gsap.to(experience.world.blob.particles.rotation, {
								z: experience.world.blob.particles.rotation.z - Math.PI / 16,
								duration: 0.6,
								ease: 'power1.inOut',
							});
						}
					},
				};
				break;
			case 'project':
				sliderParams = {
					modules: [Navigation, Pagination],
					direction: 'horizontal',
					slidesPerView: 1,
					spaceBetween: 0,
					watchOverflow: true,
					watchSlidesProgress: true,
					watchSlidesVisibility: true,
					speed: 800,
					slideVisibleClass: 'slider__item--visible',
					slideActiveClass: 'slider__item--active',
					pagination: {
						el: el.closest('.modal').querySelector('.swiper-pagination'),
						type: 'bullets',
						dynamicBullets: isPaginationDynamic,
						clickable: true,
						hideOnClick: false,
					},
					navigation: {
						nextEl: el.closest('.modal').querySelector('.js-slider-btn-next'),
						prevEl: el.closest('.modal').querySelector('.js-slider-btn-prev'),
					},
				};
				break;
		}

		sliderInstances[index] = new Swiper(sliderInstance, sliderParams);

		// Set index in data-attribute of each element
		sliderInstance.setAttribute('data-slider-id', `${index}`);
	});
}

const getSliderInstance = (target) => {
	const targetSlider = document.querySelector(target);
	return targetSlider.querySelector('.slider__instance').getAttribute('data-slider-id');
}

export { sliderInstances, sliderInit, getSliderInstance };
