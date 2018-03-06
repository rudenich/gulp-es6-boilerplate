import gulp from 'gulp';
import paths  from '../gulp.paths.json';

import sass  from 'gulp-sass';
import sassGlob  from 'gulp-sass-glob';
import sourcemaps  from 'gulp-sourcemaps';
import prefixer  from 'gulp-autoprefixer';
import cssmin from 'gulp-minify-css';

import env from 'gulp-environments';
import browserSync from "browser-sync";

export default ()=> {
    return gulp.src(paths.src.style)
        .pipe(
            env.development(
                sourcemaps.init()
            )
        )
        .pipe(sassGlob({
            ignorePaths: [
                '**/__*.scss'
            ]
        }))
        .pipe(sass({
            includePaths: ['src/scss/','bower_components/foundation-sites/scss',],
            outputStyle: 'expanded',
            sourceMap: false,
            errLogToConsole: true
        }))
        .on('error', sass.logError)
        .pipe(
            env.production(
                prefixer({browserslist: ['> 1%', 'IE >= 9'], cascade: true, remove: false, flexbox: true})
            )
        )

        .pipe(env.production(cssmin()))
        .pipe(env.development(sourcemaps.write()))
        .pipe(gulp.dest(paths.build.css))
        .pipe(browserSync.reload({stream: true}))
        ;
}