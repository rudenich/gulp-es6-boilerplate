import gulp from 'gulp';
import watch from 'gulp-watch';
import paths from '../gulp.paths.json';

export default ()=>{
    gulp.task('watch',  () => {
        watch([paths.watch.html],  (event, cb) => {
            gulp.start('build:html');
        });
        watch([paths.watch.style], (event, cb) => {
            gulp.start('build:style');
        });
        watch(paths.watch.js,  (event,  cb) => {
            gulp.start('build:js');
        });
        watch(paths.watch.img, (event, cb) =>{
            gulp.start('build:img');
        });
        watch([paths.watch.fonts], (event, cb) =>{
            gulp.start('build:font');
        });
        watch([paths.watch.js_libs], (event, cb) =>{
            gulp.start('build:js-libs');
        });
    });
}