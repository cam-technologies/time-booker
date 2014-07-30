var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema= new Schema({
    _id: String,
    name: { type: String, required: true },
    email: { type: String, unique: true },
    password: { type: String, required: true }
}, { collection: 'users' });

module.exports = mongoose.model('User', userSchema);
