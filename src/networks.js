// https://en.bitcoin.it/wiki/List_of_address_prefixes
// Dogecoin BIP32 is a proposed standard: https://bitcointalk.org/index.php?topic=409731
var coins = require('./coins')

module.exports = {
  zcash: {
    messagePrefix: '\x18ZCash Signed Message:\n',
    bech32: 'bc',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4
    },
    pubKeyHash: 0x1cb8,
    scriptHash: 0x1cbd,
    wif: 0x80,
    // This parameter was introduced in version 3 to allow soft forks, for version 1 and 2 transactions we add a
    // dummy value.
    consensusBranchId: {
      1: 0x00,
      2: 0x00,
      3: 0x5ba81b19,
      4: 0x76b809bb
    },
    coin: coins.ZEC
  },
  bitcoinz: {
    messagePrefix: '\x18BitcoinZ Signed Message:\n',
    bech32: 'bc',
    bip32: {
      public: 0x0488b21e,
      private: 0x05358394,
    },
    pubKeyHash: 0x1cb8,
    scriptHash: 0x1cbd,
    wif: 0x80,
    consensusBranchId: {
      1: 0x00,
      2: 0x00,
      3: 0x5ba81b19,
      4: 0x76b809bb
    },
    coin: coins.ZEC,
    isZcash: true
  },
  litecoinz: {
    messagePrefix: '\x18LitecoinZ Signed Message:\n',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade3
    },
    pubKeyHash: 0x0ab3,
    scriptHash: 0x0ab8,
    wif: 0x80,
    consensusBranchId: {
      1: 0x00,
      2: 0x00,
      3: 0x5ba81b19,
      4: 0x76b809bb
    },
    coin: coins.ZEC,
    isZcash: true
  },
  zeroclassic: {
    messagePrefix: '\x18ZeroClassic Signed Message:\n',
    bech32: 'bc',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4
    },
    pubKeyHash: 0x1cb8,
    scriptHash: 0x1cbd,
    wif: 0x80,
    consensusBranchId: {
      1: 0x00,
      2: 0x00,
      3: 0x5c7b7d2f,
      4: 0x7a737763
    },
    coin: coins.ZEC,
    isZcash: true
  },
  zero: {
    messagePrefix: '\x18Zero Signed Message:\n',
    bech32: 'bc',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4
    },
    pubKeyHash: 0x1cb8,
    scriptHash: 0x1cbd,
    wif: 0x80,
    consensusBranchId: {
      1: 0x00,
      2: 0x00,
      3: 0x6f76727a,
      4: 0x7361707a
    },
    coin: coins.ZER,
    isZcash: true
  }
}
