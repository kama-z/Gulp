const {src, dest} = require("gulp");

// CONFIGURATION
const path = require("../config/path.js");
const app = require("../config/app.js");

// RULINGS
const plumber = require("gulp-plumber");
const notify = require("gulp-notify");
const babel = require("gulp-babel");
const uglify = require("gulp-uglify");
const webpack = require("webpack-stream");




// JS
const js = () => {
    return src(path.js.src, {sourcemaps: app.isDev})
        .pipe(plumber({
            errorHandler: notify.onError(function (error){
                return{
                    title: "JS",
                    sound: true,
                    message: error.message
                }
            })
    }))
        .pipe(babel())
        .pipe(webpack(app.webpack))
        /*.pipe(uglify())*/
        .pipe(dest(path.js.dest, {sourcemaps: app.isDev}));
}

module.exports = js;
