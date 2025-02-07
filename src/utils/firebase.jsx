// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCCHIiDObAZZWvEsPBhRqAotlgUkhY8B4A",
  authDomain: "netflix-gpt-173c9.firebaseapp.com",
  projectId: "netflix-gpt-173c9",
  storageBucket: "netflix-gpt-173c9.firebasestorage.app",
  messagingSenderId: "402114722071",
  appId: "1:402114722071:web:d23aab85af1999c295df52"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();