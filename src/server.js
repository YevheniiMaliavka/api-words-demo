const express = require('express');

const server = express();
const PORT = process.env.PORT || 8080;


server.use('/', (req, res) => res.send('hello world'));

server.listen(PORT, () => console.log(`Listening on port http://localhost:${PORT}`));