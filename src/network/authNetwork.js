/**
performs network call for authentication
 */

const url = require("../helper/setBaseUrl").baseUrl;

module.exports.getRefreshToken = () => {
  const fullUrl = url + "/v1/user/refresh";

  const request = new XMLHttpRequest();

  request.open("POST", fullUrl);

  request.onload = function () {
    return this.responseText;
  };

  request.send();
};
