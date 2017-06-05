import paths  from '../gulp.paths.json';
import gulp from 'gulp';

import concat from 'gulp-concat';
import uglify  from 'gulp-uglify';

import env from 'gulp-environments';
import browserSync from "browser-sync";

import fs from "fs";



export default ()=>{
    let libsList = JSON.parse(fs.readFileSync('src/js/libs/import.json'));
    libsList.push(paths.src.js_libs);
    
    gulp.src(libsList)
        .pipe(env.production(uglify()))
        .pipe(concat('libs.js'))
        .pipe(gulp.dest(paths.build.js))
        .pipe(browserSync.reload({stream: true}))
             
    ;
}