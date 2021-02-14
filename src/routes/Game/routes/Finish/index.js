import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { PokemonContext } from "../../../../context/pokemonContext";
import Layout from "../../../../components/Layout";

import PokemonCard from "../../../../components/PokemonCard";
import s from "./style.module.css";

const FinishPage = () => {
  const history = useHistory();
  const gameResult = useContext(PokemonContext).gameResult;

  return (
    <Layout
      id='1'
      colorBg='#181e2ba1'
      title='Layout first title with colorBg'
      descr='Layout first descr with colorBg'
    >
      <div className={s.player1}>
        {gameResult.player1.map((item) => (
          <PokemonCard {...item} minimaze isActive />
        ))}
      </div>
      <div>
        <button onClick={() => history.replace("/")}>END GAME</button>
      </div>
      <div className={s.player2}>
        {gameResult.player2.map((item) => (
          <PokemonCard {...item} minimaze isActive />
        ))}
      </div>
    </Layout>
  );
};

export default FinishPage;
