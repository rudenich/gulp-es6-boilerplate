import paths  from '../gulp.paths.json';
import gulp from 'gulp';
import imagemin from 'gulp-imagemin';
import pngquant from 'imagemin-pngquant';

import env from 'gulp-environments';
import browserSync from "browser-sync";


export default ()=> {
    return gulp.src(paths.src.img, {base: 'src'})
        .pipe(
            env.production(
                imagemin({
                    progressive: true,
                    svgoPlugins: [{removeViewBox: false}],
                    use: [pngquant()],
                    interlaced: true
                })
            )
        )
        .pipe(gulp.dest(paths.build.img))
        .pipe(browserSync.reload({stream: true, once: true}))
        ;
}