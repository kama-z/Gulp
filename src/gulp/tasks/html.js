const { src, dest, } = require('gulp');

// CONFIGURATION
const path = require("../config/path.js");
const app = require("../config/app.js");

// RULINGS
const fileInclude = require('gulp-file-include');
const htmlmin = require('gulp-htmlmin');
const size = require('gulp-size');
const notify = require("gulp-notify");
const plumber = require("gulp-plumber");
const webpHtml = require("gulp-webp-html");

// HTML
const html = () => {
    return src(path.html.src)
        .pipe(plumber({
            errorHandler: notify.onError(function (error) {
                return {
                    title: "HTML",
                    sound: true,
                    message: error.message
                }
            })
        }))
        .pipe(fileInclude())
        .pipe(webpHtml())
        .pipe(size(app.sizeBefore))
        .pipe(htmlmin(app.htmlmin))
        .pipe(size(app.sizeAfter))
        .pipe(dest(path.html.dest));
}

module.exports = html;
