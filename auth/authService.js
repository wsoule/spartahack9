import { auth } from '../firebaseConfig';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';

export const registerUser = (email, password, username, zipcode) => {
  createUserWithEmailAndPassword( auth, email, password)
    .then((userCredential) => {
      user = userCredential.user;
      // Add user to db
      alert('Registered user:', user.displayName);
    })
    .catch((error) => {
      alert('Register user failed', error);
    });
};

export const loginUser = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    alert(`User ${user.displayName} logged in successfully`);
  } catch (error) {
    alert('Login failed:', error);
  }
};

export const logoutUser = async () => {
  try {
    await signOut(auth);
    alert('User logged out successfully');
  } catch (error) {
    alert('Logout failed:', error);
  }
}