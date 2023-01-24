// import firebase from "firebase";
// const firebase = require('firebase');
// import { initializeApp } from "firebase/app";
// import {Firestore} from 'firebase/firestore';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyA6qvX7Tz8O1AE_LaW2UNra7ICFbzSdH7g",
    authDomain: "twitter-clone-e8b1e.firebaseapp.com",
    projectId: "twitter-clone-e8b1e",
    storageBucket: "twitter-clone-e8b1e.appspot.com",
    messagingSenderId: "1025594456640",
    appId: "1:1025594456640:web:09839f2bf79113e69afda5",
    measurementId: "G-7J7PYB6NLL"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  
  export default db;