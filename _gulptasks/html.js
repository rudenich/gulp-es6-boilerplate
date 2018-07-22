import gulp from 'gulp';
import twig from 'gulp-twig';

import fs from "fs";

import browserSync from "browser-sync";




export default (settings)=> {


    gulp.src(['src/humans.txt', 'src/favicon.ico', 'src/crossdomain.xml', 'src/robots.txt'])
        .pipe(settings.fs.dest(settings.paths.build.html))
    ;

    let data = JSON.parse(fs.readFileSync('src/data/content.json'));
    
    return gulp.src(settings.paths.src.html + '/*.twig')
        .pipe(twig({
            base: settings.paths.src.html,
            data: data
        }))
        .on('error', (message)=> {
            console.log(message);
        })
        .pipe(settings.fs.dest('./build'))
        //.pipe(gulp.dest(paths.build.html))
        .pipe(browserSync.reload({stream: true, once: true}))
        ;
}