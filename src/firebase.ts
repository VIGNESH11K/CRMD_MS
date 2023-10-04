import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAnR93R6yS1kUGlE8DzNPH8g_jpXCaaqW0",
  authDomain: "master-9a1d4.firebaseapp.com",
  projectId: "master-9a1d4",
  storageBucket: "master-9a1d4.appspot.com",
  messagingSenderId: "45011320385",
  appId: "1:45011320385:web:d49ea21774a686a9f850c0",
  measurementId: "G-3B830RCFY0"

};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();
const currentUser = auth.currentUser;

const scores = db.collection('scores');
const scoresAdj = db.collection('scores_adj');

export { db, auth, currentUser, scores, scoresAdj };