// CONFIGURATION
const path = require("../config/path.js");

// RULINGS
const del = require("del");

// DELETE
const clear = () => {
    return del(path.root);
}

module.exports = clear;
