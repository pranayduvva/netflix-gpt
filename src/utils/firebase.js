// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyArTPcTIm53x7K_amh6YShOtMpFGEngmG0",
  authDomain: "netflix-38e66.firebaseapp.com",
  projectId: "netflix-38e66",
  storageBucket: "netflix-38e66.appspot.com",
  messagingSenderId: "629894910212",
  appId: "1:629894910212:web:9ef5f03fe2eba1e20f4051",
  measurementId: "G-CMK0VYSJQX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);