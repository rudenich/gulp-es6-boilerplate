import gulp from 'gulp';
import order from 'gulp-order';

import concat from 'gulp-concat';
import uglify  from 'gulp-uglify';

import browserSync from "browser-sync";

import fs from "fs";



export default (settings)=>{
    let libsList = JSON.parse(fs.readFileSync('src/js/libs/import.json'));
    let orderLibsList = JSON.parse(fs.readFileSync('src/js/libs/import.json'));

    libsList.push(settings.paths.src.js_libs);
    
    gulp.src(libsList)
        .pipe(order(orderLibsList,{ base: './' }))
        .pipe(settings.env.production(uglify()))
        .pipe(concat('libs.js'))
        .pipe(settings.fs.dest(settings.paths.build.js))
        .pipe(browserSync.reload({stream: true}))
             
    ;
}