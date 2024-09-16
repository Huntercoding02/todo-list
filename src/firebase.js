// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDzGbP_DtcmJ5huUJnAFPONAOurGoKAR0k",
  authDomain: "todo-24e85.firebaseapp.com",
  projectId: "todo-24e85",
  storageBucket: "todo-24e85.appspot.com",
  messagingSenderId: "694392098833",
  appId: "1:694392098833:web:fabefefae947e59213a1b0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)