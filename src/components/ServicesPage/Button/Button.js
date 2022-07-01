import classes from "./Button.module.css";


const Button = (props) => {
  return (
    <button id={props.id} onClick={props.onClick} className={classes.btn}>
      {props.text}
    </button>
  );
};

export default Button;
           