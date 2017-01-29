var redisConf;

if(process.env.PAAS_MODE){
    redisConf = 
    {
        port: process.env.REDIS_PORT_6379_TCP_PORT,
        host: process.env.REDIS_PORT_6379_TCP_ADDR,
        password: process.env.REDIS_PASSWORD
    }
}else{
    redisConf = null;
}

module.exports = redisConf;