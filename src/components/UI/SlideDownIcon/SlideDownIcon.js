import classes from './SlideDownIcon.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleDown } from "@fortawesome/free-solid-svg-icons";

const SlideDownIcon = (props) => {
    
    return ( 
      <a href={props.href}>
        <FontAwesomeIcon
        icon={faArrowCircleDown}
        size="3x"
        className={`${props.removeMargin} ? ${classes.icon} ${classes.removeMargin} : ${classes.icon} `}
        />
        </a>
     );
}
 
export default SlideDownIcon;