import gulp from 'gulp';
import zip from "gulp-zip";

export default ()=> {
    return gulp.src('build/**/*.*')
        .pipe(zip('public.zip'))
        .pipe(gulp.dest('./'))
        ;
}