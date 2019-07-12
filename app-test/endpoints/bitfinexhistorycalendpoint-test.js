"use strict";

const BitfinexOrdersEndpoint = require("./../../src/endpoints/bitfinexhistorycalendpoint");
const Payload = require("./../../src/domain/entities/payload");

let obj = new BitfinexOrdersEndpoint();
let methodsExecation = ["getBalanceHistory"];

methodsExecation.forEach(m => {
  console.log(`Start method execution: ${m}`);

  switch (m) {
    case "getBalanceHistory":
      obj.getBalanceHistory(createRequestBalanceHistory(), callback);
      break;
    case "getDepositWildrawalHistory"://TODO
      obj.getDepositWildrawalHistory(createRequestDepositWildrawalHistory(), callback);
      break;
    case "getPastTrade":
      obj.getPastTrade(createRequestPastTrade(), callback);
      break;
    default:
      break;
  }
});

function createRequestPastTrade(){
  let payload = getPayload();
  payload.setPastTrade("TRXUSD", "Apr 1, 2018 11:13:00");
  return payload;
}

function createRequestBalanceHistory(){
  let payload = getPayload();
  payload.setBalanceHistory("USD", "Jan 01, 2018", "Apr 18, 2018", 10, "exchange");
  return payload;
}

function createRequestDepositWildrawalHistory(){
  let payload = getPayload();
  payload.setDepositWildrawalHistory("USD", "bitcoin", "Jan 01, 2017", "Apr 18, 2018", 10);
  return payload;
}

function getPayload() {
  let payload = new Payload();
  return payload;
}

function callback(data) {
  if (data) {
    console.log("Result: ");
    console.log(JSON.stringify(data, 0, 2));
  } else {
    console.log("Objeto não encontrado.");
  }

  console.log("End method execution");
}
