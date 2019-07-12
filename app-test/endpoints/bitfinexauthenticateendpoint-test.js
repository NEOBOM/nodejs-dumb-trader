"use strict";

const AuthenticateEndpoint = require("./../../src/endpoints/bitfinexauthendpoint");
const Payload = require("./../../src/domain/entities/payload");

let obj = new AuthenticateEndpoint();
let methodsExecation = ["getWalletBalances"];

methodsExecation.forEach((m) => {
    console.log(`Start method execution: ${ m }`);

    switch(m)
    {
        case "getAccountInfos":
            obj.getAccountInfos(getPayload(), callback);
            break;
        case "getAccountFees":
            obj.getAccountFees(getPayload(), callback);
            break;
        case "getSummary":
            obj.getSummary(getPayload(), callback);
            break;
        case "getDeposit":
            obj.getDeposit(getPayload().setDeposit("bitcoin", "exchange", 1), callback);
            break;
        case "getKeyInfo":
            obj.getKeyInfo(getPayload(), callback);
            break;
        case "getMarginInfo":
            obj.getMarginInfo(getPayload(), callback);
            break;
        case "getWalletBalances":
            obj.getWalletBalances(getPayload(), callback);
            break;
        case "setTransfer":
            obj.setTransfer(getPayload().setTransfer(1.0, "BTC", "trading", "exchange"), callback);
            break;
        case "setWithdraw":
            obj.setWithdraw(getPayload().setWithdraw(1.0, "bitcoin", "exchange", "37zYEGL5WDaDgMAXS44GcMk6R4pzaqxbUu"), callback);
            break;
        default:
            break;
    }
});

function getPayload(){
    let payload = new Payload();
    return payload;
}

function callback(data){
    if(data)
    {
        console.log("Result: ");
        console.log(JSON.stringify(data, 0, 2));
    }
    else{
        console.log("Objeto não encontrado.");
    }

    console.log("End method execution");
}