// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC0giqaDFnxp_4e5J6RTzm9rrRPAcoCcHE",
  authDomain: "firefox-19a6c.firebaseapp.com",
  projectId: "firefox-19a6c",
  storageBucket: "firefox-19a6c.appspot.com",
  messagingSenderId: "264181578233",
  appId: "1:264181578233:web:5f2a9b1767865297512528",
  measurementId: "G-DSSHWWRPJ1",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
