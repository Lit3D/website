const {src, dest} = require("gulp");
const plumber = require("gulp-plumber");
const notify = require("gulp-notify");
const babel = require("gulp-babel");
const webpack = require("webpack-stream");

// Config
const main = require('../index.js');
const path = require('../config/path.js');
const app = require('../config/app.js');

const script = () => {

	return src(path.js.src, {sourcemaps: app.isDev})
		.pipe(plumber({
			errorHandler: notify.onError(error => ({
				title: "JS",
				message: error.message
			}))
		}))
		.pipe(babel())
		.pipe(webpack(app.webpack))
		.pipe(dest(path.js.dest, {sourcemaps: app.isDev}))
		.pipe(main.server.stream())
}

module.exports = script;
