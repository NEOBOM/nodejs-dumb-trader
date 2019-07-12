"use strict";

const constants = require("../endpoints/constants");
const BitfinexHttpRest = require("../endpoints/bitfinexhttprest");

module.exports = class BitfinexOrdersEndpoint extends BitfinexHttpRest{
    
    //Submit a new Order.
    setNewOrder(payload, callback){
        payload.setRequest(constants.NEW_ORDER);
        this.post(payload, constants.getCompleteUrl(constants.NEW_ORDER), callback);
    }

    //Submit several new orders at once.
    setMultipleNewOrders(payload, callback){
        payload.setRequest(constants.MULTIPLE_NEW_ORDERS);
        this.post(payload, constants.getCompleteUrl(constants.MULTIPLE_NEW_ORDERS), callback);
    }

    //Cancel an order.
    setCancelOrder(payload, callback){
        payload.setRequest(constants.CANCEL_ORDER);
        this.post(payload, constants.getCompleteUrl(constants.CANCEL_ORDER), callback);
    }

    //Cancel multiples orders at once.
    setCancelMultipleOrders(payload, callback){
        payload.setRequest(constants.CANCEL_MULTIPLE_ORDERS);
        this.post(payload, constants.getCompleteUrl(constants.CANCEL_MULTIPLE_ORDER), callback);
    }

    //Cancel all active orders at once.
    setCancelAllOrders(payload, callback){
        payload.setRequest(constants.CANCEL_ALL_ORDERS);
        this.post(payload, constants.getCompleteUrl(constants.CANCEL_ALL_ORDERS), callback);
    }

    //Replace an order with a new one.
    setReplaceOrder(payload, callback){
        payload.setRequest(constants.REPLACE_ORDER);
        this.post(payload, constants.getCompleteUrl(constants.REPLACE_ORDER), callback);
    }

    //Get the status of an order. Is it active? Was it cancelled? To what extent has it been executed? etc.
    getOrderStatus(payload, callback){
        payload.setRequest(constants.ORDER_STATUS);
        this.post(payload, constants.getCompleteUrl(constants.ORDER_STATUS), callback);
    }

    //View your active orders.
    getActiveOrders(payload, callback){
        payload.setRequest(constants.ACTIVE_ORDERS);
        this.post(payload, constants.getCompleteUrl(constants.ACTIVE_ORDERS), callback);
    }

    //View your latest inactive orders.
    //Limited to last 3 days and 1 request per minute.
    getOrdersHistory(payload, callback){
        payload.setRequest(constants.ORDERS_HISTORY);
        this.post(payload, constants.getCompleteUrl(constants.ORDERS_HISTORY), callback);
    }

    //Calculate a order.
    getCalcOrder(payload, callback){
        payload.setRequest(constants.CALC_ORDER);
        this.post(payload, constants.getCompleteUrl(constants.CALC_ORDER), callback);
    }
}