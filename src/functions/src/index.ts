// Firebase
import * as functions from 'firebase-functions'
import * as admin from 'firebase-admin'
admin.initializeApp(functions.config().firebase);

// Cloud Vision
import * as vision from '@google-cloud/vision'
const visionClient = new vision.ImageAnnotatorClient();

// Bucket name for Cloud function invocation
const bucketName = 'wastewell-8a42f-vision';

// Initialize app & db
admin.initializeApp(functions.config().firebase);
const db = admin.firestore();

exports.addSimilarImages = functions.firestore.document('photos/{document}').onCreate((snap, context) => {
  console.log('SNAP', snap);
  console.log('CONTEXT', context);

  const data = snap.data();
  console.log('DATA IN IS', data);
  const photoUrl = `gs://${data.bucket}/${data.fullPath}`;
  console.log('URL IS', photoUrl);

  return Promise.resolve()
    .then(() => {
      return visionClient.webDetection(photoUrl);
    }).then(results => {
      console.log('VISION DATA ALL IS: ', results);
      const webDetection = results[0].webDetection

      let similarImages: vision.protos.google.cloud.vision.v1.WebDetection.IWebImage[] = [];
      if (webDetection?.visuallySimilarImages?.length) {
        webDetection.visuallySimilarImages.forEach(image => {
          similarImages.push(image);
        })
      }

      console.log('similarImages', similarImages);

      db.collection('photos').doc(context.params.document).update({ similarImages })
        .then(res => console.log('dopples added'))
  		  .catch(err => console.error(err));

    }).catch(err => console.error(err));
})

export const imageTagger = functions.storage
  .bucket(bucketName)
  .object()
  .onMetadataUpdate( async event => {
    // File data
    const object = event.metadata;
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
  )