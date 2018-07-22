import gulp from 'gulp';

import rollup from 'gulp-rollup';
import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import rollupBabel from 'rollup-plugin-babel';
import uglify  from 'gulp-uglify';


import browserSync from "browser-sync";


export default (settings)=>{
    gulp.src(settings.paths.src.js)
        .pipe(rollup({
            allowRealFiles: true,
            input:['src/js/app.js'],
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

        .pipe(settings.env.production(uglify()))

        .pipe(settings.fs.dest(settings.paths.build.js))
        .pipe(browserSync.reload({stream: true, once: true}))
    ;
}