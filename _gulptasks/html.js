import paths  from '../gulp.paths.json';
import path from 'path';
import gulp from 'gulp';
import twig from 'gulp-twig';
import env from 'gulp-environments';

import inlinesource from 'gulp-inline-source';


import fs from "fs";

import browserSync from "browser-sync";

export default ()=> {
	
	let __path = path.resolve('build');
	
    gulp.src(['src/humans.txt', 'src/favicon.ico', 'src/crossdomain.xml', 'src/robots.txt'],{ allowEmpty: true })
        .pipe(gulp.dest(paths.build.html))
    ;

    let data = JSON.parse(fs.readFileSync('src/data/content.json'));
    console.log('mainpath',__path);
    return gulp.src(paths.src.html + '/*.twig')
        .pipe(twig({
            base: paths.src.html,
            data: data
        }))
		.pipe(env.production(inlinesource({compress:true, rootpath: 'build',})))
        .on('error', (message)=> {
            console.log(message);
        })
        .pipe(gulp.dest(paths.build.html))
        .pipe(browserSync.reload({stream: true, once: true}))
        ;
}