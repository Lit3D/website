import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock-upgrade';
import { getDocumentScrollBarWidth } from './base.js';
import { fadeIn, fadeOut } from './animations.js';
import { lenis } from "./lenis";

const openModal = (id, callback) => {
	const targetModal = document.querySelector('[data-modal="' + id + '"]');
	const pageHeader = document.querySelector('.page-header');
	const scrollBarWidth = getDocumentScrollBarWidth();

	if (document.body.contains(targetModal)) {
		lenis.stop();
	}

	if (document.body.contains(pageHeader)) {
		pageHeader.style.paddingRight = scrollBarWidth + 'px';
	}

	targetModal.classList.add('modal--open');

	fadeIn(targetModal, 300, () => {
		if (callback) {
			callback();
		}
	});
}

const closeModal = (id, callback) => {
	const targetModal = document.querySelector('[data-modal="' + id + '"]');
	const pageHeader = document.querySelector('.page-header');

	targetModal.classList.remove('modal--open');

	fadeOut(targetModal, 300, () => {

		if (document.body.contains(targetModal)) {
			lenis.start();
		}

		if (document.body.contains(pageHeader)) {
			pageHeader.style.paddingRight = ''; /* todo: check this */
		}

		if (callback) {
			callback();
		}
	});
}

const modalOpenTrigger = (event) => {
	const target = event.target.closest('[data-modal-trigger]');

	if (target) {
		const modalID = target.getAttribute('data-modal-trigger');
		openModal(modalID);
	}
};

const modalCloseTrigger = (event) => {
	const target = event.target.closest('.js-modal-close');

	if (target) {
		const modal = target.closest('.modal').getAttribute('data-modal');
		closeModal(modal);
	}
};

const modalCloseEscape = (event) => {
	const activeModal = document.querySelector('.modal--open');

	if (event.key === 'Escape' && document.contains(activeModal)) {
		closeModal(activeModal.getAttribute('data-modal'));
	}
};

const modalCloseOutside = (event) => {
	const activeModal = document.querySelector('.modal--open');
	const modalTriggers = document.querySelectorAll('[data-modal-trigger]');
	const modalTriggersArr = [...modalTriggers];
	const eventTarget = event.target;

	if (document.contains(activeModal)) {
		const doesContainTarget = modalTriggersArr.some((element) => {
			return element.contains(eventTarget);
		});

		let modalContent = activeModal.querySelector('.modal__inner')

		if (!modalContent.contains(event.target) && !doesContainTarget) {
			closeModal(activeModal.getAttribute('data-modal'));
		}
	}
};

export { modalOpenTrigger, modalCloseTrigger, modalCloseEscape, modalCloseOutside, closeModal };
