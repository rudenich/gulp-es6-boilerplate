import paths  from '../gulp.paths.json';
import gulp from 'gulp';

import browserSync from "browser-sync";

export default ()=> {
    return gulp.src(paths.src.fonts)
            .pipe(gulp.dest(paths.build.fonts))
            .pipe(browserSync.reload({stream: true, once: true}))
        ;
}