const express = require('express');
const { request } = require('http');
const app = express()
const port = 3000

let router_add = express.Router();
let router_list = express.Router();

router_add.get('/', function (req, res) {
  var MongoClient = require('mongodb').MongoClient;
  //Create a database named "test" and collection named "users":
  var url = "mongodb://localhost:27017/test";

  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("test");

    var myobj = { name: 'req.query.name', age: 'req.query.age' };
    dbo.collection("users").insertOne(myobj, function (err, res) {
      if (err) throw err;
      console.log("1 document inserted");
      db.close();
    });
    db.close();
  });
});

router_list.get('/', function (req, res) {
  res.json({ 'asd': 'Ping Successfull' });
});

app.use('/mongoadd', router_add);
app.use('/mongolist', router_list);

app.listen(port, function () {
  console.log('Server is running at PORT:', port);
});
