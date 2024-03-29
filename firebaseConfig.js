import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB6DYEaHHA6cJjwpGGTbkbnnKxxWAmD6_I",
  authDomain: "wastewell-8a42f.firebaseapp.com",
  projectId: "wastewell-8a42f",
  storageBucket: "wastewell-8a42f.appspot.com",
  messagingSenderId: "453658463481",
  appId: "1:453658463481:web:bb43bb54c0ee0db3ed6628",
  measurementId: "G-S8DDLRCTJE"
};
// Initialize Firebase
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
 

export const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});
// export const auth = getAuth(app);