var express=require('express');
var bodyParser = require('body-parser')
var cors=require('cors');

var app=express();
app.use(cors());
var login = require('./controller/loginservice.js');
// parse application/x-www-form-urlencoded
 app.use(bodyParser.urlencoded({ extended: true }))

// parse application/json
app.use(bodyParser.json())

app.post('/test', (req ,  res ) => {
    login.x(req,res);
})
var server=app.listen(5000); js
