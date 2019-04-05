import firebase from "firebase";
require("firebase/firestore");

const config = {
  apiKey: "AIzaSyCerOtaP3ykkKGkUbLrdqgfMWTC9nvncFc",
  authDomain: "ninjakiaapp.firebaseapp.com",
  databaseURL: "https://ninjakiaapp.firebaseio.com",
  projectId: "ninjakiaapp",
  storageBucket: "ninjakiaapp.appspot.com",
  messagingSenderId: "183894414403"
};

firebase.initializeApp(config);

const db = firebase.firestore();

export default db;
