import { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { PokemonContext } from "../../../../context/pokemonContext";
import { FirebaseContext } from "../../../../context/firebaseContext";

import Layout from "../../../../components/Layout";
import PokemonCard from "../../../../components/PokemonCard";

import s from "./style.module.css";

const FinishPage = () => {
  const [wonCard, setWonCard] = useState(null);
  const history = useHistory();
  const pCnxt = useContext(PokemonContext);
  const gameResult = pCnxt.gameResult;
  const [player2Cards, setPlayer2Cards] = useState(gameResult.player2);
  const fbContext = useContext(FirebaseContext);
  const player1Count = gameResult.player1.length;
  const player2Count = gameResult.player2.length;

  const endGameButtonHandler = () => {
    const { setGameResult } = pCnxt;
    setGameResult({});
    wonCard && fbContext.addPokemon(wonCard, () => console.log("Card added"));
    history.replace("/");
  };

  const cardClickHandle = (rf) => {
    if (player1Count <= player2Count) return;

    setPlayer2Cards((prevState) => {
      return [
        ...prevState.map((item) =>
          item.id === rf
            ? { ...item, isSelected: true }
            : { ...item, isSelected: false }
        ),
      ];
    });

    setWonCard(player2Cards.find((item) => item.id === rf));
  };

  if (Object.entries(gameResult).length === 0) {
    history.push("/");
    return null;
  } else {
    return (
      <Layout
        id='1'
        colorBg='#181e2ba1'
        title='Layout first title with colorBg'
        descr='Layout first descr with colorBg'
      >
        <div className={s.player1}>
          {gameResult.player1.map((item) => (
            <PokemonCard {...item} key={item.id} minimaze isActive />
          ))}
        </div>
        <div>
          <button onClick={endGameButtonHandler}>END GAME</button>
        </div>
        <div className={s.player2}>
          {player2Cards.map((item) => (
            <PokemonCard
              {...item}
              key={item.id}
              rf={item.id}
              minimaze
              isActive
              onClick={cardClickHandle}
            />
          ))}
        </div>
      </Layout>
    );
  }
};

export default FinishPage;
