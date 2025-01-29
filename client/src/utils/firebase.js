// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDaS8Q5LP_CHfgNNjG3NY4P5tXisAxMNEs",
  authDomain: "whatsapp-mern-5bde7.firebaseapp.com",
  projectId: "whatsapp-mern-5bde7",
  storageBucket: "whatsapp-mern-5bde7.firebasestorage.app",
  messagingSenderId: "1011085354907",
  appId: "1:1011085354907:web:c1de8d647f0e00b387a33e",
  measurementId: "G-6FB283WW1F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);