import * as express from 'express';
import { WordController } from './controllers/word';
import * as mongoose from 'mongoose';
import { connect } from './db';

const server = express();
const PORT = process.env.PORT || 8080;

connect();

server.use('/words', WordController);

server.listen(PORT, () => console.log(`Listening on port http://localhost:${PORT}`));