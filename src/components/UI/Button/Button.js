import classes from "./Button.module.css";
import { ReactComponent as BooksyLogoSvg } from "../../../assets/booksy-logo.svg";

const Button = (props) => {
  return (
    <button className={classes.btn}>
      <a href={props.href}>
      {props.text}
      <BooksyLogoSvg style={{ height: "18px", fill: "white", display:"block", margin: "0 auto",  }} />
      </a>
    </button>
  );
};

export default Button;
           