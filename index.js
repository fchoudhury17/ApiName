var express = require("express");
var app = express();
var Account = require('./models/account.js');

var port = 8001;


var router  = express.Router();

router.get('/username', function(req, res) {
  var getUsername;
});

router.post('/makeUsername', function(req, res) {
  var type = req.body.user
  User.create{
    user:type}, function(err, result){
    }
  }
});

router.post('/makePassword', function(req, res) {
  var password = req.body.password
  Password.create{
    password:password}, function(err, result){
    }
  }
});

router.post('/makeName', function(req, res) {
  var name = req.body.name
  Name.create{
    name:name}, function(err, result){
    }
  }
});

router.put('/makeName', function(req, res) {
  var name = req.body.name
  Name.create{
    name:name}, function(err, result){
    }
  }
});

app.use('/api', router);
app.listen(port);
console.log("API active at localhost:"+ port + "/api");
