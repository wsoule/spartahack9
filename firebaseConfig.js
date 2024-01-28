// Import the functions you need from the SDKs you need
import firebase from "firebase";
import '@firebase/auth';

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
firebase.initializeApp(firebaseConfig);

export default firebase;