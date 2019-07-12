"use strict";

const HttpRequest = require("../Utils/HttpRequest");
const config = require("../config");
const crypto = require("crypto");

module.exports = class BitfinexHttpRest extends HttpRequest{

    get(url, callback){
        this.requestGet(url, callback);  
    }

    post(data, url, callback) {
        let headers = getHeaders(data);
        let options = this.createOptions(url, data, headers);
        this.requestPost(options, callback);
    }
}

function getHeaders(data){ 
    let payload = new Buffer(JSON.stringify(data)).toString("base64");

    let header = { 
        "X-BFX-APIKEY": config.getApiKey(), 
        "X-BFX-PAYLOAD": payload, 
        "X-BFX-SIGNATURE": crypto.createHmac("sha384", config.getApiSecret()).update(payload).digest("hex")
    } 

    return header;
}