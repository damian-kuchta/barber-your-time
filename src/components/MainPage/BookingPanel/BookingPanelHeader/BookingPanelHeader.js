import classes from './BookingPanelHeader.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

const BookingPanelHeader = (props) => {
    return (
        <div>
            <h3 className={classes.header}>To jak strzyżemy?</h3>
            <FontAwesomeIcon icon={faArrowDown} size='3x' className={classes.icon}/>
        </div> 
     );
}
 
export default BookingPanelHeader;