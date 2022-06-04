import classes from './SlideDownIcon.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleDown } from "@fortawesome/free-solid-svg-icons";

const SlideDownIcon = (props) => {
    return ( 
        <FontAwesomeIcon
        icon={faArrowCircleDown}
        size="3x"
        className={classes.icon}
      />
     );
}
 
export default SlideDownIcon;