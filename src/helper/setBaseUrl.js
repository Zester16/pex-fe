const env = process.env.NODE_ENV;
module.exports.baseUrl = "production" === env ? "" : "http://localhost:4000"