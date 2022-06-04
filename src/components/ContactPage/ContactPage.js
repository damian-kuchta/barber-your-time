import classes from './ContactPage.module.css';
import Container from '../UI/Container/Container';
const Services = (props) => {
  return (
    <section id={props.id} className={classes.services}>
      <Container borders={true}></Container>
    </section>
  );
};

export default Services;
