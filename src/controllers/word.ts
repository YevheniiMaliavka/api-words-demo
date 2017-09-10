import { Router } from 'express';
import { urlencoded } from 'body-parser';
import { Word } from '../models/word';

const router = Router();
router.use(urlencoded({ extended: true }))

router.get('/', async (req, res) => {
    const words = await Word.find({});
    res.status(200).send(words);
})

export const WordController = router;