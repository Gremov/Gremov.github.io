'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const plumberNotifier = require('gulp-plumber-notifier');
const postcss = require('gulp-postcss');
const autoprefixer = require('gulp-autoprefixer');
var server = require("browser-sync");

gulp.task('sass', function () {
    return gulp.src('sass/**/*.scss')
        .pipe(plumberNotifier())
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss([
            autoprefixer({browsers: [
                "last 1 version",
                "last 2 Chrome versions",
                "last 2 Firefox versions",
                "last 2 Opera versions",
                "last 2 Edge versions"
            ]})
        ]))

        .pipe(gulp.dest('css'))
        .pipe(server.reload({stream: true}));
});

gulp.task("serve", ["style"], function() {
    server.init({
        server: "."
    });

    gulp.watch("sass/**/*.scss", ["style"]);
    gulp.watch("*.html")
        .on("change", server.reload);

});

