import classes from "./DefaultMenu.module.css";

const DefaultMenu = (props) => {
  return (
    <ul className={classes.menu}>
      <li>
        <a href="#services">Usługi</a>
      </li>
      <li>
        <a href="#gallery">Zdjęcia</a>
      </li>
      <li>
        <a href="#contact">Nasze Salony</a>
      </li>
      <li>
        <a href="#location">Dojazd</a>
      </li>
    </ul>
  );
};

export default DefaultMenu;
