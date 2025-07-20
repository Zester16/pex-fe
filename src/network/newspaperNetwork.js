/**
 * Performs network call for anything related to newspaper
 */

const url = require("../helper/setBaseUrl").baseUrl;

//network call to add a newspaper
module.exports.addNewspaper = (token, newsName, newsImage, newsUrl) => {
  return new Promise((resolve, reject) => {
    const fullUrl = url + "/v1/newspaper";
    const request = new XMLHttpRequest();

    request.open("POST", fullUrl);
    request.withCredentials = true;
    request.setRequestHeader("Content-Type", "application/JSON");
    request.setRequestHeader("Authorization", token);
    request.onLoad = function () {
      const response = JSON.parse(this.responseText);
      response.status = request.status;
      request.status === 200 && request.readyState == 4
        ? resolve(response)
        : reject(response);
    };

    request.send(
      JSON.stringify({
        name: newsName,
        epaper_url: newsUrl,
        image_url: newsImage,
      }),
    );
    request.onerror = function (error) {
      reject(error);
    };
  });
};

//network call to get paginated newspaper
module.exports.getAllNewspaper = (token, id) => {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    let fullUrl = url + "/v1/newspaper" 
    if(id){
      fullUrl.concat("?",`id=${id}`)
      fullUrl=fullUrl+"?id="+id
      //console.log("new full url:",fullUrl,update)
    }
    //+ id ? `?id=${id}` : "";
    request.open("GET", fullUrl);
    request.withCredentials = true;
    request.credentials = "includes";
    request.setRequestHeader("Content-Type", "application/JSON");
    request.setRequestHeader("Authorization", token);
    
    request.onload = function () {
      const response = JSON.parse(this.responseText);
      response.status = request.status;
      request.status === 200 && request.readyState == 4
        ? resolve(response)
        : reject(response);
    };
    request.send()
    // request.onerror = function (error) {
    //   reject(error);
    // };

  });
  
};
