// load script from URL
const loadScript = (url, callback) => {
	const script = document.createElement("script");

	if (script.readyState) {
		script.onreadystatechange = function () {
			if (script.readyState === "loaded" ||
				script.readyState === "complete") {
				script.onreadystatechange = null;
				callback();
			}
		};
	} else {
		script.onload = function () {
			callback();
		};
	}

	script.src = url;
	document.getElementsByTagName("head")[0].appendChild(script);
};

function getMobileViewportHeight() {
	// Calculate the viewport height
	const viewportHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

	// Calculate the height of the top browser bar (address bar)
	const topBarHeight = window.outerHeight - viewportHeight;

	// Calculate the height of the bottom browser bar (navigation bar)
	const bottomBarHeight = window.outerHeight - (topBarHeight + viewportHeight);

	// Calculate the adjusted viewport height
	const adjustedViewportHeight = viewportHeight - (topBarHeight + bottomBarHeight);

	return adjustedViewportHeight;
}

const mobileViewportHeight = getMobileViewportHeight();


export { loadScript };
