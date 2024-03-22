const {src, dest} = require("gulp");
const plumber = require("gulp-plumber");
const notify = require("gulp-notify");
const autoprefixer = require("gulp-autoprefixer");
const csso = require("gulp-csso");
const rename = require("gulp-rename");
const groupCssMediaQueries = require("gulp-group-css-media-queries");
const sass = require("gulp-sass")(require('sass'));

// Config
const path = require('../config/path.js');
const app = require('../config/app.js');
const main = require('../index.js');

const scss = () => {

	return src(path.scss.src, {sourcemaps: app.isDev})
		.pipe(plumber({
			errorHandler: notify.onError(error => ({
				title: "SCSS",
				message: error.message
			}))
		}))
		.pipe(sass())
		.pipe(autoprefixer())
		.pipe(groupCssMediaQueries())
		.pipe(dest(path.scss.dest, {sourcemaps: app.isDev}))
		.pipe(rename({suffix: '.min'}))
		.pipe(csso())
		.pipe(dest(path.scss.dest, {sourcemaps: app.isDev}))
		.pipe(main.server.stream())
}

module.exports = scss;
