import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "./HeaderInfo.module.css";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const HeaderInfo = (props) => {
  return (
    <div className={classes["header-info"]}>
      <article>
        <div className={classes["single-header-info"]}>
          <FontAwesomeIcon className={classes.icon} icon={faCheck} />
          <p>Loftowe wnętrze</p>
        </div>
        <div className={classes["single-header-info"]}>
          <FontAwesomeIcon className={classes.icon} icon={faCheck} />
          <div className={classes["text-info-wrap"]}>
            <p>Poczęstunek, whisky</p>
            <p>oraz inne napoje</p>
          </div>
        </div>

        <div className={classes["single-header-info"]}>
          <FontAwesomeIcon className={classes.icon} icon={faCheck} />
          <p>najlepsi barberzy</p>
        </div>
      </article>
    </div>
  );
};

export default HeaderInfo;
