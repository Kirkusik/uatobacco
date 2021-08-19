// const gulp = require("gulp");
const { parallel, series } = require("gulp");
const { serv } = require("./gulp-tasks/serv.js");
const { watcher } = require("./gulp-tasks/watch.js");
const { scripts } = require("./gulp-tasks/scripts.js");
const { styles } = require("./gulp-tasks/styles.js");
const { images } = require("./gulp-tasks/images.js");

exports.default = parallel(serv, watcher, series(styles, scripts, images));
// exports.dev
// exports.styles = styles;
