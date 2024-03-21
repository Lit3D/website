const {src, dest} = require("gulp");
const plumber = require("gulp-plumber");
const notify = require("gulp-notify");
const fileInclude = require("gulp-file-include");
const htmlBeautify = require('gulp-html-beautify');
const typograf = require('gulp-typograf');

// Config
const path = require('../config/path.js');

const html = () => {

	return src(path.html.src)
		.pipe(plumber({
			errorHandler: notify.onError(error => ({
				title: "HTML",
				message: error.message
			}))
		}))
		.pipe(fileInclude())
		.pipe(typograf({ locale: ['ru', 'en-US'] }))
		.pipe(htmlBeautify({
			"indent_with_tabs": true,
			"max_preserve_newlines": 0
		}))
		.pipe(dest(path.html.dest))
}

module.exports = html;
