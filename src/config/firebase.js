import firebase from "firebase";
require("firebase/firestore");

const config = {
  apiKey: "AIzaSyCOg-DYpSBeWn6aEuKnJHDEfm_PFrM9Hec",
  authDomain: "pointtx-47f43.firebaseapp.com",
  databaseURL: "https://pointtx-47f43.firebaseio.com",
  projectId: "pointtx-47f43",
  storageBucket: "pointtx-47f43.appspot.com",
  messagingSenderId: "616932111417"
};

firebase.initializeApp(config);

const db = firebase.firestore();

export default db;
