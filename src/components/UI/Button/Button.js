import classes from "./Button.module.css";
import { ReactComponent as BooksyLogoSvg } from "../../../assets/booksy-logo.svg";

const Button = (props) => {
  return (
    <button className={classes.btn}>
      {props.text}
      <BooksyLogoSvg style={{ height: "18px", fill: "white", display:"block", margin: "0 auto",  }} />
    </button>
  );
};

export default Button;
