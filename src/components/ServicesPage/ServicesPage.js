import classes from "./ServicesPage.module.css";
import Container from "../UI/Container/Container";
import Header from "../Header/Header";
import PriceList from "./PriceList/PriceList";
import SlideDownIcon from "../UI/SlideDownIcon/SlideDownIcon";

const Services = (props) => {
  return (
    <section id={props.id} className={classes.services}>
      <Container borders={true}>
        <Header title="Usługi" />
        <div className={classes["price-list-wrapper"]}>
          <PriceList
            title="Włosy"
            prices={[
              ["Strzyżenie włosów + stylizacja", "70 zł"],
              ["Strzyżenie maszynką - jedna długość", "30 zł"],
              ["Odświeżeanie fade - same boki", "50 zł"],
              ["Ojciec i syn - strzyżenie włosów", "120 zł"],
              ["Dziecko 5-12 lat", "50 zł"],
            ]}
          />
          <PriceList
            title="Broda"
            prices={[["Strzyżenie brody + stylizacja", "60 zł"]]}
          />
          <PriceList
            title="Combo"
            prices={[
              ["Combo - strzyżenie włosów + trymowanie brody", "110 zł"],
              ["Combo Królewskie - brzytwa + gorące ręczniki", "130 zł"],
            ]}
          />
        </div>
        <SlideDownIcon/>
      </Container>
    </section>
  );
};

export default Services;
