import { auth } from '../firebaseConfig';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';

export const registerUser = (email, password, username, zipcode) => {
  createUserWithEmailAndPassword( auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      // Add user to db
      // After user creation
      updateProfile(user, {
        displayName: username
      }).then(() => {
        // Profile updated
        alert(`Registered user: ${user.displayName}`);
      }).catch((error) => {
        alert(`Username bad: ${error.message}`);
      });
    })
    .catch((error) => {
      alert(`Register user failed ${error.message}`);
    });
};

export const loginUser = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    alert(`User ${user.displayName} logged in successfully`);
  } catch(error) {
    alert(`Login failed: ${error.message}`);
  }
};

export const logoutUser = async () => {
  try {
    await signOut(auth);
    alert('User logged out successfully');
  } catch (error) {
    alert(`Logout failed: ${error.message}`);
  }
}