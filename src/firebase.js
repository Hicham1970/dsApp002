import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAZRX4Q1gT70DdeCferGuZlTNzq6FwT6EU",
  authDomain: "firstfirebaseproject-f2451.firebaseapp.com",
  projectId: "firstfirebaseproject-f2451",
  storageBucket: "firstfirebaseproject-f2451.firebasestorage.app",
  messagingSenderId: "99207712858",
  appId: "1:99207712858:web:789d97b25d15c07da44863",
  measurementId: "G-FCT1EP4VQL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Make auth and firestore references
const authInstance = getAuth(app);
const db = getFirestore(app);



export { db, authInstance as auth }