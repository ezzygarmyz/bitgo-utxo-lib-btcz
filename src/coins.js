const typeforce = require('typeforce');

const coins = {
  ZEC: 'zec',      // Zcash
  BTCZ: 'btcz',    // BitcoinZ
  LTZ: 'ltz',     // LitecoinZ
  ZERC: 'zerc',    // ZeroClassic
  ZER: 'zer',      // Zero
  ZCL: 'zcl',      // Zclassic
};

coins.isZcash = function (network) {
  return typeforce.value(coins.ZEC)(network.coin);
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
