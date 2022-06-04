import classes from './Container.module.css'

const Container = (props) => {
    const bordersClass = props.borders ? `${classes.container} ${classes.borders}` : `${classes.container}`;
    return ( 
        <div className={bordersClass}>
            {props.children}
        </div>
     );
}
 
export default Container;