// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyDQDDKQ-Xpr34Q7dheM_kq3EtJgWO-Z8Os",
    authDomain: "frontend-d8bf8.firebaseapp.com",
    projectId: "frontend-d8bf8",
    storageBucket: "frontend-d8bf8.firebasestorage.app",
    messagingSenderId: "303323086726",
    appId: "1:303323086726:web:28efa9fb9efc769508b607"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;