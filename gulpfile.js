'use strict';

/*---------- Declare core variables ----------*/

var gulp = require('gulp'),
    wiredep = require('wiredep').stream,
    server = require('tiny-lr')();


/*---------- Declare gulp variables ----------*/

var jshint = require('gulp-jshint'),
    csslint = require('gulp-csslint'),
    clean = require('gulp-clean'),
    usemin = require('gulp-usemin'),
    rev = require('gulp-rev'),
    uglify = require('gulp-uglify'),
    minifyCss = require('gulp-minify-css'),
    imagemin = require('gulp-imagemin'),
    watch = require('gulp-watch'),
    size = require('gulp-size'),
    autoprefixer = require('gulp-autoprefixer'),
    header = require('gulp-header'),
    minifyHtml = require('gulp-minify-html'),
    bower = require('gulp-bower'),
    livereload = require('gulp-livereload'),
    bump = require('gulp-bump');

// TODO: (martin) The above gulp variables should be replaced with 'gulp-load-plugin' however it seems like this plugin is not loading all plugins properly at the moment so we need to wait till stable version will be released.
// Load plugins
/*---------- Load all plugins ----------*/
// var $ = require('gulp-load-plugins')();


/*---------- Declare paths ----------*/

var paths = {
    app: {
        basePath: 'client/',
        vendor: 'client/vendor/',
        styles: 'client/assets/styles/**/*.css',
        images: 'client/assets/images/**/*.{png,gif,jpg,jpeg}',
        fonts: 'client/assets/fonts/**/*',
        appPath: 'client/app/',
        scripts: 'client/app/**/*.js',
        html: 'client/app/**/*.html'
    },
    build: {
        basePath: 'build/',
        images: 'build/assets/images/',
        html: 'build/views/',
        fonts: 'build/assets/fonts/'
    }
}


/*---------- Declare banner details ----------*/

var pkg = require('./package.json');
var bannerDetails = {pkg: pkg, date: new Date};
var banner = ['/**\n' +
    ' * Time Booker v<%= pkg.version %> (<%= pkg.homepage %>)\n' +
    ' * Copyright <%= date.getFullYear() %>(c) <%= pkg.author %>\n' +
    ' * Licensed under <%= pkg.license %>\n' +
    ' */\n\n'];


/*---------- Tasks ----------*/

// Clean build folder
gulp.task('clean', function () {
    return gulp.src([paths.build.basePath], {read: false})
        .pipe(clean());
});

// CSS Lint
gulp.task('csslint', function () {
    return gulp.src(paths.app.styles)
        .pipe(csslint())
        .pipe(csslint.reporter())
        .pipe(livereload(server))
        .pipe(size());
});

// JS Lint
gulp.task('jshint', function () {
    return gulp.src(paths.app.scripts)
        .pipe(jshint('.jshintrc'))
        .pipe(jshint.reporter('jshint-stylish'))
        .pipe(livereload(server))
        .pipe(size());
});

// Concat & Minify Scripts, CSS, HTML and add revision to avoid cache
// TODO: (martin) if 'csslint' and 'jshint' failed it should not execute 'usemin' tasks but at the moment it does figure out how to stop that
gulp.task('usemin', ['csslint', 'jshint'], function () {
    return gulp.src(paths.app.html)
        .pipe(usemin({
            css: [autoprefixer('last 2 version'), minifyCss(), rev(), header(banner, bannerDetails)],
            js: [uglify(), rev(), header(banner, bannerDetails)],
            html: [minifyHtml()]
//            img: [imagemin()]
        }))
        .pipe(gulp.dest(paths.build.html))
        .pipe(size());
});

// Minify Images
// TODO: (martin) How do we gonna revision imagines?
gulp.task('imagemin', function () {
    return gulp.src(paths.app.images)
        .pipe(imagemin({
            optimizationLevel: 5,
            progressive: true,
            interlaced: true
        }))
//        .pipe(rev())
        .pipe(gulp.dest(paths.build.images))
        .pipe(size());
});

// Copy required files to build folder
gulp.task('copy', function () {
    gulp.src([
            'client/*.{ico,png,txt}',
            'client/.htaccess'
        ])
        .pipe(gulp.dest(paths.build.basePath));
    gulp.src(paths.app.fonts)
        .pipe(gulp.dest(paths.build.fonts));
});

// Install Bower components
gulp.task('bower', function () {
    return bower();
});

// Inject Bower components to index.html
gulp.task('wiredep', ['bower'], function () {
    return gulp.src(paths.app.html)
        .pipe(wiredep({
            directory: paths.app.vendor,
            ignorePath: paths.app.basePath
        }))
        .pipe(gulp.dest(paths.app.appPath))
        .pipe(size());
});

// Watch
gulp.task('watch', function () {

    // Listen on port 35729
    server.listen(35729, function (err) {
        if (err) {
            return console.log(err)
        }
        ;

        gulp.watch([
            paths.app.html,
            paths.app.images,
            paths.app.fonts
        ], function (event) {
            return gulp.src(event.path)
                .pipe(livereload(server));
        });

        // Watch css files
        gulp.watch(paths.app.styles, ['csslint']);

        // Watch js files
        gulp.watch(paths.app.scripts, ['jshint']);

        // Watch bower file
        gulp.watch('bower.json', ['wiredep']);
    });

});

// Increase version number in package.json & bower.json
gulp.task('bump', function () {
    return gulp
        .src(['package.json', 'bower.json'])
        .pipe(bump())
        .pipe(gulp.dest(paths.build.basePath));
});

/*---------- Environments Tasks ----------*/

// Default Task
gulp.task('default', ['clean', 'wiredep'], function () {
    gulp.start('csslint', 'jshint', 'watch');
})

// Build Task
gulp.task('build', ['clean', 'wiredep'], function () {
    gulp.start('usemin', 'imagemin', 'copy');
})

// Release Task
gulp.task('release', ['build'], function () {
    gulp.start('bump');
})