import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

export const firebaseConfig = {
  apiKey: "AIzaSyBOslgef1rYI9K83EPUkTiggOtnDUR6O5k",
  authDomain: "stripe-fire-j.firebaseapp.com",
  databaseURL: "https://stripe-fire-j.firebaseio.com",
  projectId: "stripe-fire-j",
  storageBucket: "stripe-fire-j.appspot.com",
  messagingSenderId: "418965587657",
  appId: "1:418965587657:web:ae5f017939a4a818c3af18",
  measurementId: "G-43BJNM12GQ"
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export const auth = firebase.auth();