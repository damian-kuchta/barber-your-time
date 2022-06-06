import classes from "./GalleryPage.module.css";
import Container from "../UI/Container/Container";
import Header from "../Header/Header";
import GalleryContainer from "./GalleryContainer/GalleryContainer";
import SlideDownIcon from "../UI/SlideDownIcon/SlideDownIcon";
const Services = (props) => {
  return (
    <section id={props.id} className={classes.services}>
      <Container borders={true}>
        <Header title="Galeria" />
        <GalleryContainer/>
        <SlideDownIcon href='#contact' />
      </Container>
    </section>
  );
};

export default Services;
