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
  .onCreate( async event => {
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