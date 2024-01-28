import { auth, app } from '../firebaseConfig';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from '@firebase/auth';

export const registerUser = (email, password) => {
  createUserWithEmailAndPassword( auth, email, password)
    .then((userCredential) => {
      user = userCredential.user;
      console.log('Registered user:', user.displayName);
    })
    .catch((error) => {
      console.error('Register user failed', error);
    });
};

export const loginUser = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    console.log(`User ${user.displayName} logged in successfully`);
  } catch (error) {
    console.error('Login failed:', error);
  }
};

export const logoutUser = async () => {
  try {
    await signOut(auth);
    console.log('User logged out successfully');
  } catch (error) {
    console.error('Logout failed:', error);
  }
}