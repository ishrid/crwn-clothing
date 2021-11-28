import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyCkxtUOeuWGDdrsvQtBI_xsFBA0p7uqmb0",
  authDomain: "crwn-db-f7a44.firebaseapp.com",
  projectId: "crwn-db-f7a44",
  storageBucket: "crwn-db-f7a44.appspot.com",
  messagingSenderId: "422195799819",
  appId: "1:422195799819:web:a0482ef3635767bd7d240e",
  measurementId: "G-EBSFTT0NSF",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creatin user", error.message);
    }
  }
  return userRef;
};
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
