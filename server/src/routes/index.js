'use strict';

// RESTful API Handlers
var handlers = {
    index: require('../controllers/index'),
    auth: require('../routes/auth')
};

// RESTful API Handlers
module.exports = function (app) {
    // Index RESTful
    app.get('/', handlers.index.index);

    // TODO (martin): this should be moved to auth.js. We still need to figure out how we gonna load all routes at once
    var seedData = require('../config/seedData');
    // Add Authentication routes
    app.post('/auth.json', handlers.auth.login);

    app.get('/articles.json', function (req, res) {
        if (handlers.auth.isValidToken(req, res)) {
            res.send(seedData.ARTICLES);
        }
    });

    // Returns URL to pic of the day.
    app.get('/photos.json', function (req, res) {
        if (handlers.auth.isValidToken(req, res)) {
            res.send(seedData.PHOTOS);
        }
    });
};
