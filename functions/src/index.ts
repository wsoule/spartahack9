// Import the functions you need from the SDKs you need
import * as FileSystem from 'expo-file-system';
import { app } from '@/firebaseConfig';
import { getStorage, ref, uploadBytes } from "firebase/storage";
import * as vision from '@google-cloud/vision';
import * as ImagePicker from 'expo-image-picker';
import * as blobUtil from 'blob-util';
//import { launchImageLibrary } from 'react-native-image-picker';

// Your web app's Firebase configuration
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

