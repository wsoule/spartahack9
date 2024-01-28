import firebase from '../firebaseConfig';

export const registerUser = (email, password) => {
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // User registered
      user = userCredential.user;
    })
    .catch((error) => {
      // Display errors
      console.error(error);
    });
};

export const loginUser = async (email, password) => {
  try {
    const userCredential = await firebase.auth().signInWithEmailAndPassword(email, password);

    const user = userCredential.user;
    // handle userCredential
  } catch (error) {
    // handle error
  }
};
