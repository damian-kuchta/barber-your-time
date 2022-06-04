import classes from "./GalleryPage.module.css";
import Container from "../UI/Container/Container";
import Header from "../Header/Header";
import Gallery from "./Gallery/Gallery";
import SlideDownIcon from "../UI/SlideDownIcon/SlideDownIcon";
const Services = (props) => {
  return (
    <section id={props.id} className={classes.services}>
      <Container borders={true}>
        <Header title="Zdjęcia po" />
        <SlideDownIcon />
      </Container>
    </section>
  );
};

export default Services;
