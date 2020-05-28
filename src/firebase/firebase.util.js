import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyB2O9721LKie7Y2ZPLqiCI6CxCy5xSoZd0",
  authDomain: "omg-clothing.firebaseapp.com",
  databaseURL: "https://omg-clothing.firebaseio.com",
  projectId: "omg-clothing",
  storageBucket: "omg-clothing.appspot.com",
  messagingSenderId: "213378756934",
  appId: "1:213378756934:web:4a14fbbcc63f2e008af547",
  measurementId: "G-L64PH5LLVE",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
