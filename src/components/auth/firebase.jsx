// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-lb90JfZIvtTaBHTd1Agq95D3Vz9mZ7A",
  authDomain: "expense-app-auth-bd763.firebaseapp.com",
  projectId: "expense-app-auth-bd763",
  storageBucket: "expense-app-auth-bd763.appspot.com",
  messagingSenderId: "492418890279",
  appId: "1:492418890279:web:c9379e58bcfc9749122c02",
  measurementId: "G-HHG166X8NE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

/*
Completed
Register app
Editable
Add Firebase SDK




Editable
Install Firebase CLI


4
Deploy to Firebase Hosting
You can deploy now or later. To deploy now, open a terminal window, then navigate to or create a root directory for your web app.

Sign in to Google
firebase login
Initiate your project
Run this command from your app's root directory:

firebase init
When you're ready, deploy your web app
Put your static files (e.g., HTML, CSS, JS) in your app's deploy directory (the default is "public"). Then, run this command from your app's root directory:

firebase deploy
After deploying, view your app at expense-app-auth-bd763.web.app

Need help? Check out the Hosting docs

*/
