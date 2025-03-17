import { auth } from './firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

// Signup function
const signup = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log('User signed up:', user);
      console.log('User signed up:', user.email);
      // Closing the Modal


    })
    .catch((error) => {
      console.error('Error signing up:', error);
    });
};

// Example login function
const login = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log('User logged in:', user);
    })
    .catch((error) => {
      console.error('Error logging in:', error);
    });
};

export { signup, login }; // Export the functions for use in Navbar.jsx