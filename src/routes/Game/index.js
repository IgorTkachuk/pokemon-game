import { Switch, Route, useRouteMatch } from "react-router-dom";
import StartPage from "./routes/Start";
import BoardPage from "./routes/Board";
import FinishPage from "./routes/Finish";

import { PokemonContext } from "../../context/pokemonContext";
import { useState } from "react";

const GamePage = () => {
  const match = useRouteMatch();
  const [selectedPokemons, setSelectedPokemons] = useState([]);
  const [gameResult, setGameResult] = useState({});

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
    <PokemonContext.Provider
      value={{
        selectedPokemons,
        selectPokemonHandle,
        gameResult,
        setGameResult,
      }}
    >
      <Switch>
        <Route path={`${match.path}/`} exact component={StartPage} />
        <Route path={`${match.path}/board`} component={BoardPage} />
        <Route path={`${match.path}/finish`} component={FinishPage} />
      </Switch>
    </PokemonContext.Provider>
  );
};

export default GamePage;
