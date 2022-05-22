// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';  
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAD8PnXwR7qBiOwSTdlofPSmJJNo92IiqA",
    authDomain: "consultaya-e1d8e.firebaseapp.com",
    projectId: "consultaya-e1d8e",
    storageBucket: "consultaya-e1d8e.appspot.com",
    messagingSenderId: "158761717341",
    appId: "1:158761717341:web:5bb720755e2212f6b207b4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
