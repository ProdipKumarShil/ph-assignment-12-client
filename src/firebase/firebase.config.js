// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBjgULHJrSu545nM19Iz9HJ_wUZ-XI1OGc",
  authDomain: "get-fit-47cf5.firebaseapp.com",
  projectId: "get-fit-47cf5",
  storageBucket: "get-fit-47cf5.appspot.com",
  messagingSenderId: "1019681051769",
  appId: "1:1019681051769:web:a5b43fca8472dc3f9a70a8",
  measurementId: "G-PQGWH20NEF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app