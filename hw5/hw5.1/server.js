'use strict';

const express = require('express');

// Constants
const PORT = 8085;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/health', (req, res) => {
  res.send('Hello from Nazim!:)');
});

app.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});