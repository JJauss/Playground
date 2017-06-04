module.exports = function(bs){

  return {
    port:"8000",
    files: ["./src/**/*.{html,htm,css,js,map}"],
    browser:[
      "chrome"
    ],
    server:{
      baseDir:"src/",
      routes:{
        "/jspm_packages": "jspm_packages",
        "/config": ".",
        "/assets/css/styles.css": "node_modules/bootstrap/dist/css/bootstrap.css"

      }
    }
  };
}