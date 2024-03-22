// Config
const app = require('./app.js');

const pathSrc = './src';
const pathDest = app.isDev ? './public' : './build';

module.exports = {
	root: pathDest,

	html: {
		src: pathSrc + '/html/*.html',
		watch: pathSrc + '/html/**/*.html',
		dest: pathDest
	},
	scss: {
		src: pathSrc + '/scss/main.scss',
		watch: pathSrc + '/scss/**/*.scss',
		dest: pathDest + "/css"
	},
	js: {
		src: pathSrc + '/js/*.js',
		watch: pathSrc + '/js/**/*.js',
		dest: pathDest + "/js"
	},
	img: {
		src: pathSrc + '/img/**/*.{png,jpg,jpeg,gif,svg}',
		watch: pathSrc + '/img/**/*.{png,jpg,jpeg,gif,svg}',
		dest: pathDest + "/img"
	},
	files: {
		src: pathSrc + '/files/**/*.*',
		watch: pathSrc + '/files/**/*.*',
		dest: pathDest + "/files"
	},
	font: {
		src: pathSrc + '/fonts/*.{eot,ttf,otf,otc,ttc,woff,woff2,svg}',
		watch: pathSrc + '/fonts/**/*.{eot,ttf,otf,otc,ttc,woff,woff2,svg}',
		dest: pathDest + "/fonts"
	},
	sprite: {
		src: pathSrc + '/sprite/*.svg',
		watch: pathSrc + '/sprite/*.svg',
		dest: pathDest + "/img"
	},
	favicon: {
		src: pathSrc + '/img/favicon/favicon.svg',
		watch: pathSrc + '/img/favicon/favicon.svg',
		dest: pathDest + "/img/favicon/"
	},
}
