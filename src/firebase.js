import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDbmetkSDmvRLj8SH3TPdQg8fzABB5sE8g",
  authDomain: "clone-react-firebase.firebaseapp.com",
  databaseURL: "https://clone-react-firebase.firebaseio.com",
  projectId: "clone-react-firebase",
  storageBucket: "clone-react-firebase.appspot.com",
  messagingSenderId: "686620176390",
  appId: "1:686620176390:web:92d7b0be6bc88895ab1387",
  measurementId: "G-LYCLZGSYPW",
});
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
