"use strict";

const constants = require("../endpoints/constants");
const BitfinexHttpRest = require("../endpoints/bitfinexhttprest");

module.exports = class BitfinexOrdersEndpoint extends BitfinexHttpRest{
    
    //View your active positions.
    getBalanceHistory(payload, callback){
        payload.setRequest(constants.BALANCE_HISTORY);
        this.post(payload, constants.getCompleteUrl(constants.BALANCE_HISTORY), callback);
    }

    //Submit several new orders at once.
    getDepositWildrawalHistory(payload, callback){
        payload.setRequest(constants.DEPOSIT_WITHDRAWAL_HISTORY);
        this.post(payload, constants.getCompleteUrl(constants.DEPOSIT_WITHDRAWAL_HISTORY), callback);
    }

    getPastTrade(payload, callback){
        payload.setRequest(constants.PAST_TRADES);
        this.post(payload, constants.getCompleteUrl(constants.PAST_TRADES), callback);
    }
}