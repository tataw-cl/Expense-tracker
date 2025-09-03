// src/components/auth/firebase/firebase.js
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-lb90JfZIvtTaBHTd1Agq95D3Vz9mZ7A",
  authDomain: "expense-app-auth-bd763.firebaseapp.com",
  projectId: "expense-app-auth-bd763",
  storageBucket: "expense-app-auth-bd763.firebasestorage.app",
  messagingSenderId: "492418890279",
  appId: "1:492418890279:web:c9379e58bcfc9749122c02",
  measurementId: "G-HHG166X8NE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
