'use strict';

var Mongo = require("mongodb");
var assert = require("assert");
var config = require("./configs/mongoConfig.js");

var insertDocuments = function(collection, many, db, callback) {
  
  console.log(db);

  // Get the documents collection
  var coll = db.collection(collection);

  // Insert some documents
  coll.insertMany(many, function(err, result) {
    assert.equal(err, null);
    // assert.equal(3, result.result.n);
    // assert.equal(3, result.ops.length);
    console.log("Inserted 3 documents into the collection");
    callback(result);
  });
}

var exp = function(dbname, url){

    this.client = Mongo.MongoClient;

    if(url){
        this.url = url;
    }else{
        this.url = config.url;
    }

    if(dbname){
        this.url.charAt(this.url.length-1) === '/' 
            ? this.url += dbname 
            : this.url += "/" + dbname;
    }
}

exp.prototype.insertDocuments = function(collection, many){
    this.client.connect(this.url, function(err, db){
        if(err){
            console.log(err);
        }
        insertDocuments(collection, many, db, function(rs){
            console.log(rs);
        });
    });
}

module.exports = exp;
