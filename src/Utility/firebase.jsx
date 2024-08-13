import firebase from "firebase/compat/app";
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";


const firebaseConfig = {
  
    apiKey: "AIzaSyDfKEAflxcq-C-ksgIA1hEYHTPBHTkrfTg",
    authDomain: "dev-eb807.firebaseapp.com",
    projectId: "dev-eb807",
    storageBucket: "dev-eb807.appspot.com",
    messagingSenderId: "904753014120",
    appId: "1:904753014120:web:75b61d4f10b940df2de2dd",
    measurementId: "G-CNLTN3M1X1"
  };

const app =firebase.initializeApp(firebaseConfig);
export const auth =getAuth(app);
export const db =app.firestore();
