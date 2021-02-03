import { useState } from "react";
import Menu from "../Menu";
import NavBar from "../NavBar";

const MenuHeader = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);

  const handleMenuButtonClick = (e) => {
    e.preventDefault();
    setIsMenuActive((prevState) => !prevState);
  };

  return (
    <>
      <NavBar
        isMenuButtonActive={isMenuActive}
        onMenuButtonClick={handleMenuButtonClick}
      />
      <Menu isActive={isMenuActive} />
    </>
  );
};

export default MenuHeader;
