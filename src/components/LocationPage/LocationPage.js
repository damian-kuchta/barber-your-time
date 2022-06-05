import classes from "./LocationPage.module.css";
import Container from "../UI/Container/Container";
import Header from "../Header/Header";
import Footer from "../Layout/Footer/Footer";
import MapBox from "./MapBox/MapBox";

const LocationPage = (props) => {
  return (
    <section id={props.id} className={classes.services}>
      <Container extClasses>
        <Header title="Tu nas znajdziesz" />
        <div className={classes['maps-box']}>
          <MapBox location="Białołęka">
            <iframe
              title="bialoleka"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2439.331108614811!2d20.991584267465203!3d52.309994017725764!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xcdcf75121a24a918!2zQmFyYmVyIFlvdXIgVGltZSBCaWHFgm_FgsSZa2E!5e0!3m2!1spl!2spl!4v1654375293146!5m2!1spl!2spl"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </MapBox>
          <MapBox location="Praga Południe">
            <iframe
              title="praga"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2443.6405413167954!2d21.1107276413557!3d52.23174818962029!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x3d61268268d3710a!2sBarber%20Your%20Time%20Praga%20Po%C5%82udnie!5e0!3m2!1spl!2spl!4v1654376468678!5m2!1spl!2spl"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </MapBox>
        </div>
        <Footer />
      </Container>
    </section>
  );
};

export default LocationPage;
