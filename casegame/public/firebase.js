// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCaNPWZ5nTqXJY9n1CtQtng6F_jihmz6oY",
  authDomain: "tower-defense-e5b8c.firebaseapp.com",
  projectId: "tower-defense-e5b8c",
  storageBucket: "tower-defense-e5b8c.appspot.com",
  messagingSenderId: "44914716320",
  appId: "1:44914716320:web:d31214888785f57ff2a3c5",
  measurementId: "G-CK142QCP96",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
