"use strict";

const gulp = require('gulp');
const gulp_rename = require('gulp-rename');
const gulp_uglify = require('gulp-uglify');
const uglifycss = require('gulp-uglifycss');

const buildScripts = () => { 
    return gulp.src('./assets/js/*.js')
        .pipe(gulp_rename('scripts.js'))
        .pipe(gulp_uglify())
        .pipe(gulp.dest('./dist/js/'));
}

const buildStyles = () => { 
    return gulp.src('./assets/css/*.css')
        .pipe(gulp_rename('style.css')) 
        .pipe(uglifycss({
            "maxLineLen": 80,
            "uglyComments": true
        })) 
        .pipe(gulp.dest('./dist/css/')); 
}



const buildAll = gulp.parallel(buildScripts, buildStyles)

gulp.task('buildAll', buildAll);

