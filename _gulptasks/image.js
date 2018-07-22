
import gulp from 'gulp';
import imagemin from 'gulp-imagemin';
import pngquant from 'imagemin-pngquant';


import browserSync from "browser-sync";


export default (settings)=> {
    return gulp.src(settings.paths.src.img, {base: 'src'})
        .pipe(
            settings.env.production(
                imagemin({
                    progressive: true,
                    svgoPlugins: [{removeViewBox: false}],
                    use: [pngquant()],
                    interlaced: true
                })
            )
        )
        .pipe(settings.fs.dest(settings.paths.build.img))
        .pipe(browserSync.reload({stream: true, once: true}))
        ;
}