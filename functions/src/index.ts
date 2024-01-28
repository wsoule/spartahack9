// Import the functions you need from the SDKs you need
import { app } from '@/firebaseConfig';
import { getStorage, ref, uploadBytes } from "firebase/storage";
import { analyzeImage } from '../visionApi';


// Your web app's Firebase configuration
const storage = getStorage(app);

/**
 * Uploads an image to Firebase Storage and optionally processes it with Google Cloud Vision.
 * @param {string} imagePath - Path to the image file.
 */
export const uploadImage = async (result: any) => {
  if (result) {
    const uri = result;
    const response = await fetch(uri);
    const blob = await response.blob();
    const storageRef = ref(storage, `images/${uri.split('/').pop()}`);
    await uploadBytes(storageRef, blob);
    analyzeImage(uri);
  }
};

