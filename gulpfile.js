const { watch, series, parallel } = require('gulp');
const browserSync = require("browser-sync").create();

// CONFIGURATION
const path = require("./src/gulp/config/path.js");
const app = require("./src/gulp/config/app.js");

// Tasks
const html = require('./src/gulp/tasks/html.js')
const css = require('./src/gulp/tasks/css.js')
const clear = require('./src/gulp/tasks/clear.js')
const pug = require('./src/gulp/tasks/pug.js')
const scss = require('./src/gulp/tasks/scss.js')
const js = require('./src/gulp/tasks/js.js')
const img = require('./src/gulp/tasks/img.js')
const font = require('./src/gulp/tasks/font.js')

// SERVER
const server = () => {
    browserSync.init({
        server: {
            baseDir: path.root
        }
    });
}

// WATCH
const watcher = () => {
    watch(path.pug.watch, pug).on("all", browserSync.reload);
    watch(path.scss.watch, scss).on("all", browserSync.reload);
    watch(path.js.watch, js).on("all", browserSync.reload);
    watch(path.img.watch, img).on("all", browserSync.reload);
    watch(path.font.watch, font).on("all", browserSync.reload);
}

const build = series(
    clear,
    parallel(pug, scss, js, img, font),
);

const dev = series(
    build,
    parallel(watcher, server)
);

/*exports.html = html;
exports.css= css;*/
exports.watch = watcher;
exports.clear = clear;
exports.pug = pug;
exports.scss = scss;
exports.js = js;
exports.img = img;
exports.font = font;

exports.default = app.isProd ? build : dev;
