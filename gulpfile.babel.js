'use strict';

import gulp from 'gulp';



import task_webserver from './_gulptasks/webserver.js';
gulp.task('webserver', gulp.series(task_webserver));

import task_html from  './_gulptasks/html.js';
gulp.task('build:html', gulp.series(task_html));

import task_javascript from  './_gulptasks/javascript.js';
gulp.task('build:js', gulp.series(task_javascript));

import task_javascript_libs from  './_gulptasks/javascript-libs.js';
gulp.task('build:js-libs', task_javascript_libs);

import task_sass from './_gulptasks/sass.js';
gulp.task('build:style', gulp.series(task_sass));

import task_image from './_gulptasks/image.js';
gulp.task('build:image',  gulp.series(task_image));

import task_font from './_gulptasks/font.js';
gulp.task('build:font',  gulp.series(task_font));

import task_clean from './_gulptasks/clean.js';
gulp.task('clean',  gulp.series(task_clean));

import task_zip from './_gulptasks/zip.js';
gulp.task('zip',  gulp.series(task_zip));

import task_watch from './_gulptasks/watch.js';
gulp.task('watch',gulp.series(task_watch));

gulp.task('build', gulp.series(
    'build:html',
    'build:js',
    'build:js-libs',
    'build:style',
    'build:font',
    'build:image'
));


gulp.task('default', gulp.series('build', 'webserver', 'watch'));
