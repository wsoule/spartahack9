// The Cloud Functions for Firebase SDK to create Cloud Functions and triggers.
import { logger } from "firebase-functions";
import { onRequest } from "firebase-functions/v2/https";
import { onDocumentCreated } from "firebase-functions/v2/firestore";

// The Firebase Admin SDK to access Firestore.
import { initializeApp } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

// Start writing functions
// https://firebase.google.com/docs/functions/typescript

<<<<<<< HEAD:functions/src/index.ts
export const imageTagger = functions.firestore.document('photos/{document}')
  .onCreate( async (event: { data: any; }) => {
    // File data
    const object = event.data;
    const filePath = object.name;
=======
export const helloWorld = onRequest((request, response) => {
  logger.info("Hello logs!", {structuredData: true});
  response.send("Hello from Firebase!");
});
>>>>>>> 9fb4e7b (add firebase hello world):src/functions/src/index.ts


exports.addMessage = onRequest(async (req, res) => {
  const original = req.query.text;
  const writeResult = await getFirestore()
    .collection("messages")
    .add({ original: original });
  res.json({ result: `Message with ID: ${writeResult.id} added.` });
});

exports.makeUppercase = onDocumentCreated('/mesasges/{documentId}', (event) => {
  const original = event.data?.data().documentId.original;
  logger.log('Uppercasing', event.params.documentId, original);

  const uppercase = original.toUpperCase();

  return event.data?.ref.set({ uppercase }, { merge: true });
});

initializeApp();