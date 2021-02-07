import { useState } from "react";
import Menu from "../Menu";
import NavBar from "../NavBar";

const MenuHeader = () => {
  const [isMenuActive, setIsMenuActive] = useState(null);

  const handleMenuButtonClick = (e) => {
    setIsMenuActive((prevState) => !prevState);
  };

  return (
    <>
      <NavBar
        isMenuButtonActive={isMenuActive}
        onMenuButtonClick={handleMenuButtonClick}
      />
      <Menu isActive={isMenuActive} onLinkClick={handleMenuButtonClick} />
    </>
  );
};

export default MenuHeader;
