const { src, dest } = require("gulp");
const { bs } = require("./serv.js");

const scriptsFn = () => {
   src("./src/js/*.js")
      .pipe(dest("./dist/scripts"))
      .pipe(bs.reload({ stream: true }));
};

exports.scripts = scriptsFn;
