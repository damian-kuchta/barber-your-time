import classes from "./DefaultMenu.module.css";

const DefaultMenu = (props) => {
  return (
    <ul className={classes.menu}>
      <li>
        <a href="#services">Usługi</a>
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

export default DefaultMenu;
