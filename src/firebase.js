// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyA6zjac8sgQqCwG01U2wDOf0R411IKsRsc",

  authDomain: "sleeper-clone.firebaseapp.com",

  projectId: "sleeper-clone",

  storageBucket: "sleeper-clone.firebasestorage.app",

  messagingSenderId: "239232733808",

  appId: "1:239232733808:web:1e42a724c3bd7cb97b9ab5"

};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
