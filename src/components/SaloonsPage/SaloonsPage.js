import classes from "./SaloonsPage.module.css";
import Container from "../UI/Container/Container";
import Header from "../Header/Header";
import SingleSaloon from "./SingleSaloon/SingleSaloon";
import SlideDownIcon from "../UI/SlideDownIcon/SlideDownIcon";
const Services = (props) => {
  return (
    <section id={props.id} className={classes.services}>
      <Container>
        <Header title="Nasze salony" />
        <div className={classes.saloons}>
          <SingleSaloon
            href='https://booksy.com/pl-pl/115799_barber-your-time-bialoleka_barber-shop_3_warszawa'
            location="Białołęka"
            number="570 790 317"
            address="ul. Płochocińska 18A, Warszawa"
          />
          <SingleSaloon
            href='https://booksy.com/pl-pl/130247_barber-your-time-praga-poludnie_barber-shop_3_warszawa'
            location="Praga Południe"
            number="518 331 221"
            address="ul. Ostrobramska 73E, Warszawa"
          />
        </div>
        <div>
          <SlideDownIcon />
        </div>
      </Container>
    </section>
  );
};

export default Services;
