import paths  from '../gulp.paths.json';
import gulp from 'gulp';
import order from 'gulp-order';

import concat from 'gulp-concat';
import uglify  from 'gulp-uglify';

import env from 'gulp-environments';
import browserSync from "browser-sync";

import fs from "fs";



export default ()=>{
    let libsList = JSON.parse(fs.readFileSync('src/js/libs/import.json'));
    let orderLibsList = JSON.parse(fs.readFileSync('src/js/libs/import.json'));

    libsList.push(paths.src.js_libs);
    
    return gulp.src(libsList)
        .pipe(order(orderLibsList,{ base: './' }))
        .pipe(env.production(uglify()))
        .pipe(concat('libs.js'))
        .pipe(gulp.dest(paths.build.js))
        .pipe(browserSync.reload({stream: true}))
             
    ;
}