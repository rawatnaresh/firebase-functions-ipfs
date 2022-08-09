import * as functions from "firebase-functions";
import { create } from 'ipfs-http-client';
const projectId = '**';
const projectSecret = '**';
const auth =
  'Basic ' + Buffer.from(projectId + ':' + projectSecret).toString('base64');
const ipfs = create({
  protocol: 'http',
  host: 'ipfs.infura.io',
  port: 5001,
  apiPath: 'api/v0',
  // url: 'http://ipfs.infura.io:5001/api/v0/',
  headers: {
    authorization: auth,
  },
});
// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
export const helloWorld = functions.https.onRequest(async (request, response) => {
  functions.logger.info("Hello logs!", {structuredData: true});
  const file = await ipfs.add('hello');
  console.log(file);
  response.send("Hello from Firebase!");
});
