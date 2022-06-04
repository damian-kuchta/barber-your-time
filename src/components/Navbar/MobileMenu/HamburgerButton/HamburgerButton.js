import classes from './HamburgerButton.module.css'

const HamburgerButton = (props) => {
  return (
    <button onClick={props.onClick} className={classes.hamburger}>
      <span />
      <span />
      <span />
    </button>
  );
};

export default HamburgerButton;
