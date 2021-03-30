import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBvgWQctndmeSob3laPMDcPql4SpxQUGeM",
  authDomain: "clone-9072f.firebaseapp.com",
  projectId: "clone-9072f",
  storageBucket: "clone-9072f.appspot.com",
  messagingSenderId: "215359032559",
  appId: "1:215359032559:web:91a4c9024e269177ba9f1a",
  measurementId: "G-WPSFDQDZLM",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
