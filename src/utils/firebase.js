// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD0e4mMn4QihGtXJbDAiFDFlL3SLxV5dWY",
  authDomain: "netflix-gpt-cde35.firebaseapp.com",
  projectId: "netflix-gpt-cde35",
  storageBucket: "netflix-gpt-cde35.appspot.com",
  messagingSenderId: "616502598037",
  appId: "1:616502598037:web:0a52f9d65b353c062b3e9c",
  measurementId: "G-C9RPND2KND",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
