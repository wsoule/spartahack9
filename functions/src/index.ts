// The Cloud Functions for Firebase SDK to create Cloud Functions and triggers.
import { logger } from "firebase-functions";
import { onRequest } from "firebase-functions/v2/https";
import { onDocumentCreated } from "firebase-functions/v2/firestore";

// The Firebase Admin SDK to access Firestore.
import { initializeApp } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

// Start writing functions
// https://firebase.google.com/docs/functions/typescript

// Firebase
import * as functions from 'firebase-functions'
import * as admin from 'firebase-admin'
admin.initializeApp(functions.config().firebase);

// Cloud Vision
import * as vision from '@google-cloud/vision'
const visionClient = new vision.ImageAnnotatorClient();

// Bucket name for Cloud function invocation
const bucketName = 'wastewell-8a42f-vision';

export const imageTagger = functions.firestore.document('photos/{document}')
  .onCreate( async (event: { data: any; }) => {
    // File data
    const object = event.data;
    const filePath = object.name;
    
    // Location of file saved in bucket
    const imageUri = `gs://${bucketName}/${filePath}`;

    // Firestore docId === file name
    const docId =  filePath.split('.jpg')[0];

    const docRef = admin.firestore().collection('photos').doc(docId);

    // Await cloud vision response
    const results = await visionClient.labelDetection(imageUri);

    // Map results to desired format
    const labels = results[0].labelAnnotations?.map(obj => obj.description);
    const metal = labels?.includes('metal');

    return docRef.set({metal, labels});
  }
);

export const helloWorld = onRequest((request, response) => {
  logger.info("Hello logs!", {structuredData: true});
  response.send("Hello from Firebase!");
});

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