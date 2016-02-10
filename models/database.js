var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AccountSchema = new Schema({
	var user: String,
	var username: String,
	var password: String,
});

var Account = mongoose.model('Account', AccountSchema);

module.exports = Account
