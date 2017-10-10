var request = require('request');
var express=require('express');
var bodyParser=require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var Promise=require('promise');
var db = require("./Database/config.js");
var Movie= require("./Database/Model/Movie.js");
var User= require("./Database/Model/User.js");
var util= require("./lib/utility.js");
var app=express();
var port = process.env.PORT||8080;


// app.set('views', __dirname + '/views');
app.use(bodyParser.json());
// Parse forms (signup/login)
app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser('shhh!, secret'));
app.use(session({
  secret: 'shhh!',
  resave: false,
  saveUninitialized: true
}));


app.get('/', util.checkUser, function(req, res) {
  res.sendFile(__dirname+'/index.html');

});

app.get('/login', function(req, res) {
  res.sendFile(__dirname+'/views/login.html');
});

app.get('/session',function(req,res){
  res.send(JSON.stringify(req.session.username))
});