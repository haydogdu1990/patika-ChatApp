const redis = require("redis");

const getClient = () => {
  return redis.createClient({
    host:"localhost",
    port: 6379,
    password: "",
    db: 1,
  });
};

module.exports.getClient = getClient;
