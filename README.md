# Gulp ES6 boilerplate

A toolkit for quick start developing with: twig, rollup.js, sass, foundation.

## Features

1. [brosersync](https://www.browsersync.io/) for live reload browser
1. [rollup](https://github.com/rollup/rollup) javascript module bundler with [babel](https://babeljs.io/) plugin
1. gulpfile and tasks written with es6 syntax
1. [twig](https://twig.sensiolabs.org/) template engine
1. [sass](http://sass-lang.com/) css preprocessor
1. [gulp-sass-glob](https://www.npmjs.com/package/gulp-sass-glob/) Gulp plugin for gulp-sass to use glob imports. 
1. [foundation](http://foundation.zurb.com/) framework
1. image minification


## Quick start

1. Install nodeJS and npm
1. Install gulp "npm install -g gulp"
1. Clone this repo in your work folder
1. Move terminal to work folder
1. In terminal "npm install"
1. In terminal "gulp" for develop environment or "gulp --env production" for production

## Tasks

- **webserver** - run local webserver
- **watch** - watch for changes in source files and automatic rebuild
- **build:html** - compile twig templates to html
- **build:js** - compile es6 javascript files and make bundle with rollup  
\-in *production* additionally minify js
- **build:js-libs** - concat javascript files from  directory `src/js/libs`
 and from file `src/js/libs/import.json` (used for import code from node_modules)
- **build:style** - compile scss to css. gulp-sass-glob configured to ignore files witch started with double underscore `__*.scss`  
\- in *production*: minify and prefix  
\- in *development*: write soursemaps
- **build:image** - simply copy images from pic and img to build folder  
\- in *production*: minify images
- **build:font** - symply copy fonts from font folder to build folder
- **build** - run next tasks
    - build:html
    - build:js
    - build:js-libs
    - build:style
    - build:font
    - build:image
- **default** - run next tasks
    - build
    - webserver
    - watch