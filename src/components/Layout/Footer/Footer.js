import classes from "./Footer.module.css";
import { ReactComponent as FacebookLogo } from "../../../assets/facebook.svg";
import { ReactComponent as InstagramLogo } from "../../../assets/instagram.svg";

const Footer = (props) => {
  return (
    <footer className={classes.footer}>
      <p className={classes["footer-text"]}>Wpadnij też na nasze socjale</p>
      <div className={classes["socials-wrap"]}>
        <a>
          <FacebookLogo width="50px" />
        </a>
        <a>
          <InstagramLogo width="50px" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
