import firebase from "firebase/app";
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDLPpY8pEkYVse_n7mAH5_EszbhWcRLvMU",
  authDomain: "hotel-resort-9f6b2.firebaseapp.com",
  projectId: "hotel-resort-9f6b2",
  storageBucket: "hotel-resort-9f6b2.appspot.com",
  messagingSenderId: "889628625804",
  appId: "1:889628625804:web:0eca3bfd640e02a96f64a9",
  measurementId: "G-BRPSRZZV00"
};

const app = firebase.initializeApp(firebaseConfig)

export const db = firebase.firestore(app);
export const auth = firebase.auth()

export { firebase };