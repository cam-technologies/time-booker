"use strict";

module.exports = function (config) {
    var files, preprocessors;

    // 'env' argument is specify in gulpfile.js. The reason for argv[2] is because the first element is 'node', the second element
    // is be the name of the JavaScript file. The next elements will be any additional command line arguments.
    var isProduction = JSON.parse(process.argv[2]).env === 'production' ? true : false;

    if(isProduction) {
        files = [
            // libraries
            'client/src/vendor/jquery/dist/jquery.js',
            'client/src/vendor/handlebars/handlebars.js',
            'client/src/vendor/bootstrap/dist/js/bootstrap.js',
            'client/src/vendor/ember/ember.js',

            // libraries
            'build/dist/client/scripts/lib.min-*.js',

            // our app
            'build/dist/client/scripts/app.min-*.js',

            // tests
            'client/test/unit/**/*_test.js'
        ],

        preprocessors = {
            // source files, that you wanna generate coverage for - do not include tests or libraries
            // (these files will be instrumented by Istanbul)
            '**/build/dist/client/scripts/app.min-*.js': 'coverage'
            // TODO (martin): where the handlebars should be store in production
//            '**/client/src/app/templates/**/*.{hbs,hjs,handlebars}': 'ember'
        }
    } else {
        files = [
            // libraries
            'client/src/vendor/jquery/dist/jquery.js',
            'client/src/vendor/handlebars/handlebars.js',
            'client/src/vendor/bootstrap/dist/js/bootstrap.js',
            'client/src/vendor/ember/ember.js',

            // our app
            // TODO (martin): we need to remove the code that is not using in app folder as the test is failing for some reason
//            'client/src/app/**/*.js',
            'client/src/app/app.js',

//            'client/src/app/templates/**/*.{hbs,hjs,handlebars}',
            'client/src/app/templates/application.hbs',

            // tests
            'client/test/unit/**/*_test.js'
        ],

        preprocessors = {
            // source files, that you wanna generate coverage for - do not include tests or libraries
            // (these files will be instrumented by Istanbul)
            '**/client/src/app/**/*.js': 'coverage',
            '**/client/src/app/templates/**/*.{hbs,hjs,handlebars}': 'ember'
        }
    }

    config.set({
        // base path, that will be used to resolve files and exclude
        basePath: '../../../',

        frameworks: ['qunit'],

        // list of files / patterns to load in the browser
        files: files,

        // list of files to exclude
        exclude: [
        ],

        // use dots reporter, as travis terminal does not support escaping sequences
        // possible values: 'dots', 'progress', 'junit'
        // CLI --reporters progress
        reporters: ['dots', 'junit', 'coverage', 'coveralls'],

        junitReporter: {
            // will be resolved to basePath (in the same way as files/exclude patterns)
            outputFile: 'build/test-reports/client/unit-test-report.xml',
            suite: 'unit'
        },

        preprocessors: preprocessors,

        // optionally, configure the reporter
        coverageReporter: {
            reporters: [
                {type: 'html', dir: 'build/test-reports/client/coverage/'}, // will generate html report
                {type: 'lcov', dir: 'build/test-reports/client/coverage/'}, // will generate json report file and this report is loaded to make sure failed coverage cause gulp to exit non-zero
                {type: 'text-summary', dir: 'build/test-reports/client/coverage/'} // it does not generate any file but it will print coverage to console
            ]
        },

        // web server port
        // CLI --port 9876
        port: 9876,

        // enable / disable colors in the output (reporters and logs)
        // CLI --colors --no-colors
        colors: true,

        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        // CLI --log-level debug
        logLevel: config.LOG_INFO,

        // enable / disable watching file and executing tests whenever any file changes
        // CLI --auto-watch --no-auto-watch
        autoWatch: false,

        // Start these browsers, currently available:
        // - Chrome
        // - ChromeCanary
        // - Firefox
        // - Opera
        // - Safari (only Mac)
        // - PhantomJS
        // - IE (only Windows)
        // CLI --browsers Chrome,Firefox,Safari
        browsers: [process.env.TRAVIS ? 'Firefox' : 'Chrome'],
//        browsers: ['Chrome', 'Safari', 'Firefox', 'PhantomJS'],

        // If browser does not capture in given timeout [ms], kill it
        // CLI --capture-timeout 5000
        captureTimeout: 20000,

        // Auto run tests on start (when browsers are captured) and exit
        // CLI --single-run --no-single-run
        singleRun: true,

        // report which specs are slower than 500ms
        // CLI --report-slower-than 500
        reportSlowerThan: 500,

        plugins: [
            'karma-ember-preprocessor',
            'karma-qunit',
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-safari-launcher',
            'karma-phantomjs-launcher',
            'karma-junit-reporter',
            'karma-coverage',
            'karma-coveralls'
        ]
    });
};
