import * as express from 'express';

const server = express();
const PORT = process.env.PORT || 8080;

server.listen(PORT, () => console.log(`Listening on port http://localhost:${PORT}`));