import { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import Layout from "../../../../components/Layout";
import PokemonCard from "../../../../components/PokemonCard";
import { PokemonContext } from "../../../../context/pokemonContext";

import s from "./style.module.css";
import { FirebaseContext } from "../../../../context/firebaseContext";

const StartPage = () => {
  const [pokemons, setPokemons] = useState({});
  const pCnxt = useContext(PokemonContext);
  const firebase = useContext(FirebaseContext);

  let history = useHistory();

  useEffect(() => {
    firebase.getPokemonSocket((pokemons) => {
      setPokemons(pokemons);
    });
  }, []);

  const pokemonCardOnClickHandle = (key) => {
    pCnxt.selectPokemonHandle(pokemons[key]);

    firebase.postPokemon(key, {
      ...pokemons[key],
      active: !pokemons[key].active,
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

    firebase.addPokemon(newPokemonObject, (newKey) => {
      setPokemons({ ...pokemons, [newKey]: newPokemonObject });
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
      <div className={s.buttonwrap}>
        <button onClick={startGameHandle}>START GAME</button>
      </div>

      <div className={s.flex}>
        {Object.entries(pokemons).map(
          ([key, { id, name, img, type, values, active, selected }]) => {
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
                selected={true}
                onClick={pokemonCardOnClickHandle}
                className={s.card}
              />
            );
          }
        )}
      </div>
    </Layout>
  );
};

export default StartPage;
