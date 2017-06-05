'use strict';

import gulp from 'gulp';



import task_webserver from './_gulptasks/webserver.js';
gulp.task('webserver', task_webserver);

import task_html from  './_gulptasks/html.js';
gulp.task('build:html', task_html);

import task_javascript from  './_gulptasks/javascript.js';
gulp.task('build:js', task_javascript);

import task_javascript_libs from  './_gulptasks/javascript-libs.js';
gulp.task('build:js-libs', task_javascript_libs);

import task_sass from './_gulptasks/sass.js';
gulp.task('build:style', task_sass);

import task_image from './_gulptasks/image.js';
gulp.task('build:image',  task_image);

import task_font from './_gulptasks/font.js';
gulp.task('build:font',  task_font);

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
