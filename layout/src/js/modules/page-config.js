const widthSM = window.matchMedia("(min-width: 768px)");
const widthMD = window.matchMedia("(min-width: 1024px)");
const widthLG = window.matchMedia("(min-width: 1280px)");
const widthXL = window.matchMedia("(min-width: 1440px)");

const isPortrait = window.matchMedia('(orientation: portrait)');
const isLandscape = window.matchMedia('(orientation: landscape)');

export {widthSM, widthMD, widthLG, widthXL, isPortrait, isLandscape};
