import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB8weM0yxfvm8DsojwMFDMGugHEfnXQAp4",
  authDomain: "miniblog-fe1c1.firebaseapp.com",
  projectId: "miniblog-fe1c1",
  storageBucket: "miniblog-fe1c1.appspot.com",
  messagingSenderId: "991496961175",
  appId: "1:991496961175:web:9fd4f3f500427d286e7dd2"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
