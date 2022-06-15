import classes from "./SingleSaloon.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faLocation } from "@fortawesome/free-solid-svg-icons";
import PriceList from "../../ServicesPage/PriceList/PriceList";
import Button from "../../UI/Button/Button"

const SingleSaloon = (props) => {
  const prices = props.prices;
  return (
    <div className={classes["saloon-info-wrap"]}>
      <div className={classes["saloon-info"]}>
      <p className={classes["district-name"]}>{props.location}</p>
      <PriceList
          prices={[
            ["Poniedziałek - Piątek", "9:00 - 21:00"],
            ["Sobota", "09:00 - 18:00"],
          ]}
          // title="Godziny pracy"
        />
        <div className={classes.number}>
          <p>
            <FontAwesomeIcon icon={faPhone} />
          </p>
          <p className={classes["number-text"]}>{props.number}</p>
        </div>
        <div className={classes.address}>
          <p>
            <FontAwesomeIcon icon={faLocation} />
          </p>
          <p className={classes["address-text"]}>{props.address}</p>
        </div>
    
        <Button href={props.href} text='Rezerwuj'/>
      </div> 
    </div>
  );
};

export default SingleSaloon;
