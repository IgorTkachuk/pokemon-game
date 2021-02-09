import { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import Layout from "../../../../components/Layout";
import PokemonCard from "../../../../components/PokemonCard";
import { PokemonContext } from "../../../../context/pokemonContext";

import database from "../../../../service/firebase";

import s from "./style.module.css";

const StartPage = () => {
  const [pokemons, setPokemons] = useState({});
  const pCnxt = useContext(PokemonContext);

  let history = useHistory();

  useEffect(() => {
    database.ref("pokemons").once("value", (snapshot) => {
      setPokemons(snapshot.val());
    });
  }, []);

  const pokemonCardOnClickHandle = (key) => {
    console.log(pCnxt);
    pCnxt.selectPokemonHandle(pokemons[key]);
    database
      .ref("pokemons/" + key)
      .set({ ...pokemons[key], active: !pokemons[key].active })
      .then(() => {
        setPokemons((prevState) => {
          const newState = { ...prevState };
          newState[key].active = !prevState[key].active;
          return newState;
        });
      });
  };

  const addNewPokemonHandle = () => {
    const newPokemonObject = {
      abilities: ["keen-eye", "tangled-feet", "big-pecks"],
      stats: {
        hp: 63,
        attack: 60,
        defense: 55,
        "special-attack": 50,
        "special-defense": 50,
        speed: 71,
      },
      type: "flying",
      img:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png",
      name: "pidgeotto",
      base_experience: 122,
      height: 11,
      id: 17,
      values: {
        top: "A",
        right: 2,
        bottom: 7,
        left: 5,
      },
    };

    const newPokemonRef = database.ref("pokemons").push();
    newPokemonRef.set(newPokemonObject).then(() => {
      setPokemons({ ...pokemons, [newPokemonRef.key]: newPokemonObject });
    });
  };

  const startGameHandle = () => {
    history.push("/game/board");
  };

  return (
    <Layout
      id='1'
      colorBg='#181e2ba1'
      title='Layout first title with colorBg'
      descr='Layout first descr with colorBg'
    >
      {/* <div className={s.btn}>
        <button onClick={addNewPokemonHandle}>ADD NEW POKEMON</button>
      </div> */}

      <div className={s.btn}>
        <button onClick={startGameHandle}>START GAME</button>
      </div>

      <div className={s.flex}>
        {Object.entries(pokemons).map(
          ([key, { id, name, img, type, values, active }]) => {
            return (
              <PokemonCard
                key={key}
                rf={key}
                name={name}
                img={img}
                id={id}
                type={type}
                values={values}
                isActive={active}
                onClick={pokemonCardOnClickHandle}
              />
            );
          }
        )}
      </div>
    </Layout>
  );
};

export default StartPage;