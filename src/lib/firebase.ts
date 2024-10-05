// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBW-jY6V-S3vpXOkoaI4f2nSRpjOPYrisg",
  authDomain: "poneyape-com.firebaseapp.com",
  projectId: "poneyape-com",
  storageBucket: "poneyape-com.appspot.com",
  messagingSenderId: "774628739093",
  appId: "1:774628739093:web:f2a6c4de68089d00ab661c",
  measurementId: "G-QN0QW2KX5W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
