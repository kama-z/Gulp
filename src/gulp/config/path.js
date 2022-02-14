const pathSrs = `./src`;
const pathDest = `./dist`;


module.exports = {
    root: pathDest,

    html: {
        src:  pathSrs + "/html/*.html",
        watch:  pathSrs + "/html/**/*.html",
        dest: pathDest
    },

    pug: {
        src: pathSrs + "/pug/*.pug",
        watch: pathSrs + "/pug/**/*.pug",
        dest: pathDest
    },

    css: {
        src: pathSrs + "/css/*.css",
        watch: pathSrs + "/css/**/*.css",
        dest: pathDest + "/css"
    },

    scss: {
        src: pathSrs + "/sass/*.{sass,scss}",
        watch: pathSrs + "/sass/**/*.{sass,scss}",
        dest: pathDest + "/css"
    },

    js: {
        src: pathSrs + "/js/*.js",
        watch: pathSrs + "/js/**/*.js",
        dest: pathDest + "/js"
    },

    img: {
        src: pathSrs + "/img/*.{png,jpg,jpeg,gif,svg}",
        watch: pathSrs + "/img/**/*.{png,jpg,jpeg,gif,svg}",
        dest: pathDest + "/img"
    },

    font: {
        src: pathSrs + "/font/*.{eot,ttf,otf,otc,ttc,woff,woff2,svg}",
        watch: pathSrs + "/font/**/*.{eot,ttf,otf,otc,ttc,woff,woff2,svg}",
        dest: pathDest + "/font"
    },
}
