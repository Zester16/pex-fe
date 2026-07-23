
/**
 * Performs Network call for anything related to searching, saving, bookmarking books
 */

const {baseUrl} = require("../helper/setBaseUrl")


module.exports.searchBooks = (token,query)=>{

    return new Promise((resolve,reject)=>{
        const fullUrl = `${baseUrl}/v1/books`
        const request = new XMLHttpRequest();
        const params = new URLSearchParams();
        const Url = new URL(fullUrl)
        params.set('title', query);
        
        Url.search = params.toString();
        request.open("GET",Url);
        request.withCredentials = true;
        request.setRequestHeader("Content-Type","application/JSON");
        request.setRequestHeader("Authorization",token);

        request.onload = function(){
            const response = JSON.parse(this.responseText);
            response.status = request.status;
            request.status === 200 && request.readyState == 4
            ? resolve(response)
            : reject(response);
            
        }

        request.send()
        request.onerror = function (error) {
            reject(error);
          };
        
    })


}