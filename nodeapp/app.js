const express = require('express');
const { request } = require('http');
const app = express()
const port = 3000

const path=require('path');
const app_router=express.Router;

const mongoadd=require(path.join(__dirname+'/mongoadd'));
app.get('/mongoadd',(request,response)=>{
  response.json(mongoadd);
});

const mongolist=require(path.join(__dirname+'/mongolist'));
app.get('/mongolist',(request,response)=>{
  response.json(mongolist);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})