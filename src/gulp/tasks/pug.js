const {src, dest} = require("gulp");

// CONFIGURATION
const path = require("../config/path.js");
const app = require("../config/app.js");

// RULINGS
const plumber = require("gulp-plumber");
const notify = require("gulp-notify");
const pugs = require("gulp-pug");
const webpHtml = require("gulp-webp-html");

// PUG
const pug = () => {
    return src(path.pug.src)
        .pipe(plumber({
            errorHandler: notify.onError(function (error) {
                return {
                    title: "PUG",
                    sound: true,
                    message: error.message
                }
            })
        }))
        .pipe(pugs(app.pug))
        .pipe(webpHtml())
        .pipe(dest(path.pug.dest));
}

module.exports = pug;
