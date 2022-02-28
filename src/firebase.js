// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
import {getAuth, GoogleAuthProvider} from 'firebase/auth';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAX2kUXDG54rt8WnG4F9Vq1bIYtPjihvn4",
  authDomain: "apollo-1a28d.firebaseapp.com",
  projectId: "apollo-1a28d",
  storageBucket: "apollo-1a28d.appspot.com",
  messagingSenderId: "341178223610",
  appId: "1:341178223610:web:ecc60fda411ac27e143243",
  measurementId: "G-8K7RKQPRD8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app)
export const provider = new GoogleAuthProvider();
