import firebase from "firebase/app";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDIBPZKPf2WwxE8lZ0sQeV-jWGE32W1CCQ",
  authDomain: "pokemon-game-5bac9.firebaseapp.com",
  databaseURL: "https://pokemon-game-5bac9-default-rtdb.firebaseio.com",
  projectId: "pokemon-game-5bac9",
  storageBucket: "pokemon-game-5bac9.appspot.com",
  messagingSenderId: "428304072025",
  appId: "1:428304072025:web:7fc91a8f35d6d90484a048",
};

firebase.initializeApp(firebaseConfig);
export const fire = firebase;
export const database = fire.database();

export default database;
