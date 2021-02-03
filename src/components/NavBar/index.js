import "./style.css";

const NavBar = ({ isMenuButtonActive, onMenuButtonClick }) => {
  return (
    <nav id='navbar'>
      <div className='navWrapper'>
        <p className='brand'>LOGO</p>
        <a
          className={`menuButton ${isMenuButtonActive ? "active" : ""}`}
          onClick={(e) => onMenuButtonClick(e)}
        >
          <span />
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
