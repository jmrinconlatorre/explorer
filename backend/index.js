const { Web3 } = require('web3');
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

const URL_INFURA =
  'https://mainnet.infura.io/v3/df7ef1521c7043ea9381195e36e5c67f';
const web3 = new Web3(URL_INFURA);

BigInt.prototype.toJSON = function () {
  return this.toString();
};

app.get('/', async (req, res) => {
  try {
    const bloque = (await web3.eth.getBlockNumber()).toString();
    res.send({ bloque });
  } catch (error) {
    res.status(500).send({ mensaje: error.message });
  }
});

app.get('/bloque/:bloque', async (req, res) => {
  try {
    const bloque = await web3.eth.getBlock(req.params.bloque);
    res.send(bloque);
  } catch (error) {
    res.status(500).send({ mensaje: error.message });
  }
});

app.get('/tx/:tx', async (req, res) => {
  try {
    const tx = await web3.eth.getTransaction(req.params.tx);
    res.send(tx);
  } catch (error) {
    res.status(500).send({ mensaje: error.message });
  }
});

app.get('/balance/:address', async (req, res) => {
  try {
    const balance = await web3.eth.getBalance(req.params.address);
    res.send({
      balance,
      ethers: balance,
      ethers2: web3.utils.fromWei(balance, 'ether'),
    });
  } catch (error) {
    res.status(500).send({ mensaje: error.message });
  }
});

app.listen(3333);
