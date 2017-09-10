import * as mongoose from 'mongoose';
import { URL } from '../config/db';

export function connect() {
    (<any>mongoose).Promise = global.Promise;
    mongoose.connect(URL, { useMongoClient: true });
}