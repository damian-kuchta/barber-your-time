import classes from "./MainPage.module.css";
import Container from "../UI/Container/Container";
import Header from "./Header/Header";
import HeaderInfo from "./HeaderInfo/HeaderInfo";
import BookingPanel from "./BookingPanel/BookingPanel";
import { Navbar } from "responsive-navbar-react";
import "./index.css";

const MainPage = () => {
  const props = {
    items: [
      {
        text: "USŁUGI",
        link: "#services",
      },
      {
        text: "ZDJĘCIA",
        link: "#gallery",
      },
      {
        text: "NASZE SALONY",
        link: "#contact",
      },
      {
        text: "DOJAZD",
        link: "#location",
      },
    ],
    logo: {
      text: "",
    },
    style: {
      linkStyles: {
          textAlign: 'center',
          fontFamily: 'Ezar',
          fontSize: '25px',
          color: '#fff',
      },
      barStyles: {
        // maxWidth: '1400px',
        margin: '0 auto',
        background: "#000",
      },
      sidebarStyles: {
        background: "#111",
        buttonColor: "white",
      },
    },
  };
  return (
    <section className={classes["main-page"]}>
      <Navbar {...props} />
      <Container flexStart>
        <Header />
        <HeaderInfo />
        <BookingPanel />
      </Container>
    </section>
  );
};
export default MainPage;
