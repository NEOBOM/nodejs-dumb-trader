"use strict";

const constants = require("../endpoints/constants");
const BitfinexHttpRest = require("../endpoints/bitfinexhttprest");

module.exports = class BitfinexOrdersEndpoint extends BitfinexHttpRest{
    
    //View your active positions.
    getActivePositions(payload, callback){
        payload.setRequest(constants.ACTIVE_POSITIONS);
        this.post(payload, constants.getCompleteUrl(constants.ACTIVE_POSITIONS), callback);
    }

    //Submit several new orders at once.
    setClaimPosition(payload, callback){
        payload.setRequest(constants.CLAIM_POSITION);
        this.post(payload, constants.getCompleteUrl(constants.CLAIM_POSITION), callback);
    }
}