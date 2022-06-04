import classes from "./MapBox.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const MapBox = (props) => {
  return (
    <div className={classes["map-box"]}>
      <p className={classes.location}>{props.location}</p>
        <FontAwesomeIcon className={classes['location-icon']} icon={faLocationDot}/>
      <div className={classes["map-wrap"]}>
        <div className={classes.map}>{props.children}</div>
      </div>
    </div>
  );
};

export default MapBox;
