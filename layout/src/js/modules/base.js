const getDocumentHeight = () => {
	const vh = window.innerHeight * 0.01;
	document.documentElement.style.setProperty('--vh', vh + 'px');
}

const getPageHeaderHeight = () => {
	const pageHeader = document.querySelector('.page-header');
	const hh = pageHeader.offsetHeight;
	document.documentElement.style.setProperty('--hh', hh + 'px');
}

const getDocumentScrollBarWidth = () => {
	return window.innerWidth - document.documentElement.clientWidth;
}

export { getDocumentHeight, getPageHeaderHeight, getDocumentScrollBarWidth };
