'use strict'

var User = require('../models/user');
var passwordHash = require('password-hash');

/*
    Search db for the user based on email and the hashed password
 */
exports.findUserByEmailAndPassword = function(email, password, callback) {
    User.findOne({email: email, password: passwordHash.generate(password)}, function(err, user) {
        if (err) {

        }
    })
}
