import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCoEQfVNeLIbNi2BXwO33JgGnXPZk3PMhk",
  authDomain: "clone-frontend-project.firebaseapp.com",
  projectId: "clone-frontend-project",
  storageBucket: "clone-frontend-project.appspot.com",
  messagingSenderId: "244690920597",
  appId: "1:244690920597:web:e2b048dc2740674cdd679c",
  measurementId: "G-2YJLE8F910",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
// Use these for db & auth
const auth = firebase.auth();
const db = app.firestore();

export {auth, db };
