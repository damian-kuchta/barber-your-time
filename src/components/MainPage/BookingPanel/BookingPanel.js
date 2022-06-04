import classes from "./BookingPanel.module.css";
import BookingPanelHeader from "./BookingPanelHeader/BookingPanelHeader";
import Button from "../../UI/Button/Button";
import BookingPanelText from "./BookingPanelText/BookingPanelText";

const BookingPanel = (props) => {
  return (
    <div className={classes.box}>
      <div className={classes["box-inner"]}>
        <BookingPanelHeader />
        <Button text="Zarezerwuj wizytę!" />
        <BookingPanelText />
      </div>
    </div>
  );
};

export default BookingPanel;
