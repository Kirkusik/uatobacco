const browserSync = require("browser-sync").create();

const serv = () => {
   browserSync.init({
      server: {
         baseDir: "./",
      },
      browser: "firefox",
   });
};

exports.serv = serv;
exports.bs = browserSync;
