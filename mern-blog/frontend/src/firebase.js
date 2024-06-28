// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-8ba3e.firebaseapp.com",
  projectId: "mern-blog-8ba3e",
  storageBucket: "mern-blog-8ba3e.appspot.com",
  messagingSenderId: "1036228721997",
  appId: "1:1036228721997:web:46e2fc0e50a549d342cb04",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
