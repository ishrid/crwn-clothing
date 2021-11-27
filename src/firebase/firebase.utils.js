import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';




const config =




{
    apiKey: "AIzaSyCkxtUOeuWGDdrsvQtBI_xsFBA0p7uqmb0",
    authDomain: "crwn-db-f7a44.firebaseapp.com",
    projectId: "crwn-db-f7a44",
    storageBucket: "crwn-db-f7a44.appspot.com",
    messagingSenderId: "422195799819",
    appId: "1:422195799819:web:a0482ef3635767bd7d240e",
    measurementId: "G-EBSFTT0NSF"
  }


  firebase.initializeApp(config);


  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();

  provider.setCustomParameters({prompt: 'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
