'use strict';

var Redis = require("redis");
var defConfig = require("./configs/redisConfig.js");

var exp = {};

exp.getClient = function(config){
    var conf;

    if(!config){
        conf = config;
    }else{
        conf = defConfig;
    }

    return new Redis.createClient(conf);
}

exp.getRedis = function(){
    return Redis;
}

module.exports = exp;