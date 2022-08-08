require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom drip flock tooth guard render remind assume hover clog bottom soda'; 
let testAccounts = [
"0x9f89ef6b3ee20e51a8ef3f517cf0757df00c317146eab5966678acd95465bcd4",
"0x669530b165fa9373f640d21f4665c764081cb3dfd3142906458aa957e61b762d",
"0x6822219841459c8b26ae9c1bdc499c3e2a4580c668db97e8085dc92e7d5d1fcf",
"0xeb90e7cd07632c68ee33aebc876fceb8dec42bf0a4870632e10f26ae5be5f141",
"0x4eb8b5f2111a890fd33be2802351484379a3e178ff6b512be14c2028dbad2266",
"0x875e0d8f7b9d07730fc153945f46e4716218ba5877d928289cc2cfbd4e3012c1",
"0x57274e7ee89f14b3f4757f16f83dddcc9249c25b19108c240759be6a79705fcd",
"0xed54c30c0e7ed11b77cbbf48a3879c62fbb63c3bb9657ade9385544204a57368",
"0x99a3622d1215c7507d0bb66cd788cf6a3762676bc6a3538f6405210e535e1677",
"0x3e277253b2ad1a3ed6b052ff5f50b1000dd7816631bc9bd66eee6ca805e93b52"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

