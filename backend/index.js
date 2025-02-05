const express = require('express');

const app = express();

app.get('/', async (req, res) => {
  await res.send('Hello world');
});

app.listen(3333);
