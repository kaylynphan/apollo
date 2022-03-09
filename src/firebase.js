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
  apiKey: "AIzaSyCv3L4b4tm_NLdCjNLVeRaCowmlkFlqZyw",
  authDomain: "apollo-ec188.firebaseapp.com",
  projectId: "apollo-ec188",
  storageBucket: "apollo-ec188.appspot.com",
  messagingSenderId: "307176005051",
  appId: "1:307176005051:web:02adbf9fd7c88fa5a2b89e",
  measurementId: "G-168N81CYRK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app)
export const provider = new GoogleAuthProvider();

//export const firestore = firebase.firestore();

