var express = require('express');
var mongodb = require('mongodb');
var bodyParser = require('body-parser');

var OBJECTID = mongodb.ObjectID;

var CLASS_COLLECTION = "test_attendance";

var app = express();
app.use(bodyParser.json());

var db;

mongodb.MongoClient.connect(process.env.MONGODB_URL || "mongodb://localhost:27017/test", function(err, client){
  if(err){
    console.log(err);
    process.exit(1);
  }

  db = client.db();
  console.log("Database connection successfull ");

  var server = app.listen(process.env.PORT || 8080, function(){
    var port = server.address().port;
    console.log("App now running on port " + port);
  });

});
