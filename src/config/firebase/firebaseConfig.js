// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC8HbXaznPzqjj1Mh-JLdLbji98ilzjUCk",
  authDomain: "hsb-learning.firebaseapp.com",
  projectId: "hsb-learning",
  storageBucket: "hsb-learning.appspot.com",
  messagingSenderId: "184020459601",
  appId: "1:184020459601:web:ff0731423be3ef0b615870",
  measurementId: "G-ZDBJH0S6RL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app