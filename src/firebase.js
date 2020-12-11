import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "", //___ENTER__APIKEY
    authDomain: "clone-1b332.firebaseapp.com",
    databaseURL: "https://clone-1b332.firebaseio.com",
    projectId: "clone-1b332",
    storageBucket: "clone-1b332.appspot.com",
    messagingSenderId: "998486488152",
    appId: "1:998486488152:web:292c70379a56d6d095c62d",
    measurementId: "G-FN7HQQTTWM"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore()
  const auth = firebase.auth();

export {db , auth};
