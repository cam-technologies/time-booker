// Imports
var config  = require('../server/src/config/config');
var mongoose = require('mongoose');
var User = require('../server/src/models/user');

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
            console.info("User created: " + user);
        } else {
            console.error(err);
        }
    });
    if (next) {
        next();
    }
};

exports.removeUser = function(email) {
    User.findOne({email:email}, function(err, doc) {
        doc.remove();
    });
};
