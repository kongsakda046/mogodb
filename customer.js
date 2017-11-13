var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/quizs2";
var db;
MongoClient.connect(url, function (err, database) {
    if (err) throw err;
    db = database;
    console.log("Connected to " + url);
});


function getall(req, res) {
    db.collection("users").find({}).toArray(function (err, result) {
        if (err) throw err;
        console.log(result);
        res.send(result);

    });
}

function getfname(req, res) {
    var para = req.param('fname');
    var query = {first_name: para };
    db.collection("users").find(query).toArray(function (err, result) {
        if (err) throw err;
        console.log(result);
        res.send(result);

    });
}

function getrole(req, res) {
    var role = req.params.role;
    var query = { role: role };
    db.collection("users").find(query).toArray(function (err, result) {
        if (err) throw err;
        console.log(result);
        res.send(result);

    });
}

module.exports = {
    getall: getall,
    getfname: getfname,
    getrole: getrole
};