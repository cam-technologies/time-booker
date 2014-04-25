'use strict';

//=============================================
//            DECLARE CORE VARIABLES
//=============================================

/**
 * Load required core dependencies. These are installed based on the versions listed
 * in 'package.json' when you do 'npm install' in this directory.
 */
var gulp        = require('gulp');
var server      = require('tiny-lr')();
var wiredep     = require('wiredep').stream;
var runSequence = require('run-sequence');


//=============================================
//            DECLARE GULP VARIABLES
//=============================================

/**
 * Load required Gulp tasks. These are installed based on the versions listed
 * in 'package.json' when you do 'npm install' in this directory.
 */
var rev                  = require('gulp-rev');
var size                 = require('gulp-size');
var bump                 = require('gulp-bump');
var help                 = require('gulp-help')(gulp);
var bower                = require('gulp-bower');
var clean                = require('gulp-clean');
var watch                = require('gulp-watch');
//var inject               = require('gulp-inject');
var jshint               = require('gulp-jshint');
var header               = require('gulp-header');
var uglify               = require('gulp-uglify');
var usemin               = require('gulp-usemin');
var csslint              = require('gulp-csslint');
var refresh              = require('gulp-livereload');
var htmlhint             = require("gulp-htmlhint");
var imagemin             = require('gulp-imagemin');
var minifyCss            = require('gulp-minify-css');
var minifyHtml           = require('gulp-minify-html');
var autoprefixer         = require('gulp-autoprefixer');


//=============================================
//            DECLARE CONSTANTS
//=============================================

/**
 * Declare constants that are use in gulpfile.js or angular app
 */
var LIVERELOAD_PORT = 35729;


//=============================================
//            DECLARE PATHS
//=============================================

var paths = {

    /**
     * This is a collection of file patterns that refer to our app code (the
     * stuff in `src/`). These file paths are used in the configuration of
     * build tasks.
     *
     * - 'styles'       contains all project css styles
     * - 'images'       contains all project images
     * - 'fonts'        contains all project fonts
     * - 'scripts'      contains all project javascript except config-env.js and unit test files
     * - 'html'         contains main html files
     * - 'templates'    contains all project html templates
     */
    client: {
        basePath:       'client/src/',
        styles:         'client/src/assets/styles/**/*.css',
        images:         'client/src/assets/images/**/*.{png,gif,jpg,jpeg}',
        fonts:          'client/src/assets/fonts/**/*',
        scripts:        'client/src/app/**/*.js',
        html:           'client/src/*.html',
        templates:      'client/src/app/**/*.html'
    },
    server:             'server/src/**/*',
    /**
     * The 'vendor' folder is where our bower dependencies are hold.
     */
    vendor:             'client/src/vendor/',
    /**
     * The 'tmp' folder is where our html templates are compiled to JavaScript during
     * the build process and then they are concatenating with all other js files and
     * copy to 'dist' folder.
     */
    tmp: {
        basePath:       '.tmp',
        scripts:        '.tmp/scripts/'
    },
    /**
     * The 'build' folder is where our app resides once it's
     * completely built.
     *
     * - 'dist'         application distribution source code
     * - 'docs'         application documentation
     */
    build: {
        basePath:       'build/',
        dist: {
            basePath:       'build/dist/',
            client: {
                basePath:   'build/dist/client/',
                images:     'build/dist/client/assets/images/',
                fonts:      'build/dist/client/assets/fonts/'
            },
            server: {
                basePath:   'build/dist/server/'
            }
        },
        docs:           'build/docs/'
    }
};


//=============================================
//            DECLARE BANNER DETAILS
//=============================================

/**
 * We read in our 'package.json' file so we can access the package name and
 * version. It's already there, so we don't repeat ourselves here.
 */
var pkg = require('./package.json');

/**
 * The banner is the comment that is placed at the top of our compiled
 * source files. It is first processed as a Grunt template, where the `<%=`
 * pairs are evaluated based on this very configuration object.
 */
var banner = ['/**',
    ' * Time Booker v<%= pkg.version %> (<%= pkg.homepage %>)',
    ' * Copyright <%= date.getFullYear() %>(c) <%= pkg.author %>',
    ' * Licensed under <%= pkg.license %>',
    ' */',
    ''].join('\n');


//=============================================
//               SUB TASKS
//=============================================

/**
 * The 'clean' task delete 'build' and '.tmp' directories.
 */
gulp.task('clean', 'Delete \'build\' and \'.tmp\' directories', function () {
    return gulp.src([paths.build.basePath, paths.tmp.basePath], {read: false}) // Not necessary to read the files (will speed up things), we're only after their paths
        .pipe(clean());
});

/**
 * The 'copy' task just copies files from A to B. We use it here to copy
 * our files that haven't been copied by 'compile' task e.g. (fonts, etc.) into 'build`.
 */
gulp.task('copy', 'Copy project files that haven\'t been copied by \'compile\' task e.g. (fonts, etc.) into \'build\' folder.', function () {
    gulp.src([
        'client/src/*.{ico,png,txt}'
    ])
        .pipe(gulp.dest(paths.build.dist.client.basePath));
    gulp.src(paths.client.fonts)
        .pipe(gulp.dest(paths.build.dist.client.fonts));
    gulp.src(paths.server)
        .pipe(gulp.dest(paths.build.dist.server.basePath + 'src'));
    gulp.src('package.json')
        .pipe(gulp.dest(paths.build.dist.basePath));
});

/**
 * The 'csslint' task defines the rules of our linter as well as which files we
 * should check. This file, all css sources.
 */
gulp.task('csslint', 'Lint CSS files', function () {
    return gulp.src(paths.client.styles)
        .pipe(csslint())
        .pipe(csslint.reporter())
        .pipe(refresh(server))
        .pipe(size());
});

