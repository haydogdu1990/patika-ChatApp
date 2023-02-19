const redis = require("redis");

const getClient = () => {
  return {
    redis.createClient({
    url: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT,
    password: process.env.REDIS_PASS,
    db: 1,
  });
  
  client.on("error", function(err) {
  throw err;
  });

  client.set('foo','bar');
  
}
};

module.exports.getClient = getClient;
