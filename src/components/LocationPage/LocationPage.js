import classes from './LocationPage.module.css';
import Container from '../UI/Container/Container';
const LocationPage = (props) => {
  return (
    <section id={props.id} className={classes.services}>
      <Container borders={true}></Container>
    </section>
  );
};

export default LocationPage;
