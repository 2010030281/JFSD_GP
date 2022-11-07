import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBUYDLtGyIKH1Pofp0WpvrooQUZaBzkzkA",
  authDomain: "gibgib-b4ecc.firebaseapp.com",
  databaseURL: "https://gibgib-b4ecc-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "gibgib-b4ecc",
  storageBucket: "gibgib-b4ecc.appspot.com",
  messagingSenderId: "236301281078",
  appId: "1:236301281078:web:9a5cb4d3352bd4a2877597",
  measurementId: "G-LQRY04YNKF"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };