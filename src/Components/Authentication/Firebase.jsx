
import { initializeApp } from "firebase/app";
import {getAuth , GoogleAuthProvider , FacebookAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCicT01sLYF9k57VVaOkMTq8O6LKl8CWVM",
  authDomain: "kivicoin-investment.firebaseapp.com",
  projectId: "kivicoin-investment",
  storageBucket: "kivicoin-investment.firebasestorage.app",
  messagingSenderId: "909683166689",
  appId: "1:909683166689:web:205eda50a8c93b354916a0",
  measurementId: "G-VTE676C8GQ",
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const providor = new GoogleAuthProvider(); 
const FacebookAuthProvidor = new FacebookAuthProvider(); 

export { auth, providor, FacebookAuthProvidor };