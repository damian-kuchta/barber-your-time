import HamburgerButton from "./MobileMenu/HamburgerButton/HamburgerButton";
import classes from "./Navbar.module.css";
import DefaultMenu from "./DefaultMenu/DefaultMenu";
import MobileMenu from "./MobileMenu/MobileMenu";
import { useState } from "react";

const Navbar = (props) => {
  const [showMobileMenu, setMobileMenu] = useState(false);
  const showMobileMenuHandler = () => {
    setMobileMenu((prev) => !prev);
  };
  return (
    <nav>
      <div className={classes.container}>
        <DefaultMenu />
        <HamburgerButton onClick={showMobileMenuHandler} />
        <MobileMenu isActive={showMobileMenu} />
      </div>
    </nav>
  );
};

export default Navbar;
