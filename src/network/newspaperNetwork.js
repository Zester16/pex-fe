/**
 * Performs network call for anything related to newspaper
 */

const { baseUrl } = require("../helper/setBaseUrl");

const url = require("../helper/setBaseUrl").baseUrl;

//network call to add a newspaper
module.exports.addNewspaper = (token, newsName, newsImage, newsUrl) => {
  return new Promise((resolve, reject) => {
    const fullUrl = url + "/v1/newspaper";
    const request = new XMLHttpRequest();

    request.open("POST", fullUrl);
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


//network call yo update newsRead
module.exports.updateNewsRead = (token,newsreadId,status)=>{
  return new Promise((resolve,reject)=>{
    const fullurl = url+`/v1/news-read/${newsreadId}/update-news-read-status`
    const request = new XMLHttpRequest();
    request.open("PATCH",fullurl)
    request.withCredentials = true;
    request.credentials = "includes";
    request.setRequestHeader("Content-Type", "application/JSON");
    request.setRequestHeader("Authorization", token);
    request.setRequestHeader("Readstatus",status)
    request.onload = function(){
      let response = JSON.parse(this.responseText)
      response.status=request.status

      if(request.readyState ===4 &request.status===200 ){resolve(response)}else{reject(response)}
      
    }
    request.send()
    request.onerror = function (error) {
      console.log("error",error)
      reject(error);
    };
    
  })
}

//network call to add newspaper read
module.exports.addNewsRead=(token,newspaperId,dateSelected)=>{

  return new Promise((resolve,reject)=>{
    const request = new XMLHttpRequest();

    let fullUrl = baseUrl+  "/v1/news-read"
    request.open("POST",fullUrl)
    request.withCredentials = true;
    request.credentials = "includes";
    request.setRequestHeader("Content-Type", "application/JSON");
    request.setRequestHeader("Authorization", token);
    request.onload = function(){
      let response = JSON.parse(this.responseText)
      response.status=request.status

      if(request.readyState ===4 &request.status===200 ){resolve(response)}else{reject(response)}
      
    }
    request.send(JSON.stringify({
      read_at:dateSelected,
      newspaper_id:newspaperId
    }))
    request.onerror = function (error) {
      console.log("error",error)
      reject(error);
    };
  })
  
}
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

//get all newspapers to populate dropdown
module.exports.getAllNewspapersNonPaginated=(token)=>{
  return new Promise((resolve,reject)=>{
    const request = new XMLHttpRequest();
    let fullUrl = url + "/v1/newspaper/all-newspapers" 
    request.open("GET", fullUrl);
    request.withCredentials = true;
    request.credentials = "includes";
    request.setRequestHeader("Content-Type", "application/JSON");
    request.setRequestHeader("Authorization", token);

    request.onload = function(){
      let response = JSON.parse(this.responseText)
      response.status = request.status;
      if (request.status === 200 && request.readyState ===4){
        resolve(response)
      }else{
        reject(response)
      }
    }

    request.send()
  })
}

//get all news read not paginated 
module.exports.getAllNewsReadNonPaginated=(token)=>{
  return new Promise((resolve,reject)=>{
    const request = new XMLHttpRequest();
    const fullUrl = url+"/v1/news-read/all-read"
    request.open("GET", fullUrl);
    request.withCredentials = true;
    request.credentials = "includes";
    request.setRequestHeader("Content-Type", "application/JSON");
    request.setRequestHeader("Authorization", token);
    request.onload = function(){
      let response = JSON.parse(this.responseText)
      response.status = request.status;
      if (request.status === 200 && request.readyState ===4){
        resolve(response)
      }else{
        reject(response)
      } 
    }
    request.send();
  })
}