const { src, dest } = require("gulp");
const { bs } = require("./serv.js");

function images() {
	src("./src/images/**/*.{jpg,jpeg,png,gif,tiff,svg}")
		.pipe(dest("./dist/images"))
		.pipe(bs.reload({ stream: true }));
}

exports.images = images;
