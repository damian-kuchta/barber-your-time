import classes from './MainPage.module.css';
import Container from '../UI/Container/Container';
import Navbar from '../Navbar/Navbar';
import Header from './Header/Header';
import HeaderInfo from './HeaderInfo/HeaderInfo';
import BookingPanel from './BookingPanel/BookingPanel';

const MainPage = (props) => {
return ( 
    <section className={classes['main-page']}>
        <Navbar/>
        <Container flexStart>
            <Header/>
            <HeaderInfo/>
            <BookingPanel/>
  
        </Container>
    </section>
 );
}
export default MainPage;
 