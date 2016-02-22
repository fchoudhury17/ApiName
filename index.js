var express = require('express');
var mongoose = require('mongoose');
var parser = require('body-parser');
var app = express();


var Account = require('./models/username.js');

var port = 8001;

var router = express.Router();

//getting info of each Account
router.get('/username' , function(req , res){
  var username = req.query.username;
  console.log(username);
});

router.get('/name' , function(req , res){
  var name = req.query.name;
  console.log(name);
});

router.get('/password' , function(req , res){
  var password = req.query.password;
  console.log(password);
});

app.use('/AccountData' , router);
app.listen(port);

//submit a new username and password
router.post('/makeUsername', function(req, res) {
  var type = req.body.user;
  var password = req.body.password;
  User.create{
    user:type}, function(err, result){
    }
  }
  Password.create{
    password:password}, function(err, result){
    }
  }
});
//adds a name to the account
router.post('/makeName', function(req, res) {
  var name = req.body.name
  Name.create{
    name:name}, function(err, result){
    }
  }
});

//change previous name
router.put('/changeName', function(req, res) {
  var name = req.body.name
  Name.create{
    name:name}, function(err, result){
    }
  }
});
