/**
 * Performs network call for anything related to newspaper
 */


const url = require("../helper/setBaseUrl").baseUrl;

module.exports.addNewspaper = (token,newsName,newsImage,newsUrl)=>{
    return new Promise((resolve,reject)=>{
        const fullUrl = url+"/v1/newspaper"

        const request = new XMLHttpRequest()

        request.open("POST",fullUrl)
        request.withCredentials=true
        request.setRequestHeader("Content-Type", "application/JSON");
        request.setRequestHeader("Authorization",token)
        request.onLoad = function(){
            const response = JSON.parse(this.responseText)
            response.statue = request.status
            request.status === 200 && request.readyState ==4?resolve(response):reject(response)
        }

        request.send(JSON.stringify({name:newsName,epaper_url:newsUrl,image_url:newsImage}))
        request.onerror = function(error){
            reject(error)
        }
    })
}

