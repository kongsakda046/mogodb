const express = require('express');
const router = express.Router();
const app =express();
const assert = require("assert");
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:3000/quiz2";
var users = require('./customer.js');

app.get('/users',users.getall);
app.get('/users/search',users.getfname);
app.get('/users/role/:role',users.getrole);



app.listen(3000);
console.log('Server is running at http://localhost:3000');