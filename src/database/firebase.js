import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

//apiKey: import.meta.env.API_KEY,

const firebaseConfig = {
    apiKey: "AIzaSyDIKWqpfVKmhSyg1fNXorIGuO9WeMP9uIE",
    authDomain: "proyectolol-d47f0.firebaseapp.com",
    projectId: "proyectolol-d47f0",
    storageBucket: "proyectolol-d47f0.firebasestorage.app",
    messagingSenderId: "206962015526",
    appId: "1:206962015526:web:1bc080f815d2fedf6a15e7",
    measurementId: "G-KE793JCKN2"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };