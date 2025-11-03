const env = process.env.NODE_ENV;
module.exports.baseUrl ="production" === env ? "https://pex.alwaysdata.net": "http://localhost:4000"

