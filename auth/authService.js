import { auth } from '../firebaseConfig';

export const registerUser = (email, password) => {
  app.auth().createUserWithEmailAndPassword(email, password)
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
    const userCredential = await signInWithEmailAndPassword(auth, email, password);

    const user = userCredential.user;
    // handle userCredential
  } catch (error) {
    // handle error
  }
};
