"use strict";

module.exports = class Payload{
    constructor(){
        this.id = 0,                            //Order Id
        this.request = "",                      //endpoint
        this.nonce = Date.now().toString(),     //date
        this.method,                            //Method of deposit (methods accepted: “bitcoin”, “litecoin”, “ethereum”, “tetheruso", "ethereumc", "zcash", "monero", "iota", "bcash").
        this.wallet_name,                       //Wallet to deposit in (accepted: “trading”, “exchange”, “deposit”). Your wallet needs to already exist.
        this.renew,                             //Default is 0. If set to 1, will return a new unused deposit address.
        this.amount,                            //Amount to transfer.
        this.currency,                          //Currency of funds to transfer.
        this.walletfrom,                        //Wallet to transfer from. Can be “trading”, “deposit” or “exchange”.
        this.walletto,                          //Wallet to transfer to. Can be “trading”, “deposit” or “exchange”.
        this.withdraw_type,                     //defines the currency your are trying to withdraw, see the "Withdrawal Types" section below for accepted values.
        this.walletselected,                    //The wallet to withdraw from, can be “trading”, “exchange”, or “deposit”.
        this.address,                           //The deposit address (or error message if result = “error”)
        this.symbol,                            //The name of the symbol (see /symbols).
        this.price,                             //Price to buy or sell at. Must be positive. Use random number for market orders.
        this.side,                              //Either “buy” or “sell”.
        this.type,                              //Either “market” / “limit” / “stop” / “trailing-stop” / “fill-or-kill” / “exchange market” / “exchange limit” / “exchange stop” / “exchange trailing-stop” / “exchange fill-or-kill”. (type starting by “exchange ” are exchange orders, others are margin trading orders)
        this.exchange = "bitfinex",
        this.isHidden = false,                  //true if the order should be hidden.
        this.isPostOnly = false,                //true if the order should be post only. Only relevant for limit orders.
        this.useAllAvailable = 0,               //1 will post an order that will use all of your available balance.
        this.ocoorder = false,                  //Set an additional STOP OCO order that will be linked with the current order.
        this.buy_price_oco,                     //If ocoorder is true, this field represent the price of the OCO stop order to place.
        this.sell_price_oco,                    //If ocoorder is true, this field represent the price of the OCO stop order to place.
        this.order_id,                          //The order ID given by.
        this.orders = [],                       //Submit several new orders at once.
        this.order_ids = [],                    //An array of the order IDs given by.
        this.limit,                             //Limit number of results.
        this.position_id,                       //The position ID given by /positions.
        this.since,                             //Return only the history after this timestamp.
        this.until,                             //Return only the history before this timestamp.
        this.dir,                               //Set 1 for buy and -1 to sell.
        this.wallet,                            //Return only entries that took place in this wallet. Accepted inputs are: “trading”, “exchange”, “deposit”.
        this.limit_trades,                      //Limit the number of trades returned.
        this.reverse                            //Return trades in reverse order (the oldest comes first). Default is returning newest trades first.
    }

    setRequest(request){
        this.request = request;
    }

    setNonce(nonce){
        this.nonce = nonce;
    }

    setDeposit(method, walletname, renew){
        this.method = method;
        this.wallet_name = walletname;
        this.renew =  renew;
    }

    setTransfer(amount, currency, walletfrom, walletto){
        this.amount = amount;
        this.currency = currency;
        this.walletfrom = walletfrom;
        this.walletto = walletto;
    }

    setWithdraw(amount, withdrawtype, walletselected, address){
        this.amount = amount;
        this.withdrawtype = withdrawtype;
        this.walletselected = walletselected;
        this.address = address;
    }

    setNewOrder(symbol, amount, price, side, type){
        this.symbol = symbol;
        this.amount = amount;
        this.price = price;
        this.side = side;
        this.type = type;
    }

    setNewOcoOrder(symbol, amount, price, side, type, ocoorder, buypriceoco, sell_price_oco){
        this.symbol = symbol;
        this.amount = amount;
        this.price = price;
        this.side = side;
        this.type = type;
        this.ocoorder = ocoorder;
        this.buy_price_oco = buypriceoco;
        this.sell_price_oco = sell_price_oco;
    }

    setOrders(orders){
        this.orders = orders;
    }

    setOrderId(orderId){
        this.order_id = orderId;
    }

    setCancelMultipleOrder(orderIds){
        this.order_ids = orderIds;
    }

    setReplaceOrder(orderId, symbol, amount, price, side, type){
        this.order_id = orderId;
        this.symbol = symbol;
        this.amount = amount;
        this.price = price;
        this.side = side;
        this.type = type;
    }

    setLimitNumber(number){
        this.limit = number;
    }

    setClaimPosition(positionId, amount){
        this.position_id = positionId;
        this.amount = amount;
    }

    setBalanceHistory(currency, since, until, limit, wallet){
        this.currency = currency;
        this.since = convertToTimestamp(since);
        this.until = convertToTimestamp(until);
        this.limit = limit;
        this.wallet = wallet;
    }

    setDepositWildrawalHistory(currency, method, since, until, limit){
        this.currency = currency;
        this.method = method
        this.since = convertToTimestamp(since);
        this.until = convertToTimestamp(until);
        this.limit = limit;
    }

    setCalcOrder(dir, symbol, rate, type){
        this.dir = dir;
        this.symbol = symbol;
        this.rate = rate;
        this.type = type;
    }

    setPastTrade(symbol, timestamp, until, limittrades, reverse){
        this.symbol = symbol;
        this.timestamp = convertToTimestamp(timestamp);
        this.until = until;
        this.limit_trades = limittrades;
        this.reverse = reverse;
    }
}

function convertToTimestamp(value){
    return Math.floor(new Date(value) / 1000);
}