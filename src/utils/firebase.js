// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCHeF-d3-_tDllYTqACpXSbDZ_7Q0XKSg4",
  authDomain: "netflixgpt-g3a.firebaseapp.com",
  projectId: "netflixgpt-g3a",
  storageBucket: "netflixgpt-g3a.appspot.com",
  messagingSenderId: "125792735793",
  appId: "1:125792735793:web:2bcd05d50b85aa2b4f7b10",
  measurementId: "G-E3C16FLP8K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();