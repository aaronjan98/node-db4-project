const express = require('express');

// const api = require('./api/api.js');

const server = express();

server.use(express.json());

// server.use('/api', api);

server.get('/', (req, res) => {
    res.send(`<h1>It's Working!!!!!!!!!!!!</h1>`)
});

module.exports = server;