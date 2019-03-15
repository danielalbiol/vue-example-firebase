import firebase from 'firebase/app'

require("firebase/auth");
require("firebase/storage");
require("firebase/firestore");
require("firebase/functions");

var config = {
    apiKey: "AIzaSyCDuJnecd5v7TwaSUGCCHMAFx1d_7TeUMo",
    authDomain: "teatro-super-opera-bc5bc.firebaseapp.com",
    databaseURL: "https://teatro-super-opera-bc5bc.firebaseio.com",
    projectId: "teatro-super-opera-bc5bc",
    storageBucket: "",
    messagingSenderId: "308581112908"
  };

firebase.initializeApp(config);
const auth = firebase.auth()
const db = firebase.firestore()
const storage = firebase.storage()
const functions = firebase.functions()

export{
    firebase,
    auth,
    db,
    storage,
    functions
}