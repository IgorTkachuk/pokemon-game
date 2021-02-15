import { useState } from "react";
import PokemonCard from "../../../../../../components/PokemonCard/index";
import cn from "classnames";
import s from "./style.module.css";

const PlayerBoard = ({ player, cards, onClickCard }) => {
  const [isSelected, setSelected] = useState(null);

  return (
    <div>
      {cards.map((item) => {
        const { id, name, img, type, values, active } = item;
        return (
          <div
            className={cn(s.cardBoard, { [s.selected]: isSelected === id })}
            onClick={() => {
              setSelected(id);
              onClickCard &&
                onClickCard({
                  player,
                  ...item,
                });
            }}
          >
            <PokemonCard
              key={id}
              name={name}
              img={img}
              id={id}
              type={type}
              values={values}
              minimaze
              isActive
            />
          </div>
        );
      })}
    </div>
  );
};

export default PlayerBoard;
