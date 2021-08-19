const { src, dest } = require("gulp");
const { bs } = require("./serv.js");

const images = () => {
   src("./src/images/**/*.{jpg,jpeg,png,gif,tiff,svg}")
      .pipe(dest("./dist/images"))
      .on("end", bs.reload);
};

exports.images = images;
