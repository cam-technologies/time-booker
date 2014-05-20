'use strict';

/**
 * Module dependencies.
 */
var express = require('express')
var app     = express();
var config  = require('./config/config');

/**
 * Main application entry file.
 * Note that the order of loading is important.
 */

// express settings
require('./config/express')(app);

// routes settings
require('./routes/index')(app);

// Start up the server on the port specified in the config
app.listen(process.env.PORT || config.get("express:port"), function () {
    console.info(config.get("app:name") + ' app started on port: ' + (process.env.PORT || config.get("express:port"))
        + ' - with environment: ' + config.get("env"));
});

// Expose app
module.exports = app;