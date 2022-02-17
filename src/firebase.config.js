// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBRouR2edPLbV6CkLDAuo44Q2ibDXhCQ2M",
  authDomain: "house-marketplace-app-5ba18.firebaseapp.com",
  projectId: "house-marketplace-app-5ba18",
  storageBucket: "house-marketplace-app-5ba18.appspot.com",
  messagingSenderId: "116588640113",
  appId: "1:116588640113:web:6db610324fd2b1ce39a8d0",
  measurementId: "G-SMV4DGKXCL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore();