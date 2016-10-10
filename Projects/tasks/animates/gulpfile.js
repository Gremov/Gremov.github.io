'use strict';
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    uglify = require('gulp-uglify'),
    // autoprefixer = require('gulp-autoprefixer'),
    livereload = require('gulp-livereload'),
    connect = require('gulp-connect'),
    concat = require('gulp-concat'),
    jade = require('gulp-jade');
// csscomb = require('gulp-csscomb');

gulp.task('connect', function() {
    connect.server({
        root: ['./','css','js'],
        livereload: true
    });
});

// CSS
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

// Modal css
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

// HTML
gulp.task('html', function () {
    gulp.src('*.html')
        .pipe(connect.reload());
});

// JS
gulp.task('js', function () {
    gulp.src('./js/*.js')
        .pipe(connect.reload());
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


// Jade
gulp.task('jade', function(){
    gulp.src('./views/*.jade')
        .pipe(jade())
        .pipe(gulp.dest('./dist/'))
});

// Watch
gulp.task('watch', function() {
    gulp.watch('scss/**/*.scss', ['css'])
    gulp.watch('modals/**/*.scss', ['modals-css'])
    gulp.watch('*.html', ['html'])
    gulp.watch('./js/*.js', ['js'])
    gulp.watch('./views/*.jade',['jade']);
});

gulp.task('default', ['html', 'css','js', 'connect', 'modals-css', 'jade', 'watch']);