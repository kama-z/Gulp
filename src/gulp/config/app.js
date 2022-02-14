const isProd = process.argv.includes("--production");
const isDev = !isProd;


module.exports = {

    isProd: isProd,
    isDev: isDev,

    htmlmin: {
        collapseWhitespace: isProd
    },

    pug: {pretty: isDev},

    webpack: {
        mode: isProd ? "production" : "development"
    },


    sizeBefore: {title: "Размер файла до сжатия"},
    sizeAfter: {title: "Размер файла после сжатия"},
    imagemin: {verbose: true},
    fonter: {formats: ["ttf", "woff", "eot", "svg"]},

}
