import gulp from 'gulp';

import browserSync from "browser-sync";

export default (settings)=> {
    return gulp.src(settings.paths.src.fonts)
            .pipe(settings.fs.dest(settings.paths.build.fonts))
            .pipe(browserSync.reload({stream: true, once: true}))
        ;
}