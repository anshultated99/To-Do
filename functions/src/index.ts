import * as functions from 'firebase-functions';
import * as express from 'express';
import * as bodyParser from 'body-parser';

const app = express();
const main = express();

main.use('/api',app);
main.use(bodyParser.json());

export const serverlessApi = functions.https.onRequest(main);
