'use strict';
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    uglify = require('gulp-uglify'),
    // autoprefixer = require('gulp-autoprefixer'),
    livereload = require('gulp-livereload'),
    connect = require('gulp-connect'),
    concat = require('gulp-concat');
// csscomb = require('gulp-csscomb');

gulp.task('connect', function() {
    connect.server({
        root: ['./','css','js'],
        livereload: true
    });
});


gulp.task('css', function () {
    return gulp.src('scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        //   .pipe(autoprefixer({
        // 	browsers: ['last 5 versions'],
        // 	cascade: false
        // }))
        //   .pipe(csscomb())
        .pipe(gulp.dest('css'))
        .pipe(connect.reload());
});

gulp.task('modals-css', function () {
    return gulp.src('modals/**/*.scss')
        .pipe(concat('modals-all.scss'))
        .pipe(gulp.dest('scss/'))
        .pipe(sass().on('error', sass.logError))
        //   .pipe(autoprefixer({
        //  browsers: ['last 5 versions'],
        //  cascade: false
        // }))
        //   .pipe(csscomb())
        .pipe(gulp.dest('css/'))
        .pipe(connect.reload());
});

gulp.task('html', function () {
    gulp.src('*.html')
        .pipe(connect.reload());
});

gulp.task('js', function () {
    gulp.src('./js/*.js')
        .pipe(connect.reload());
});

gulp.task('watch', function() {
    gulp.watch('scss/**/*.scss', ['css'])
    gulp.watch('modals/**/*.scss', ['modals-css'])
    gulp.watch('*.html', ['html'])
    gulp.watch('./js/*.js', ['js'])
});

// gulp.task( 'csscombsass', function( ){
//     return gulp.src('scss/**/*.scss')
//     .pipe(csscomb())
// } );

// gulp.task( 'csscombsass', function( ){
//     return gulp.src(['scss/**/*.scss'], {base: './'})
//     .pipe(csscomb())
//     .pipe(gulp.dest('./'));
// } );

gulp.task('default', ['html', 'css','js', 'connect', 'modals-css', 'watch']);