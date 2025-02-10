const { Web3 } = require('web3');
const express = require('express');
const app = express();
const URL_INFURA =
  'https://mainnet.infura.io/v3/df7ef1521c7043ea9381195e36e5c67f';

const web3 = new Web3(URL_INFURA);

BigInt.prototype.toJSON = function () {
  return this.toString();
};

app.get('/', async (req, res) => {
  const bloque = (await web3.eth.getBlockNumber()).toString();
  res.send({ bloque });
});

app.get('/bloque/:bloque', async (req, res) => {
  const bloque = await web3.eth.getBlock(req.params.bloque);
  res.send(bloque);
});

app.get('/tx/:tx', async (req, res) => {
  const tx = await web3.eth.getTransaction(req.params.tx);
  res.send(tx);
});

app.get('/balance/:address', async (req, res) => {
  const balance = await web3.eth.getBalance(req.params.address);
  res.send({
    balance,
    ethers: balance,
    ethers2: web3.utils.fromWei(balance, 'ether'),
  });
});

app.listen(3333);
