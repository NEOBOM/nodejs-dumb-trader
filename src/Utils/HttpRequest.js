"use strict";

const request = require("request");
const config = require("../config");

const apiKey = config.getApiKey();
const apiSecret = config.getApiSecret();

module.exports = class HttpRequest {
  requestGet(url, callback) {
    let body = [];
    request
      .get(url)
      .on("data", chunck => body.push(chunck))
      .on("end", () => callback(JSON.parse(Buffer.concat(body).toString())))
      .on("error", err => log(err));
  }

  requestPost(options, callback) {
    let body = [];
    request
      .post(options)
      .on("data", chunck => body.push(chunck))
      .on("end", () => callback(JSON.parse(Buffer.concat(body).toString())))
      .on("error", err => log(err));
  }

  requestPut(options, callback) {
    let body = [];
    request
      .put(options)
      .on("data", chunck => body.push(chunck))
      .on("end", () => callback(JSON.parse(Buffer.concat(body).toString())))
      .on("error", err => log(err));
  }

  putDelete(options, callback) {
    let body = [];
    request
      .del(options)
      .on("data", chunck => body.push(chunck))
      .on("end", () => response(body, callback))
      .on("error", err => log(err));
  }

  createOptions(url, data, headers) {
    let options = {
      url: url,
      headers: headers,
      body: JSON.stringify(data)
    };
    return options;
  }
};

function response(body, callback){
  callback(JSON.parse(Buffer.concat(body).toString()));
}

function log(error){
  console.log(error);
}