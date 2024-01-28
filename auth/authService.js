import firebase from '../firebaseConfig';

export const registerUser = (email, password) => {
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // User registered
    })
    .catch((error) => {
      // Handle errors
    });
};

export const loginUser = async (email, password) => {
  try {
    const userCredential = await firebase.auth().signInWithEmailAndPassword(email, password);
    // handle userCredential
  } catch (error) {
    // handle error
  }
};

const auth = getAuth();
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });

  import { getAuth, signInWithPopup, OAuthProvider } from "firebase/auth";

const provider = new OAuthProvider('wastewell.us.auth0.com');

signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    var credential = OAuthProvider.credentialFromResult(result);
    var token = credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    // ...
  }).catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The AuthCredential type that was used.
    var credential = OAuthProvider.credentialFromError(error);
    // ...
  });
