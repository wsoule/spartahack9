import { auth } from '../firebaseConfig';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from '@firebase/auth';

export const registerUser = (email, password) => {
  createUserWithEmailAndPassword( auth, email, password)
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
