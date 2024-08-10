// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyDePIC-qH6Rv7HyRA54bjWmQWjYuRZY64o",
    authDomain: "reactjs-mdiaz.firebaseapp.com",
    projectId: "reactjs-mdiaz",
    storageBucket: "reactjs-mdiaz.appspot.com",
    messagingSenderId: "605907465912",
    appId: "1:605907465912:web:f8aedf0d9c8fe7763d264d"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
