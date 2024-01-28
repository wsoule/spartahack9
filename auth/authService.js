import { auth } from '../firebaseConfig';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { User } from '@/app/_layout'

export const ip = 'http://35.21.206.251:3000';

export const registerUser = async (email, password, username, zipcode) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      // Add user to db
      fetch(`${ip}/create-user`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, username, location: zipcode }),
      })
        .then(async (res) => {
          const responseData = await res.json();
          await AsyncStorage.setItem('Id', responseData._id);
          await AsyncStorage.setItem('username', responseData.username);
        });
      alert(`Registered user: ${user.username}`);
    })
    .catch((error) => {
      alert(`Register user failed ${error.message}`);
      return false;
    });
};

export const loginUser = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    fetch(`${ip}/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    })
      .then(async (res) => {
        const responseData = await res.json();
        // Store user data in AsyncStorage
        await AsyncStorage.setItem('Id', responseData._id);
        await AsyncStorage.setItem('username', responseData.username);
        User.username = responseData.username;
        User.userId = responseData._id;
      }).catch((error) => {
        alert(`Login failed ${error.message}`);
      });



    alert(`User logged in successfully`);
    return true;
  } catch (error) {
    alert(`Login failed: ${error.message}`);
    return false;
  }
};

export const logoutUser = async () => {
  try {
    await signOut(auth);
    await AsyncStorage.removeItem('Id');
    await AsyncStorage.removeItem('username');
    alert('User logged out successfully');
    return true;
  } catch (error) {
    alert(`Logout failed: ${error.message}`);
    return false;
  }
}
