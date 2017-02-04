var neoMongo = require("./index.js");

var mongoHelper = new neoMongo("test");

mongoHelper.insertDocuments("neotest", [{"AA": "aa"}]);