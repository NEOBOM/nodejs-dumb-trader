"use strict"

const DOMAIN = "https://api.bitfinex.com";

module.exports = Object.freeze({
 PUBTICKER: "/v1/pubticker/",
 SYMBOLS: "/v1/symbols",
 SYMBOLS_DETAILS: "/v1/symbols_details",
 STATS: "/v1/stats/",
 FUNDINGBOOK: "/v1/lendbook/",
 ORDERBOOK: "/v1/book/",
 TRADES: "/v1/trades/",
 LENDS: "/v1/lends/",
 ACCOUNT_INFOS: "/v1/account_infos",
 ACCOUNT_FEES: "/v1/account_fees",
 SUMMARY: "/v1/summary",
 DEPOSIT: "/v1/deposit/new",
 KEY_INFO: "/v1/key_info",
 MARGIN_INFOS: "/v1/margin_infos",
 WALLET_BALANCES: "/v1/balances",
 TRANSFER: "/v1/transfer",
 WITHDRAW: "/v1/withdraw",
 NEW_ORDER: "/v1/order/new",
 MULTIPLE_NEW_ORDERS: "/v1/order/new/multi",
 CANCEL_ORDER: "/v1/order/cancel",
 CANCEL_MULTIPLE_ORDERS: "/v1/order/cancel/multi",
 CANCEL_ALL_ORDERS: "/v1/order/cancel/all",
 REPLACE_ORDER: "/v1/order/cancel/replace",
 ORDER_STATUS: "/v1/order/status",
 ACTIVE_ORDERS: "/v1/orders",
 ORDERS_HISTORY: "/v1/orders/hist",
 ACTIVE_POSITIONS: "/v1/positions",
 CLAIM_POSITION: "/v1/position/claim",
 BALANCE_HISTORY: "/v1/history",
 DEPOSIT_WITHDRAWAL_HISTORY: "/v1/history/movements",
 PAST_TRADES: "/v1/mytrades",

 CALC_ORDER: "/v2/auth/calc/order/avail",
 getCompleteUrl: (EP) => { return DOMAIN + EP }
});