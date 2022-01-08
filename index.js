function checker (obj, index = 'buys', verifier = exports.isTrade) {
  return index in obj && Array.isArray(obj[index]) && verifier(obj[index][0])
}

exports.isOrder = function (obj) {
  return (
    'active' in obj && 'selltoken' in obj && 'type' in obj && 'order_id' in obj
  )
}

exports.isTrade = function (obj) {
  return (
    'active' in obj && 'buytokenamount' in obj && 'buyer' in obj
  )
}

exports.isOrderbook = function (obj) {
  return (
    checker(obj, 'buys', exports.isOrder) &&
    checker(obj, 'sells', exports.isOrder)
  )
}

exports.isTradebook = function (obj) {
  return (
    checker(obj, 'buys', exports.isTrade) &&
    checker(obj, 'sells', exports.isTrade)
  )
}

exports.isTokenSummary = function (obj) {
  return (
    'address' in obj && 'decimals' in obj && 'name' in obj && 'symbol' in obj
  )
}

exports.isDetailedTokenSummary = function (obj) {
  return (
    exports.isTokenSummary(obj) && 'blockchain' in obj && (
      'best_buy_order' in obj || 'best_buy_price' in obj ||
      'best_buy_order_tx' in obj || 'best_sell_order' in obj ||
      'best_sell_price' in obj || 'best_sell_order_tx' in obj
    )
  )
}

exports.exchangeEventNames = ['NewOrder', 'Trade', 'OrderCancelled', 'Mined', 'OrderFulfilled']

exports.isExchangeEventName = function (obj) {
  return exports.exchangeEventNames.includes(obj)
}

exports.blockchains = ['ETC', 'ETH', 'PHX', 'DAO', 'AOA', 'AOAT']

exports.isSupportedBlockchain = function (obj) {
  return exports.blockchains.includes(obj)
}