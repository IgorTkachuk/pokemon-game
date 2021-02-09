import { useContext } from "react";
import PokemonCard from "../../../../components/PokemonCard";
import { PokemonContext } from "../../../../context/pokemonContext";
import s from "./style.module.css";

const BoardPage = () => {
  const pCnxt = useContext(PokemonContext);
  return (
    <div className={s.root}>
      <div className={s.playerOne}></div>
      <div className={s.board}>
        {
          /* <div className={s.boardPlate}>1</div>
        <div className={s.boardPlate}>2</div>
        <div className={s.boardPlate}>3</div>
        <div className={s.boardPlate}>4</div>
        <div className={s.boardPlate}>5</div>
        <div className={s.boardPlate}>6</div>
        <div className={s.boardPlate}>7</div>
        <div className={s.boardPlate}>8</div>
        <div className={s.boardPlate}>9</div> */

          pCnxt.selectedPokemons.map(
            ({ id, name, img, type, values, active }) => {
              return (
                <div className={s.boardPlate}>
                  <PokemonCard
                    key={id}
                    name={name}
                    img={img}
                    id={id}
                    type={type}
                    values={values}
                    isActive={active}
                  />
                </div>
              );
            }
          )
        }
      </div>
    </div>
  );
};

export default BoardPage;