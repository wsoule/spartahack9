import { auth } from '../firebaseConfig';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';

const ip = 'http://35.21.206.251:3000';

export const registerUser = (email, password, username, zipcode) => {
  createUserWithEmailAndPassword( auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      // Add user to db
      fetch(`${ip}/create-user`, {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({ email, username, location: zipcode }),
      })
      .then(res => {
        alert(res.json());
        return res.json();
      })
      .then((res) => {
        localStorage.setItem('Id', res._id);
        localStorage.setItem('username', res.username);
        alert(res._id, res.username);
      });
      alert(`Registered user: ${user.username}`);
    })
    .catch((error) => {
      alert(`Register user failed ${error.message}`);
    });
};

export const loginUser = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    
    fetch(`${ip}/login-user`, {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({ email }),
    })
      .then(res => {
        alert(res.json());
        return res.json();
      });

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