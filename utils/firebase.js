// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  // apiKey: process.env.NEXT_PUBLIC_API_KEY,
  // authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  // projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  // storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  // messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
  // appId: process.env.NEXT_PUBLIC_APP_ID,
  // measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID,
  apiKey: "AIzaSyCMDh-8gemVVXgghByylwkzw-H6x-9gdj0",
  authDomain: "react-auth-aa4a0.firebaseapp.com",
  projectId: "react-auth-aa4a0",
  storageBucket: "react-auth-aa4a0.appspot.com",
  messagingSenderId: "1012996546086",
  appId: "1:1012996546086:web:d57d685cd019ca3c8ad0e7",
  measurementId: "G-R8MG0JZKRS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore(app);
