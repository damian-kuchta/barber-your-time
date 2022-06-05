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
            location="Białołęka"
            number="570 790 317"
            address="ul. Płochocińska 18A, Warszawa"
          />
          <SingleSaloon
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
