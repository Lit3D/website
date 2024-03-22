const {watch, series, parallel} = require('gulp');
const browserSync = require('browser-sync').create();

// Config
const path = require('./config/path.js');
const app = require('./config/app.js');

// Tasks
const clear = require('./task/clear.js');
const html = require('./task/html.js');
const scss = require('./task/scss.js');
const js = require('./task/script.js');
const img = require('./task/img.js');
const files = require('./task/files.js');
const font = require('./task/font.js');
const sprite = require('./task/sprite.js');
const favicon = require('./task/favicon.js');

// Сервер

const server = () => {
	browserSync.init({
		server: {
			baseDir: path.root,
		}
	});
}

const watcher = () => {
	watch(path.html.watch, html).on('all', browserSync.reload);
	watch(path.scss.watch, scss);
	watch(path.js.watch, js).on('all', browserSync.reload);
	watch(path.img.watch, img).on('all', browserSync.reload);
	watch(path.files.watch, parallel(files, js)).on('all', browserSync.reload);
	watch(path.font.watch, font).on('all', browserSync.reload);
	watch(path.sprite.watch, sprite).on('all', browserSync.reload);
	watch(path.favicon.watch, favicon).on('all', browserSync.reload);
}

const build = series(
	clear,
	parallel(html, scss, js, img, files, font, sprite, favicon)
);

const dev = series(
	build,
	parallel(watcher, server)
);

exports.server = browserSync;
exports.html = html;
exports.scss = scss;
exports.js = js;
exports.img = img;
exports.files = files;
exports.font = font;
exports.sprite = sprite;
exports.watch = watcher;
exports.clear = clear;
exports.favicon = favicon;

exports.default = app.isProd ? build : dev;
