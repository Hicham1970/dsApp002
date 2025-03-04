import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCq-121ALRZXcluJob6MM20yMUxxUtaD-g",
  authDomain: "draftsurveyreports.firebaseapp.com",
  projectId: "draftsurveyreports",
  storageBucket: "draftsurveyreports.firebasestorage.app",
  messagingSenderId: "710596361686",
  appId: "1:710596361686:web:84e6b8f39d18801d69b877",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
