import paths  from '../gulp.paths.json';
import rimraf from 'rimraf';


export default (cb)=> {
    rimraf(paths.clean, cb);
}