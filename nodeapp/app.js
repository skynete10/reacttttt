const express = require('express')
const app = express()
const port = 3000
var MongoClient = require('mongodb').MongoClient;
//Create a database named "test" and collection named "users":
var url = "mongodb://localhost:27017/test";

app.get('/', (req, res) => {
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("test");
    
    var myobj = { name: req.query.name, age: req.query.age };
  dbo.collection("users").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
      db.close();
    });
  res.send("1 document inserted");
})

app.listen(port, () => {
  console.log(`Example app listening at http://192.168.0.158:${port}`)
})