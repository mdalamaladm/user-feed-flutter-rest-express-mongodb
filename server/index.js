require('dotenv').config();

const express = require('express');
const cors = require('cors');
const PORT = process.env.PORT_SERVER;

const server = express();

server.use(cors());
server.use(express.json());

server.listen(PORT, () => console.log(`Listening to User Feed API, port ${PORT}`));