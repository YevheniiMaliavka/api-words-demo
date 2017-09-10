export const DEV_URL = 'mongodb://localhost:27017/words-db';

export const PROD_URL = 'mongodb://todo:url/words-db';

export const URL = process.env.NODE_ENV === 'DEV' ? DEV_URL : PROD_URL;