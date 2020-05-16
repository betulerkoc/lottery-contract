const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const {interface, bytecode} = require('./compile');

const provider = new HDWalletProvider(
    'write morning dial tiny blade poverty stick attend fatigue believe mouse gravity',
    'https://rinkeby.infura.io/v3/0fc5e019ab05427784e8e01489e34163'
);

const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();

    console.log('Attemting to deploy from account', accounts[0]);

    const result = await new web3.eth.Contract(JSON.parse(interface))
     .deploy({data: '0x' + bytecode})
     .send({from: accounts[0]});

    console.log('contract deployed to', result.options.address);
};

deploy();
