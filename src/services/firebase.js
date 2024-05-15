// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { browserLocalPersistence, getAuth, setPersistence } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDR23-tYTM4G8Gf6KkwV6hABo9um5V3xh0",
  authDomain: "utn-react-auth-prueba.firebaseapp.com",
  projectId: "utn-react-auth-prueba",
  storageBucket: "utn-react-auth-prueba.appspot.com",
  messagingSenderId: "530276692761",
  appId: "1:530276692761:web:9da34279906acdae360b88"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

//Set persistence to Local Storage
setPersistence(auth, browserLocalPersistence)
    .then(() => {
        console.log("Auth persistence set to LocalStorage.");
    })
    .catch((err) => {
        console.error("Error setting auth persistence:", err);
    });