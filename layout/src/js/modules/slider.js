import Swiper from 'swiper';
import { Navigation, Pagination, Scrollbar, EffectCoverflow, Keyboard, Mousewheel } from 'swiper/modules'
import {isLandscape, isPortrait, widthMD} from "./page-config";
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

		if (sliderSlidesQuantity > 20) {
			isPaginationDynamic = true;
		}

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
					loop: true,
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
							centeredSlides: false,
							coverflowEffect: {
								modifier: 1,
							}
						},
						1440: {
							slidesPerView: 3,
							spaceBetween: 192,
							centeredSlides: false,
							coverflowEffect: {
								modifier: 1,
							}
						},
						1700: {
							slidesPerView: 3,
							spaceBetween: 260,
							centeredSlides: false,
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
						click() {
							const swiper = this;

							if (widthMD.matches) {
								if (this.activeIndex === this.clickedIndex) {
									swiper.slidePrev(600);
								} else {
									swiper.slideNext(600);
								}
							} else {
								swiper.slideNext(600);
							}
						},
						resize: function () {
							const swiper = this;

							if (isLandscape.matches && !widthMD.matches) {
								swiper.params.slidesPerView = 3;
								swiper.params.spaceBetween = 128;
								swiper.params.centeredSlides = false;
								swiper.update();
							}

							if (isPortrait.matches && !widthMD.matches) {
								swiper.params.slidesPerView = 1;
								swiper.params.spaceBetween = 0;
								swiper.params.centeredSlides = false;
								swiper.update();
							}
						},
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
