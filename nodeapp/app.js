const express = require('express');
const app = express();
const port = 3000;

var cors = require('cors');

app.use(cors())

var MongoClient = require('mongodb').MongoClient;
//Create a database named "test" and collection named "users":
var url = "mongodb://localhost:27017/test";

let router_add = express.Router();
let router_list = express.Router();

router_add.get('/', function (req, res) {
  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("test");

    var myobj = { name: req.query.name, age: req.query.name };
    dbo.collection("users").insertOne(myobj, function (err, result) {
      if (err) throw err;
      console.log("1 document inserted");
      res.send('1');
      db.close();
    });
    db.close();
  });
 
});

router_list.get('/', function (req, res) {
  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("test");
    dbo.collection("users").find({}).toArray(function (err, result) {
      if (err) throw err;
      res.send(result);
      db.close();
    });
  });

});

app.use('/mongoadd', router_add);
app.use('/mongolist', router_list);

app.listen(port, function () {
  console.log('Server is running at PORT:', port);
});
