// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const analytics = getAnalytics(app);
export default app;

export const db = firebase.firestore();
export const storage = firebase.storage();

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";