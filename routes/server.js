const express = require('express');

// const api = require('./api/api.js');

const server = express();

server.use(express.json());
// server.use('/api', api);

module.exports = server;