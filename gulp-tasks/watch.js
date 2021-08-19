const { watch, parallel } = require("gulp");
const { bs } = require("./serv.js");
const { styles } = require("./styles.js");
const { scripts } = require("./scripts.js");
const { images } = require("./images.js");

const watcherFn = () => {
   watch("./index.html").on("change", bs.reload);
   watch("./src/js/*.js").on("change", parallel(scripts));
   watch("./src/scss/**/*.scss").on("change", parallel(styles));
   watch("./src/images/**/*.{jpg,jpeg,png,gif,tiff,svg}").on(
      "change",
      parallel(images)
   );
};

exports.watcher = watcherFn;
