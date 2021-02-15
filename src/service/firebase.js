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
class Firebase {
  constructor() {
    firebase.initializeApp(firebaseConfig);

    this.fire = firebase;
    this.database = this.fire.database();
  }

  getPokemonSocket = (cb) => {
    this.database.ref("pokemons").on("value", (snapshot) => {
      cb(snapshot.val());
    });
  };

  getPokemonsOnce = async () => {
    return await this.database
      .ref("pokemons")
      .once("value")
      .then((snapshot) => snapshot.val());
  };

  postPokemon = (key, pokemon) => {
    return this.database.ref(`pokemons/${key}`).set(pokemon);
  };

  addPokemon = (data, cb) => {
    const newKey = this.database.ref("pokemons").push().key;
    this.database
      .ref("pokemons/" + newKey)
      .set(data)
      .then(() => cb(newKey));
  };
}

export default Firebase;
