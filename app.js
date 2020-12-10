const express = require('express');

const app = express();

app.get('/', async (req, res) => {
  res.status(200);
  res.send({
    status: 'ok',
  });
});

module.exports = app;
