import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7P_bTbZuGKxHwVvCkG9dWMGti-cEjMBE",
  authDomain: "inventory-system-77d91.firebaseapp.com",
  projectId: "inventory-system-77d91",
  storageBucket: "inventory-system-77d91.appspot.com",
  messagingSenderId: "255232248146",
  appId: "1:255232248146:web:a7ba54859eefbcc9edd28b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
