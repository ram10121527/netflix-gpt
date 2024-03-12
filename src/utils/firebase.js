// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBQmdYQNidcJTiquhfSJWMpTJOVkGmIBwU",
  authDomain: "netflix-128e1.firebaseapp.com",
  projectId: "netflix-128e1",
  storageBucket: "netflix-128e1.appspot.com",
  messagingSenderId: "627620634010",
  appId: "1:627620634010:web:ab5ba1992c730d26602e23",
  measurementId: "G-QPX5QMBNK0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();