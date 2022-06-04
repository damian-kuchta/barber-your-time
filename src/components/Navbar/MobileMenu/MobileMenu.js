import classes from "./MobileMenu.module.css";

const MobileMenu = (props) => {
  let classesMobile = props.isActive
    ? `${classes["mobile-menu"]} ${classes.active}`
    : classes["mobile-menu"];

  return (
    <ul className={classesMobile}>
      <li>
        <a href="#">Usługi</a>
      </li>
      <li>
        <a href="#">Zdjęcia</a>
      </li>
      <li>
        <a href="#">Nasze Salony</a>
      </li>
      <li>
        <a href="#">Dojazd</a>
      </li>
    </ul>
  );
};

export default MobileMenu;
