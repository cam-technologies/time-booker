"use strict";
/**
 * Module dependencies.
 */
var express = require('express'),
    fs = require('fs');

module.exports = function (app, config) {

    app.set('showStackError', true);

    //Prettify HTML
    app.locals.pretty = true;

    // all environments
    app.configure(function () {
        app.use(express.logger('dev'));
        app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));

        //bodyParser should be above methodOverride
        app.use(express.bodyParser());  // pull information from html in POST
        app.use(express.methodOverride());  // simulate DELETE and PUT

        //routes should be at the last
        app.use(app.router);

        app.use(express.static(config.get("appRoot") + config.get("public:path")));

        app.get('/', function (req, res) {
            fs.readFile(config.get('appRoot') + config.get('public:path') + config.get('public:indexHtmlPath'), 'utf8', function (err, text) {
                res.send(text);
            });
        });
    });
};
