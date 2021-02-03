import cn from "classnames";
import s from "./style.module.css";

const NavBar = ({ isMenuButtonActive, onMenuButtonClick }) => {
  return (
    <nav id={s.navbar}>
      <div className={s.navWrapper}>
        <p className={s.brand}>LOGO</p>
        <a
          className={cn(s.menuButton, { [s.active]: isMenuButtonActive })}
          onClick={(e) => onMenuButtonClick(e)}
        >
          <span />
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
