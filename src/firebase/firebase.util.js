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

export const createUserProfileDocument = async (userAuth, additonalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdDate = new Date();

    try {
      userRef.set({
        displayName,
        email,
        createdDate,
        ...additonalData,
      });
    } catch (error) {
      console.log("error creating user", error);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
