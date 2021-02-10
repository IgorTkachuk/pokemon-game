// import { useState, useEffect } from "react";
// import Layout from "../../components/Layout";
// import PokemonCard from "../../components/PokemonCard";

// import database from "../../service/firebase";

// import s from "./style.module.css";

// const GamePage = () => {
//   const [pokemons, setPokemons] = useState({});

//   useEffect(() => {
//     database.ref("pokemons").once("value", (snapshot) => {
//       setPokemons(snapshot.val());
//     });
//   }, []);

//   const pokemonCardOnClickHandle = (key) => {
//     database
//       .ref("pokemons/" + key)
//       .set({ ...pokemons[key], active: !pokemons[key].active })
//       .then(() => {
//         setPokemons((prevState) => {
//           const newState = { ...prevState };
//           newState[key].active = !prevState[key].active;
//           return newState;
//         });
//       });
//   };

//   const addNewPokemonHandle = () => {
//     const newPokemonObject = {
//       abilities: ["keen-eye", "tangled-feet", "big-pecks"],
//       stats: {
//         hp: 63,
//         attack: 60,
//         defense: 55,
//         "special-attack": 50,
//         "special-defense": 50,
//         speed: 71,
//       },
//       type: "flying",
//       img:
//         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png",
//       name: "pidgeotto",
//       base_experience: 122,
//       height: 11,
//       id: 17,
//       values: {
//         top: "A",
//         right: 2,
//         bottom: 7,
//         left: 5,
//       },
//     };

//     const newPokemonRef = database.ref("pokemons").push();
//     newPokemonRef.set(newPokemonObject).then(() => {
//       setPokemons({ ...pokemons, [newPokemonRef.key]: newPokemonObject });
//     });
//   };

//   return (
//     <Layout
//       id='1'
//       colorBg='#181e2ba1'
//       title='Layout first title with colorBg'
//       descr='Layout first descr with colorBg'
//     >
//       <div className={s.btn}>
//         <button onClick={addNewPokemonHandle}>ADD NEW POKEMON</button>
//       </div>
//       <div className={s.flex}>
//         {Object.entries(pokemons).map(
//           ([key, { id, name, img, type, values, active }]) => {
//             return (
//               <PokemonCard
//                 key={key}
//                 rf={key}
//                 name={name}
//                 img={img}
//                 id={id}
//                 type={type}
//                 values={values}
//                 isActive={active}
//                 onClick={pokemonCardOnClickHandle}
//               />
//             );
//           }
//         )}
//       </div>
//     </Layout>
//   );
// };

// export default GamePage;

import { Switch, Route, useRouteMatch } from "react-router-dom";
import StartPage from "./routes/Start";
import BoardPage from "./routes/Board";
import FinishPage from "./routes/Finish";

import { PokemonContext } from "../../context/pokemonContext";
import { useState } from "react";

const GamePage = () => {
  const match = useRouteMatch();
  const [selectedPokemons, setSelectedPokemons] = useState([]);

  const selectPokemonHandle = (pokemon) => {
    setSelectedPokemons((prevState) => {
      const idx = prevState.findIndex((el) => el.id === pokemon.id);
      if (idx === -1) {
        return [...prevState, pokemon];
      } else {
        return [...prevState.filter((el) => el.id !== pokemon.id)];
      }
    });
  };

  return (
    <PokemonContext.Provider value={{ selectedPokemons, selectPokemonHandle }}>
      <Switch>
        <Route path={`${match.path}/`} exact component={StartPage} />
        <Route path={`${match.path}/board`} component={BoardPage} />
        <Route path={`${match.path}/finish`} component={FinishPage} />
      </Switch>
    </PokemonContext.Provider>
  );
};

export default GamePage;
