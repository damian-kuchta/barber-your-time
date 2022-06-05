import classes from "./Footer.module.css";
import { ReactComponent as FacebookLogo } from "../../../assets/facebook.svg";
import { ReactComponent as InstagramLogo } from "../../../assets/instagram.svg";

const Footer = (props) => {
  return (
    <footer className={classes.footer}>
      <p className={classes["footer-text"]}>Wpadnij też na:</p>
      <div className={classes["socials-wrap"]}>
        <a href="https://www.facebook.com/barberyourtime">
          <FacebookLogo className={classes.svg} width="50px" />
        </a>
        <a href="https://www.instagram.com/barber_your_time">
          <InstagramLogo className={classes.svg} width="50px" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
