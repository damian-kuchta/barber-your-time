import logoFullName from '../../../assets/logo-fullname.png';
import classes from './Header.module.css';

const Header = (props) => {
    return ( 
        <header className={classes.header}>
            <h1><img src={logoFullName}/></h1>
        </header>
     );
}
 
export default Header;