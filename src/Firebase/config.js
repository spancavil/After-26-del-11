// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBY8wDGOj11A5Y1RDNAK4QR_Vz8vfz6eTE",
  authDomain: "rjs-19760.firebaseapp.com",
  projectId: "rjs-19760",
  storageBucket: "rjs-19760.appspot.com",
  messagingSenderId: "284378145976",
  appId: "1:284378145976:web:f8d353339272fea9b1404d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);