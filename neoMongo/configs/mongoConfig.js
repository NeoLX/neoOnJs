var mongoConf;

if(process.env.PAAS_MODE){
    var PAAS_SERVICE_NAME = process.env.MONGO_SERVICE_NAME;

    if(PAAS_SERVICE_NAME === null 
        || PAAS_SERVICE_NAME === ""){
            throw new TypeError("Null of paas name");
    }
    
    var ADDR = process.env[PAAS_SERVICE_NAME + "_PORT_27017_TCP_ADDR"];
    var PORT = process.env[PAAS_SERVICE_NAME + "_PORT_27017_TCP_PORT"];
    // var PWD = process.env[PAAS_SERVICE_NAME + "_PORT_27017_TCP_ADDR"];

    mongoConf = 
    {
        url: `mongodb://${ADDR}:${PORT}/`
        // port: process.env[PAAS_SERVICE_NAME + "_PORT_6379_TCP_PORT"],
        // host: process.env[PAAS_SERVICE_NAME + "_PORT_6379_TCP_ADDR"],
        // password: process.env[PAAS_SERVICE_NAME + "_PASSWORD"]
    }
}else{
    mongoConf = {
        url:`mongodb://localhost:27017/`
    };
}

module.exports = mongoConf;