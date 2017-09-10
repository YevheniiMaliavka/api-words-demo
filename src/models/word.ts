import * as mongoose from 'mongoose';

const WordSchema = new mongoose.Schema({
    title: String,
    explanation: String,
    usage: String
});

mongoose.model('Word', WordSchema);

export const Word = mongoose.model('Word');