import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCv1GI-sRbOyMLmaKjpI_argwsp32MGmPk",
  authDomain: "hacknroll-2ad6e.firebaseapp.com",
  projectId: "hacknroll-2ad6e",
  storageBucket: "hacknroll-2ad6e.appspot.com",
  messagingSenderId: "649863824058",
  appId: "1:649863824058:web:e86c19ae9bf2cfe51ff883"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
