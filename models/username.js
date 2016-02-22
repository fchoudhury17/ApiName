var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var LoginSchema = new Schema({
  username: String,
  password: String,
  name: String,

});

var Account = mongoose.model('Account' , LoginSchema);

module.exports = Account;
