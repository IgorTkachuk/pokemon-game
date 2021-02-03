import "./style.css";

const Menu = ({ isActive }) => {
  return (
    <div className={`menuContainer ${isActive ? "active" : "deactive"}`}>
      <div className='overlay' />
      <div className='menuItems'>
        <ul>
          <li>
            <a href='#welcome'>HOME</a>
          </li>
          <li>
            <a href='#game'>GAME</a>
          </li>
          <li>
            <a href='#about'>ABOUT</a>
          </li>
          <li>
            <a href='#contact'>CONTACT</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
