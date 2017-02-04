var redisConf;

console.log(process.env);

if(process.env.PAAS_MODE === 'TRUE'){
    console.log("REDIS IS PAAS MODE");

    var PAAS_SERVICE_NAME = process.env.REDIS_SERVICE_NAME;

    console.log(`REDIS SERVICE IS ${PAAS_SERVICE_NAME}`);

    redisConf = 
    {
        port: process.env[PAAS_SERVICE_NAME + '_PORT_6379_TCP_PORT'],
        host: process.env[PAAS_SERVICE_NAME + '_PORT_6379_TCP_ADDR'],
        password: process.env[PAAS_SERVICE_NAME + '_PASSWORD']
    }

    console.log(redisConf);
}else{
    redisConf = null;
}

module.exports = redisConf;