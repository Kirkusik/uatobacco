const { src, dest } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const { bs } = require("./serv.js");
const sourcemaps = require("gulp-sourcemaps");

function buildStyles() {
   src("./src/scss/**/*.scss")
      .pipe(sourcemaps.init())
      .pipe(sass().on("error", sass.logError))
      .pipe(sourcemaps.write())
      .pipe(dest("./dist/css"))
      .pipe(bs.reload({ stream: true }));
}

exports.styles = buildStyles;
