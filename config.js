import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyDyJs87YxoWVD2RaOm5h7maDQDaxLCU5eo",
  authDomain: "e-ride-f6941.firebaseapp.com",
  projectId: "e-ride-f6941",
  storageBucket: "e-ride-f6941.appspot.com",
  messagingSenderId: "796904675788",
  appId: "1:796904675788:web:cb0d99e61a1aa5d278e569"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
