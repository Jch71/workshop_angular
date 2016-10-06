//"preinstall": "npm i -g gulp yo bower http-server karma uglifyjs uglify jshint jscs browserify",

var gulp = require('gulp');
module.exports = gulp;

var gutil = require('gulp-util');
var bower = require('bower');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var sh = require('shelljs');
var uglify = require('gulp-uglify');
var del = require('del');
var debug = require('gulp-debug');
var gulpIgnore = require('gulp-ignore');
var size = require('gulp-filesize');
var template = require('gulp-template');
var ngAnnotate = require('gulp-ng-annotate');

var CONFIG = {
    modules: {
        path: './src/modules/',
        templates: 'templates/module/*',
        baseName: '/module.*',
    },
    paths: {
        js: ['./src/modules/*.js', './src/modules/**/*.js']
    },
    bundle: './src/lib/app.bundle.js',
    ignored: '*.specs.js'
};

//gulp mmodule -n MODULE_NAME
gulp.task('module', ['prepareModule'], function() {

    var module_name = process.argv.slice(4)[0];
    return gulp.src(CONFIG.modules.path + module_name + CONFIG.modules.baseName)
        .pipe(rename({
            basename: module_name
        }))
        .pipe(gulp.dest(CONFIG.modules.path + module_name))
        .on('end', function() {
            del(CONFIG.modules.path + module_name + CONFIG.modules.baseName)
        });
});

gulp.task('prepareModule', function() {

    var module_name = process.argv.slice(4)[0];
    return gulp.src(CONFIG.modules.templates)
        .pipe(template({
            module_name: module_name
        }))
        .pipe(gulp.dest(CONFIG.modules.path + module_name))
});


gulp.task('watchjs', function() {
    gulp.watch(CONFIG.paths.js, ['bundle']);
});

gulp.task('bundle', ['clean'], function() {
    return gulp.src(CONFIG.paths.js)
        .pipe(gulpIgnore.exclude(CONFIG.ignored))
        .pipe(debug())
        .pipe(sourcemaps.init())
        .pipe(concat('app.bundle.js'))
        //.pipe(uglify())
        //.pipe(ngAnnotate())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./client/lib'))
        .pipe(size())
        .on('end', function() {
            gutil.log('Done!');
            //sh.exec('npm r');
        });
});

gulp.task('clean', function() {
    return del(CONFIG.bundle);
});
