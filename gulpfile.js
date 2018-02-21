"use strict";

var gulp = require("gulp");
var sass = require("gulp-sass");
var plumber = require("gulp-plumber");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var cssmin = require("gulp-cssmin");
var rename = require("gulp-rename");
var webp = require("gulp-webp");
var server = require("browser-sync").create();

gulp.task("style", function() {
  gulp.src("source/sass/style.scss")
    .pipe(plumber())
    .pipe(sass())
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(gulp.dest("build/css"))
    .pipe(cssmin())
    .pipe(rename({suffix: ".min"}))
    .pipe(gulp.dest("build/css"))
    .pipe(server.stream());
});

gulp.task("copy", function()  {
  return gulp.src([
    "source/fonts/*.{woff,woff2}",
    "source/img/**",
    "source/js/**",
    "source/*.html"
  ], {
    base: "source"
  })
  .pipe(gulp.dest("build"));
});

gulp.task("serve", ["style"], function() {
  server.init({
    server: "build/",
    notify: false,
    open: true,
    cors: true,
    ui: false
  });

  gulp.watch("source/**/**/*/*.{scss,sass,html}", ["copy", "style"]);
  gulp.watch("build/*.html").on("change", server.reload);
});

gulp.task("img-convert", function () {
    gulp.src("source/img/*.{jpg,png}")
        .pipe(webp())
        .pipe(gulp.dest("build/img"))
});

gulp.task("build", ["copy", "style", "img-convert"]);
