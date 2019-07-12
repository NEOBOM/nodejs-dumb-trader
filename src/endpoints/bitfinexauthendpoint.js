"use strict";

const constants = require("../endpoints/constants");
const BitfinexHttpRest = require("../endpoints/bitfinexhttprest");

module.exports = class BitfinexAuthEndpoint extends BitfinexHttpRest{
    
    //Return information about your account (trading fees).
    getAccountInfos(payload, callback){
        payload.setRequest(constants.ACCOUNT_INFOS);
        this.post(payload, constants.getCompleteUrl(constants.ACCOUNT_INFOS), callback);
    }

    //See the fees applied to your withdrawals.
    getAccountFees(payload, callback){
        payload.setRequest(constants.ACCOUNT_FEES);
        this.post(payload, constants.getCompleteUrl(constants.ACCOUNT_FEES), callback);
    }

    //Returns a 30-day summary of your trading volume and return on margin funding.
    getSummary(payload, callback){
        payload.setRequest(constants.SUMMARY);
        this.post(payload, constants.getCompleteUrl(constants.SUMMARY), callback);
    }

    //Return your deposit address to make a new deposit.
    getDeposit(payload, callback){
        payload.setRequest(constants.DEPOSIT);
        this.post(payload, constants.getCompleteUrl(constants.DEPOSIT), callback);
    }

    //Check the permissions of the key being used to generate this request.
    getKeyInfo(payload, callback){
        payload.setRequest(constants.KEY_INFO);
        this.post(payload, constants.getCompleteUrl(constants.KEY_INFO), callback);
    }

    //See your trading wallet information for margin trading.
    getMarginInfo(payload, callback){
        payload.setRequest(constants.MARGIN_INFOS);
        this.post(payload, constants.getCompleteUrl(constants.MARGIN_INFOS), callback);
    }

    //See your balances
    getWalletBalances(payload, callback){
        payload.setRequest(constants.WALLET_BALANCES);
        this.post(payload, constants.getCompleteUrl(constants.WALLET_BALANCES), callback);
    }

    //Allow you to move available balances between your wallets. TODO
    setTransfer(payload, callback){
        payload.setRequest(constants.TRANSFER);
        this.post(payload, constants.getCompleteUrl(constants.TRANSFER), callback);
    }

    //Allow you to request a withdrawal from one of your wallet. TODO
    setWithdraw(payload, callback){
        payload.setRequest(constants.WITHDRAW);
        this.post(payload, constants.getCompleteUrl(constants.WITHDRAW), callback);
    }
}