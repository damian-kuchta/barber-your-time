import classes from './Header.module.css';

const Header = (props) => {
    return ( 
        <h2 className={classes.header}>{props.title}</h2>
     );
}
 
export default Header;