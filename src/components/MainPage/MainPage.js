import classes from './MainPage.module.css';
import Container from '../UI/Container/Container';
import Navbar from '../Navbar/Navbar';
import Header from './Header/Header';
import HeaderInfo from './HeaderInfo/HeaderInfo';
import BookingPanel from './BookingPanel/BookingPanel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleDown } from '@fortawesome/free-solid-svg-icons';

const MainPage = (props) => {
return ( 
    <section className={classes['main-page']}>
        <Navbar/>
        <Container>
            <Header/>
            <HeaderInfo/>
            <BookingPanel/>
            <FontAwesomeIcon
          icon={faArrowCircleDown}
          size="3x"
          className={classes.icon}
        />
        </Container>
    </section>
 );
}
export default MainPage;
 