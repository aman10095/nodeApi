const firebase = require("firebase");
const firebaseConfig = {
  apiKey: "AIzaSyBtxb_YVY7vS-eVd55y8UI5U9_tW2Qprfs",
  authDomain: "bridgedotswebapi-f6e91.firebaseapp.com",
  databaseURL: "https://bridgedotswebapi-f6e91-default-rtdb.firebaseio.com",
  projectId: "bridgedotswebapi-f6e91",
  storageBucket: "bridgedotswebapi-f6e91.appspot.com",
  messagingSenderId: "7760558133",
  appId: "1:7760558133:web:d9cc6058c2bd7d699d597c",
  measurementId: "G-2W0XSF0P0X"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const User = db.collection("Users");
module.exports = User;
