// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAocxhAGSZ9EZKX9DD8x4GmF82YW7qL4ZM",
  authDomain: "fir-mapa-7f4c9.firebaseapp.com",
  projectId: "fir-mapa-7f4c9",
  storageBucket: "fir-mapa-7f4c9.firebasestorage.app",
  messagingSenderId: "29274009394",
  appId: "1:29274009394:web:eb7dbe69c76d4cf48d312b",
  measurementId: "G-CZHGEKTWV8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);