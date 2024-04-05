// Import the functions you need from the SDKs you need
import { initializeApp } from "@firebase/app";
import { getAuth } from "@firebase/auth";
import { getFirestore, collection } from "@firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDEFQhRWRydGinaJsmO2JTUOr5p9mjZP64",
  authDomain: "e-commerce-24915.firebaseapp.com",
  projectId: "e-commerce-24915",
  storageBucket: "e-commerce-24915.appspot.com",
  messagingSenderId: "150840497615",
  appId: "1:150840497615:web:fe81ce23b17ad9c8f36eba",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const auth = getAuth(app);
export const productCollection = collection(db, "products");
