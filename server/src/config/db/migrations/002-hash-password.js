'use strict';

var migrationHelper = require('./migration-helper');

exports.up = function (next) {
    migrationHelper.users.findOne({email: 'contact@christopherlaughlin.co.uk'}, function(err, doc) {
        doc.password = migrationHelper.passwordHash.generate(doc.password);
        doc.save();
    });
    migrationHelper.users.findOne({email: 'martinmicunda@hotmail.com'}, function(err, doc) {
        doc.password = migrationHelper.passwordHash.generate(doc.password);
        doc.save();
    });
    migrationHelper.users.findOne({email: 'andrew.g.mcdowell@gmail.com'}, function(err, doc) {
        doc.password = migrationHelper.passwordHash.generate(doc.password);
        doc.save(next());
    });
};

exports.down = function (next) {
    next();
};
