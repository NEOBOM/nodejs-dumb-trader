"use strict"
//var HttpRest = require('./Utils/HttpRest');

//let obj = new HttpRest("https://api.bitfinex.com/v1/pubticker/btcusd");
//obj.get();
const publicendpoint = require("./endpoints/publicendpoint");
const AuthenticateEndpoint = require("./endpoints/authenticateendpoint");

let obj = new AuthenticateEndpoint();
obj.getAccountInfos(accountinfocallback);

function accountinfocallback(data){
    console.log(JSON.parse(JSON.stringify(data, 0, 2)));
}