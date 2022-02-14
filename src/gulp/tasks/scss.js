const {src, dest} = require("gulp");

// CONFIGURATION
const path = require("../config/path.js");
const app = require("../config/app.js");

// RULINGS
const plumber = require("gulp-plumber");
const notify = require("gulp-notify");
const autoprefixer = require("gulp-autoprefixer");
const csso = require("gulp-csso");
const rename = require("gulp-rename");
const size = require('gulp-size');
const shorthand = require('gulp-shorthand');
const groupCssMediaQueries = require("gulp-group-css-media-queries");
const sass = require("gulp-sass")(require("sass"));
const sassGlob = require("gulp-sass-glob");
const webpCss = require("gulp-webp-css");
const {isDev} = require("../config/app");

// SCSS
const scss = () => {
    return src(path.scss.src, {sourcemaps: isDev})
        .pipe(plumber({
            errorHandler: notify.onError(function (error) {
                return {
                    title: "SASS",
                    sound: true,
                    message: error.message
                }
            })
        }))
        .pipe(sassGlob())
        .pipe(sass())
        .pipe(webpCss())
        .pipe(autoprefixer())
        .pipe(shorthand())
        .pipe(groupCssMediaQueries())
        .pipe(size(app.sizeBefore))
        .pipe(dest(path.scss.dest, {sourcemaps: isDev}))
        .pipe(rename({suffix: ".min"}))
        .pipe(csso())
        .pipe(size(app.sizeAfter))
        .pipe(dest(path.scss.dest, {sourcemaps: isDev}));
}

module.exports = scss;
