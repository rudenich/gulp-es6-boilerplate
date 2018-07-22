'use strict';

import gulp from 'gulp';
import env from 'gulp-environments';
import GulpMem from 'gulp-mem';
import paths from './gulp.paths.json';

let settings = {
    env:env,
    paths:paths
};

if(env.development()){
    const gulpMem = new GulpMem();
    gulpMem.serveBasePath = './build';
    settings.fs = gulpMem;
}else{
    settings.fs = gulp;
}


import task_webserver from './_gulptasks/webserver.js';
gulp.task('webserver',()=>{return task_webserver(settings)} );

import task_html from  './_gulptasks/html.js';
gulp.task('build:html', ()=>{return task_html(settings)});

import task_javascript from  './_gulptasks/javascript.js';
gulp.task('build:js', ()=>{return task_javascript(settings)} );

import task_javascript_libs from  './_gulptasks/javascript-libs.js';
gulp.task('build:js-libs', ()=>{return task_javascript_libs(settings)});

import task_sass from './_gulptasks/sass.js';
gulp.task('build:style', ()=>{return task_sass(settings)});

import task_image from './_gulptasks/image.js';
gulp.task('build:image', ()=>{return task_image(settings)}  );

import task_font from './_gulptasks/font.js';
gulp.task('build:font',  ()=>{return task_font(settings)} );

import task_clean from './_gulptasks/clean.js';
gulp.task('clean',  task_clean);

import task_zip from './_gulptasks/zip.js';
gulp.task('zip',  task_zip);

import task_watch from './_gulptasks/watch.js';
gulp.task('watch',task_watch);

gulp.task('build', [
    'build:html',
    'build:js',
    'build:js-libs',
    'build:style',
    'build:font',
    'build:image'
]);


gulp.task('default', ['build', 'webserver', 'watch']);
