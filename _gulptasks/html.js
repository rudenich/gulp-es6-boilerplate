import paths  from '../gulp.paths.json';
import gulp from 'gulp';
import twig from 'gulp-twig';

import fs from "fs";

import browserSync from "browser-sync";

export default ()=> {
    gulp.src(['src/humans.txt', 'src/favicon.ico', 'src/crossdomain.xml', 'src/robots.txt'])
        .pipe(gulp.dest(paths.build.html))
    ;

    let data = JSON.parse(fs.readFileSync('src/data/content.json'));
    
    return gulp.src(paths.src.html + '/*.twig')
        .pipe(twig({
            base: paths.src.html,
            data: data
        }))
        .on('error', (message)=> {
            console.log(message);
        })
        .pipe(gulp.dest(paths.build.html))
        .pipe(browserSync.reload({stream: true, once: true}))
        ;
}