/**
performs network call for authentication
 */

const url = require("../helper/setBaseUrl").baseUrl;

module.exports.getRefreshToken = () => {
  return new Promise((resolve, reject) => {
    const fullUrl = url + "/v1/user/refresh";

    const request = new XMLHttpRequest();

    request.open("POST", fullUrl);
    request.withCredentials = true;
    request.onload = function () {
      const response = JSON.parse(this.responseText);
      response.status = request.status;
      resolve(response);
    };

    request.send();
  });
};

module.exports.getLoginToken = (username, password) => {
  return new Promise((resolve, reject) => {
    const fullUrl = url + "/v1/user/login";
    const request = new XMLHttpRequest();

    request.open("POST", fullUrl);
    request.withCredentials = true;
    request.setRequestHeader("Content-Type", "application/JSON");
    request.onload = function () {
      const response = JSON.parse(this.responseText);
      response.status = request.status;
      request.status === 200 && request.readyState == 4
        ? resolve(response)
        : reject(response);
    };
    //console.log(username, password);
    request.send(JSON.stringify({ username: username, password: password }));
    request.onerror = function (error) {
      // console.log("login error:", error);
      reject(error);
    };
  });
};
module.exports.logout = () => {
  return new Promise((resolve, reject) => {
    const fullUrl = url + "/v1/user/logout";

    const request = new XMLHttpRequest();
    request.open("POST", fullUrl);

    request.withCredentials = true;
    request.credentials = "includes";

    request.onload = function () {
      const response = JSON.stringify(request.responseText);
      response.status = request.status;
      request.status === 200 && request.readyState == 4
        ? resolve(response)
        : reject(response);
    };
    request.setRequestHeader("Content-Type", "application/JSON");
    request.send();
  });
};
//to get a user's session
module.exports.test = (token) => {
  return new Promise((resolve, reject) => {
    const fullUrl = url + "/test";

    const request = new XMLHttpRequest();

    request.open("GET", fullUrl);

    request.withCredentials = true;
    request.credentials = "includes";
    request.onload = function () {
      const response = JSON.parse(this.responseText);
      response.status = request.status;
      request.status === 200 && request.readyState == 4
        ? resolve(response)
        : reject(response);
    };
    request.setRequestHeader("Authorization", `${token}`);
    request.setRequestHeader("Content-Type", "application/JSON");
    request.send();
  });
};

module.exports.getDevices = (token) => {
  return new Promise((resolve, reject) => {
    const fullUrl = url + "/v1/user/device";

    const request = new XMLHttpRequest();
    request.open("GET", fullUrl);
    request.withCredentials = true;
    request.credentials = "includes";

    request.onload = function () {
      const response = JSON.parse(request.responseText);
      response.status = request.status;
      request.status === 200 && request.readyState === 4
        ? resolve(response)
        : reject(response);
    };
    request.setRequestHeader("Content-Type", "application/JSON");
    request.setRequestHeader("Authorization", token);
    request.send();
  });
};
