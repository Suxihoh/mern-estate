// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "homehaven-8216b.firebaseapp.com",
  projectId: "homehaven-8216b",
  storageBucket: "homehaven-8216b.appspot.com",
  messagingSenderId: "556989487484",
  appId: "1:556989487484:web:41bf5786aea0209628ecf9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);