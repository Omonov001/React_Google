// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAp_KaniAOR3XF6gTo4kRULIeOI7biGhf0",
  authDomain: "king-d492d.firebaseapp.com",
  projectId: "king-d492d",
  storageBucket: "king-d492d.firebasestorage.app",
  messagingSenderId: "401868042539",
  appId: "1:401868042539:web:eb89145942631c661e156e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider()

export { auth, db , googleProvider};

// const auth = getAuth(app);

// export {auth}
