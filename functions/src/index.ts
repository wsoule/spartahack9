// Import the functions you need from the SDKs you need
import * as FileSystem from 'expo-file-system';
import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes } from "firebase/storage";
import * as vision from '@google-cloud/vision';
import * as ImagePicker from 'expo-image-picker';
import * as blobUtil from 'blob-util';
//import { launchImageLibrary } from 'react-native-image-picker';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6DYEaHHA6cJjwpGGTbkbnnKxxWAmD6_I",
  authDomain: "wastewell-8a42f.firebaseapp.com",
  databaseURL: "https://wastewell-8a42f-default-rtdb.firebaseio.com",
  projectId: "wastewell-8a42f",
  storageBucket: "wastewell-8a42f.appspot.com",
  messagingSenderId: "453658463481",
  appId: "1:453658463481:web:bb43bb54c0ee0db3ed6628",
  measurementId: "G-S8DDLRCTJE"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
//const visionClient = new vision.ImageAnnotatorClient();


/**
 * Uploads an image to Firebase Storage and optionally processes it with Google Cloud Vision.
 * @param {string} imagePath - Path to the image file.
 */
export const uploadImage = async (result: any) => {
  // let result = await ImagePicker.launchImageLibraryAsync({
  //   mediaTypes: ImagePicker.MediaTypeOptions.Images,
  //   allowsEditing: true,
  //   aspect: [4, 3],
  //   quality: 1,
  // });

  console.log(result);
  if (result) {
    const uri = result;
    const response = await fetch(uri);
    const blob = await response.blob();
    const storageRef = ref(storage, `images/${uri.split('/').pop()}`);
    await uploadBytes(storageRef, blob);
    console.log('Image uploaded to Firebase Storage');
  }
};

