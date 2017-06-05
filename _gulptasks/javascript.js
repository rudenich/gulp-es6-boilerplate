import paths  from '../gulp.paths.json';
import gulp from 'gulp';

import rollup from 'gulp-rollup';
import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import rollupBabel from 'rollup-plugin-babel';
import uglify  from 'gulp-uglify';

import env from 'gulp-environments';
import browserSync from "browser-sync";


export default ()=>{
    gulp.src(paths.src.js)
        .pipe(rollup({
            allowRealFiles: true,
            entry:['src/js/app.js'],
            format:'iife',
            external: ['jquery'],
            globals: {
                jquery: 'jQuery',
                window: 'window'
            },
            plugins:[
                nodeResolve({
                    jsnext: true,  // Default: false
                    main: true  // Default: true
                }),
                commonjs({
                    namedExports: {

                    }
                }),
                rollupBabel({
                    exclude: 'node_modules/**', // only transpile our source code
                    presets: [
                        ["latest", {
                            "es2015": {
                                "modules": false
                            }
                        }]
                    ],
                    plugins: [
                        "external-helpers"
                    ],
                    babelrc: false
                })
            ]
        }))
        .on('error',(error)=>{console.log(error)})

        .pipe(env.production(uglify()))

        .pipe(gulp.dest(paths.build.js))
        .pipe(browserSync.reload({stream: true, once: true}))
    ;
}