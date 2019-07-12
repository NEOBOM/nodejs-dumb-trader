"use strict";

const BitfinexOrdersEndpoint = require("./../../src/endpoints/bitfinexpositionendpoint");
const Payload = require("./../../src/domain/entities/payload");

let obj = new BitfinexOrdersEndpoint();
let methodsExecation = ["getActivePositions"];

methodsExecation.forEach(m => {
  console.log(`Start method execution: ${m}`);

  switch (m) {
    case "getActivePositions":
      obj.getActivePositions(getPayload(), callback);
      break;
    case "setClaimPosition": //TODO.
      obj.setClaimPosition(getClaimPosition(), callback);
      break;
    default:
      break;
  }
});

function getClaimPosition(){
    let payload = getPayload();
    payload.setClaimPosition(1, "500");
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
