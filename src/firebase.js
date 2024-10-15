// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6c-8URBAkBoXTmZ_UPRcOKMujrClGzS0",
  authDomain: "todo-app-ac0d5.firebaseapp.com",
  projectId: "todo-app-ac0d5",
  storageBucket: "todo-app-ac0d5.appspot.com",
  messagingSenderId: "70184914279",
  appId: "1:70184914279:web:7bbfe276798e3be90333c2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)

