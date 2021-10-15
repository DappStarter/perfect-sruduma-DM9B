require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea clog office skull dance birth soccer exchange good problem flame general'; 
let testAccounts = [
"0x9f1352f8aa5b4fa7e1bc6814c354c7fd963af278669c7473f83cfcf17945b28f",
"0xe0261aa0956605cc0b7eca523358076cbd4797cdc8b3ff4d95284755dc5626fe",
"0x79b59a2ec6b1328967423c71bef8e1ae3615fa12cbbebdb928e0fe7e56173a41",
"0x86a308e6f3d92097409c4dc139941d5df4137222e1c53c10efdc7e6f258cc588",
"0x788a10f64c59cf8fab661da4632232e50560dcfc881a25398400f48c49d17cea",
"0xbc2f2b4bae7a572cdab5dc6f4e080739dcc3cb13632aa64a4e8f904311aaa6d2",
"0x0f9dc551b9e7dc83068427b877127f1b206e997790da3e732457f75d9a5d7aed",
"0xab531a1a6d46e3df39b3e73d1ad8b0966756c721482f35008a6926724f7088da",
"0xe3688f61a5c3908fce8f98b1bb93a3e163dc6453a1b5b3d7b37dee4f42037785",
"0x84a7058c29385dce1b2d1bf6f500251d4fa2a9014e1ea8643dec834e3d3cc550"
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

