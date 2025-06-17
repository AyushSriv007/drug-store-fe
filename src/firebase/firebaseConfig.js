// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAZRgWPqKn314Sq5GZp37rZVpEVZtWZPQU",
  authDomain: "shoppers-hunt.firebaseapp.com",
  projectId: "shoppers-hunt",
  storageBucket: "shoppers-hunt.firebasestorage.app",
  messagingSenderId: "690844838585",
  appId: "1:690844838585:web:3bd9f901297d32fe250968",
  measurementId: "G-TMC48XLCHT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);