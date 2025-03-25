import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  FacebookAuthProvider,
  GithubAuthProvider,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyAS5BWUB3fjFOXxOuSh5N0kXc_dvX4SBqQ",
  authDomain: "kivicoin-389a4.firebaseapp.com",
  databaseURL: "https://kivicoin-389a4-default-rtdb.firebaseio.com",
  projectId: "kivicoin-389a4",
  storageBucket: "kivicoin-389a4.firebasestorage.app",
  messagingSenderId: "903589174066",
  appId: "1:903589174066:web:531ab4a0858c2b4fdd552b",
  measurementId: "G-7XCQ55W3QV",
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const analytics = getAnalytics(app);

// Social Authentication Providers
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();
const githubProvider = new GithubAuthProvider();

export {
  auth,
  db,
  analytics,
  googleProvider,
  facebookProvider,
  githubProvider,
};
