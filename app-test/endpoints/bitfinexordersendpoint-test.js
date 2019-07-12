"use strict";

const BitfinexOrdersEndpoint = require("./../../src/endpoints/bitfinexordersendpoint");
const Payload = require("./../../src/domain/entities/payload");

let obj = new BitfinexOrdersEndpoint();
let methodsExecation = ["getActiveOrders"];

methodsExecation.forEach(m => {
  console.log(`Start method execution: ${m}`);

  switch (m) {
    case "setNewOrder":
      obj.setNewOrder(createNewOrder(), callback);
      break;
    case "setNewOcoOrder":
      obj.setNewOrder(createNewOcoOrder(), callback);
      break;
    case "setMultipleNewOrders":
      obj.setMultipleNewOrders(createMultipleNewOrders(), callback);
      break;
    case "setCancelOrder":
      obj.setCancelOrder(createOrderById(10421973829), callback);
      break;
    case "setCancelMultipleOrders":
      obj.setCancelMultipleOrders(createCancelMultipleOrders(), callback);
      break;
    case "setCancelAllOrders":
      obj.setCancelAllOrders(getPayload(), callback);
      break;
    case "setReplaceOrder":
      obj.setReplaceOrder(createReplaceOrder(), callback);
      break;
    case "getOrderStatus":
      obj.getOrderStatus(createOrderById(10421973829), callback);
      break;
    case "getActiveOrders":
      obj.getActiveOrders(getPayload(), callback);
      break;
    case "getOrdersHistory":
      obj.getOrdersHistory(createOrderForHistory(), callback);
      break;
    case "getActivePositions":
      obj.getActivePositions(getPayload(), callback);
      break;
    case "getCalcOrder": //TODO
      obj.getCalcOrder(createCalcOrder(), callback);
      break;
    default:
      break;
  }
});

function createCalcOrder() {
  let payload = getPayload();
  payload.setCalcOrder(1, "tTRXUSD", "0.03", "exchange");
  return payload;
}

function createOrderForHistory(){
  let payload = getPayload();
  payload.setLimitNumber(100);
  return payload;
}

function createOrderById(id) {
  let payload = getPayload();
  payload.setOrderId(id);
  return payload;
}

function createCancelMultipleOrders() {
  let payload = getPayload();
  payload.setCancelMultipleOrder([10413236039, 10413236054]);
  return payload;
}

function createNewOrder() {
  let payload = getPayload();
  payload.setNewOrder("trxusd", "1460.08666331", "0.060", "sell", "exchange limit");
  return payload;
}

function createNewOcoOrder() {
  let payload = getPayload();
  payload.setNewOcoOrder("trxusd", "1500", "0.0525", "sell", "exchange limit", true, null, "0.40");
  return payload;
}

function createMultipleNewOrders() {
  let order1 = getPayload();
  order1.setNewOrder("trxusd", "500", "0.04525", "sell", "exchange limit");

  let order2 = getPayload();
  order2.setNewOrder("trxusd", "500", "0.05", "sell", "exchange limit");

  let payload = getPayload();
  payload.setOrders([order1, order2]);

  return payload;
}

function createReplaceOrder() {
  let payload = getPayload();
  payload.setReplaceOrder(10421973829, "trxusd", "1000", "0.0525", "sell", "exchange limit");

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
