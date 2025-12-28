const typeforce = require('typeforce');

const coins = {
  ZEC: 'zec',
  BTCZ: 'btcz',
  LTZ: 'ltz',
  ZERC: 'zerc',
  ZER: 'zer',
  ZCL: 'zcl'
};

coins.isZcash = function (network) {
  // include all forks that follow Zcash rules
  return typeforce.value([
    coins.ZEC,    // Zcash
    coins.BTCZ,   // BitcoinZ
    coins.LTZ,    // LitecoinZ
    coins.ZERC,   // ZeroClassic
    coins.ZER,    // Zero
    coins.ZCL     // Zclassic
  ])(network.coin);
};

coins.isBitcoinZ = function (network) {
  return typeforce.value(coins.BTCZ)(network.coin);
};

coins.isLitecoinZ = function (network) {
  return typeforce.value(coins.LTZ)(network.coin);
};

coins.isZeroClassic = function (network) {
  return typeforce.value(coins.ZERC)(network.coin);
};

coins.isZero = function (network) {
  return typeforce.value(coins.ZER)(network.coin);
};

coins.isZclassic = function (network) {
  return typeforce.value(coins.ZCL)(network.coin);
};

coins.isValidCoin = typeforce.oneOf(
  coins.isZcash,
  coins.isBitcoinZ,
  coins.isLitecoinZ,
  coins.isZeroClassic,
  coins.isZero,
  coins.isZclassic
);

module.exports = coins;
