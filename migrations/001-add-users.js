var migrationHelper = require('./migration-helper');

exports.up = function (next) {
    migrationHelper.database.once('open', function() {
        migrationHelper.addNewUser('Chris Laughlin', 'contact@christopherlaughlin.co.uk', 'Chris1234');
        migrationHelper.addNewUser('Martin Micunda', 'martinmicunda@hotmail.com', 'Martin1234');
        migrationHelper.addNewUser('Andy McDowell', 'andrew.g.mcdowell@gmail.com', 'Andy1234', next());
        });
};

exports.down = function (next) {
    migrationHelper.database.once('open', function() {
        migrationHelper.removeUser('contact@christopherlaughlin.co.uk');
        migrationHelper.removeUser('martinmicunda@hotmail.com');
        migrationHelper.removeUser('andrew.g.mcdowell@gmail.com');
        });
    next();
};


