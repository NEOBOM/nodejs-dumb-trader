"use strict";

const constants = require('./constants');
const HttpRest = require("../Utils/HttpRequest");

module.exports = class PublicEndPoint{
    constructor(){
        this.url = constants.getDomain();
    }

    //A list of symbol names.
    getSymbols(callback){
        HttpRest.get(constants.getSymbolsUrl(), callback);
    }

    //Get a list of valid symbol IDs and the pair details.
    getSymbolsDatails(callback){
        HttpRest.get(constants.getSymbolsDetailsUrl(), callback);
    }

    //The ticker is a high level overview of the state of the market. 
    //It shows you the current best bid and ask, as well as the last trade price. 
    //It also includes information such as daily volume and how much the price has moved over the last day.
    getTicker(symbol, callback) {
        HttpRest.get(constants.getPubtikerUrl() + symbol, callback);
    }

    //Various statistics about the requested pair.
    getStats(symbol, callback){
        HttpRest.get(constants.getStatsUrl() + symbol, callback);
    }

    //Get the full margin funding book.
    getFundingbook(currency, callback){
        HttpRest.get(constants.getFundingbookUrl() + currency, callback);
    }

    //Get the full order book.
    getOrderbook(symbol, callback){
        HttpRest.get(constants.getOrderbookUrl() + symbol, callback);
    }

    //Get a list of the most recent trades for the given symbol.
    getTrades(symbol, callback){
        HttpRest.get(constants.getTradesUrl() + symbol, callback);
    }

    //Get a list of the most recent funding data for the given currency: total amount provided and Flash Return Rate (in % by 365 days) over time.
    getLends(currency, callback){
        HttpRest.get(constants,this.getLendsUrl() + currency, callback);
    }
}