require('dotenv').config();

const Server = require('./mongo/models/server.js');

const server = new Server();

server.listen();