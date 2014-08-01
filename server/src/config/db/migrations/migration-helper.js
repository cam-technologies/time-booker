'use strict';
// Imports
var config  = require('../../config');
var mongoose = require('mongoose');
var User = require('../../../models/user');

//Processing
mongoose.connect(config.get('database'));
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

//Exports
exports.database = db;
exports.addNewUser = function(name, email, password, next) {
    var user = new User({
            _id: mongoose.Types.ObjectId(),
            name: name,
            email: email,
            password: password}
    );

    user.save(function (err) {
        if (!err) {
            console.info('User created: ' + user);
        } else {
            console.error(err);
        }
    });
    if (next) {
        next();
    }
};

exports.removeUser = function(email, next) {
    User.findOne({email:email}, function(err, doc) {
        doc.remove();
        if (next){
            next();
        }
    });
};