/**
 * The 'jshint' task defines the rules of our hinter as well as which files we
 * should check. This file, all javascript sources.
 */
gulp.task('jshint', 'Hint JavaScripts files', function () {
    return gulp.src(paths.client.scripts)
        .pipe(jshint('.jshintrc'))
        .pipe(jshint.reporter('jshint-stylish'))
//        .pipe(jshint.reporter("fail"))
        .pipe(refresh(server))
        .pipe(size());
});

/**
 * The 'htmlhint' task defines the rules of our hinter as well as which files we
 * should check. This file, all html sources.
 */
gulp.task('htmlhint', 'Hint HTML files', function () {
    return gulp.src([paths.client.html, paths.client.templates])
        .pipe(htmlhint('.htmlhintrc'))
        .pipe(htmlhint.reporter())
        .pipe(refresh(server))
        .pipe(size());
});

/**
 * The 'images' task minify all project images.
 */
gulp.task('images', 'Minify the images', function () {
    return gulp.src(paths.client.images)
        .pipe(imagemin({
            optimizationLevel: 5,
            progressive: true,
            interlaced: true
        }))
        .pipe(gulp.dest(paths.build.dist.client.images))
        .pipe(size());
});

/**
 * The 'compile' task compile all js, css and html files.
 *
 * 1. it compiles and minify html templates to js template cache
 * 2. css      - minify, add revision number, add banner header
 *    css_libs - minify, add revision number
 *    js       - annotates the sources before minifying, minify, add revision number, add banner header
 *    js_libs  - minify, add revision number
 *    html     - minify
 */
// TODO: (martin) if 'csslint' and 'jshint' failed it should not execute 'compile' tasks but at the moment it does - figure out how to fix that
gulp.task('compile', 'Does the same as \'csslint\', \'jshint\', \'htmlhint\', \'images\', \'templates\' tasks but also compile all JS, CSS and HTML files',
    ['csslint', 'jshint', 'htmlhint', 'images'], function () {
        var projectHeader = header(banner, { pkg : pkg, date: new Date } );

        return gulp.src(paths.client.html)
//            .pipe(inject(gulp.src(paths.tmp.scripts + 'templates.js', {read: false}),
//                {
//                    starttag: '<!-- inject:templates:js -->',
//                    ignorePath: [paths.tmp.basePath]
//                }
//            ))
            .pipe(usemin({
                css:        [autoprefixer('last 2 version'), minifyCss(), rev(), projectHeader],
                css_libs:   [minifyCss(), rev()],
                js:         [uglify(), rev(), projectHeader],
                js_libs:    [uglify(), rev()],
                html:       [minifyHtml()]
            }))
            .pipe(gulp.dest(paths.build.dist.client.basePath))
            .pipe(size());
});

/**
 * The 'bower' task install all bower components specify in bower.json from bower repository.
 */
gulp.task('bower', 'Install all bower dependencies specify in bower.json from bower repository', function () {
    return bower();
});

/**
 * The 'bower-install' does the same as 'bower' task but also inject bower components to index.html.
 */
gulp.task('bower-install', 'Does the same as \'bower\' task but also inject bower components to index.html', ['bower'], function () {
    return gulp.src(paths.client.html)
        .pipe(wiredep({
            directory: paths.vendor,
            ignorePath: paths.client.basePath
        }))
        .pipe(gulp.dest(paths.client.basePath))
        .pipe(size());
});

/**
 * For rapid development, we have a watch set up that checks to see if
 * any of the files listed below change, and then to execute the listed
 * tasks when they do. This just saves us from having to type "gulp" into
 * the command-line every time we want to see what we're working on; we can
 * instead just leave "gulp watch" running in a background terminal.
 */
gulp.task('watch', 'Watch files for changes', function () {

    // Listen on port 35729
    server.listen(LIVERELOAD_PORT, function (err) {
        if (err) {
            return console.log(err)
        };

        gulp.watch([
            paths.client.html,
            paths.client.templates,
            paths.client.images,
            paths.client.fonts
        ], function (event) {
            return gulp.src(event.path)
                .pipe(refresh(server));
        });

        // Watch css files
        gulp.watch(paths.client.styles, ['csslint']);

        // Watch js files
        gulp.watch(paths.client.scripts, ['jshint']);

        // Watch js files
        gulp.watch([paths.client.html, paths.client.templates], ['htmlhint']);

        // Watch bower file
        gulp.watch('bower.json', ['bower-install']);
    });

});

/**
 * Increase version number in package.json & bower.json.
 */
gulp.task('bump', 'Increase version number in package.json & bower.json', function () {
    return gulp
        .src(['package.json', 'bower.json'])
        .pipe(bump())
        .pipe(gulp.dest(paths.build.dist.client.basePath));
});


//=============================================
//                MAIN TASKS
//=============================================

/**
 * The 'install' task is to build env and install bower.
 */
gulp.task('install', 'Build env and install bower',  function (cb) {
    runSequence(['bower-install'], cb);
});

/**
 * The 'default' task is to build env, install bower dependencies and run watch.
 */
gulp.task('default', 'Build env, install bower dependencies and run watch', function (cb) {
    runSequence(['bower-install'],
        ['csslint', 'jshint', 'htmlhint', 'watch'],
        cb);
});

/**
 * The 'compile' task gets app ready for deployment by concatenating,
 * minifying etc.
 */
gulp.task('build', 'Build application for deployment', function (cb) {
    runSequence(['clean', 'bower-install'],
        ['compile', 'copy'],
        cb);
});

// Release Task
gulp.task('release', 'Does the same as \'build\' task but also increase version number in package.json & bower.json', ['build'], function () {
    gulp.start('bump');
});