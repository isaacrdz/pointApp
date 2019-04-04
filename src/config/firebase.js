import firebase from "firebase";
require("firebase/firestore");

const config = {
  apiKey: "AIzaSyDTk3b6lsl9l7Er6oZHFyusW98JnkOgln8",
  authDomain: "pointtx-59f95.firebaseapp.com",
  databaseURL: "https://pointtx-59f95.firebaseio.com",
  projectId: "pointtx-59f95",
  storageBucket: "pointtx-59f95.appspot.com",
  messagingSenderId: "835133648494"
};

firebase.initializeApp(config);

const db = firebase.firestore();

export default db;
