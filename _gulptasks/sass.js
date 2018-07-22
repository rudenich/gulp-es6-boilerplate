import gulp from 'gulp';


import sass  from 'gulp-sass';
import sassGlob  from 'gulp-sass-glob';
import sourcemaps  from 'gulp-sourcemaps';
import prefixer  from 'gulp-autoprefixer';
import cssmin from 'gulp-minify-css';


import browserSync from "browser-sync";




export default (settings)=> {
    return gulp.src(settings.paths.src.style)
        .pipe(
            settings.env.development(
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
            settings.env.production(
                prefixer({browserslist: ['> 1%', 'IE >= 9'], cascade: true, remove: false, flexbox: true})
            )
        )

        .pipe(settings.env.production(cssmin()))
        .pipe(settings.env.development(sourcemaps.write()))
        .pipe(settings.fs.dest(settings.paths.build.css))
        .pipe(browserSync.reload({stream: true}))
        ;
}