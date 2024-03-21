const {src, dest} = require("gulp");
const plumber = require("gulp-plumber");
const notify = require("gulp-notify");
const newer = require("gulp-newer");

// Config
const path = require('../config/path.js');

const files = () => {

	return src(path.files.src)
		.pipe(plumber({
			errorHandler: notify.onError(error => ({
				title: "FILES",
				message: error.message
			}))
		}))
		.pipe(newer(path.files.dest))
		.pipe(dest(path.files.dest))
}

module.exports = files;
