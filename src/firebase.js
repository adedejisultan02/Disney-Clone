// Import the necessary functions from the Firebase SDK
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDkXDdBFoP38TMMepdCsx5246qJWVqrzlE",
  authDomain: "disneyplus-clone-a8980.firebaseapp.com",
  projectId: "disneyplus-clone-a8980",
  storageBucket: "disneyplus-clone-a8980.appspot.com",
  messagingSenderId: "205595414906",
  appId: "1:205595414906:web:85ae1ccedb510a18cec6c3",
  measurementId: "G-3HCRBFJ9QS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const storage = getStorage(app);

export { auth, provider, storage, signInWithPopup };
export default db;
