'use strict';

var Mongo = require("mongodb");
var config = require("./configs/mongoConfig.js");

var exp = {};

exp.getClient = function(){
    return Mongo.MongoClient;
}

var mongoClient = Mongo.MongoClient;

module.exports = exp;

// mongoClient.connect(config.url, function (err, db) {
//     //   assert.equal(null, err);

//     if (!err) {

//         console.log("Connected successfully to server");

//     }
//     db.close();
// });

// console.log(process.env);