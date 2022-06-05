import classes from './Container.module.css';

const Container = (props) => {
    const bordersClass = props.extClasses ? `${classes.container} ${classes.extClasses}` : `${classes.container}`;
    const flexStart = props.flexStart ?`${classes.container} ${classes.flexStart}` :`${classes.container}` 
    return ( 
        <div className={`${props.flexStart}` ? `${flexStart}` : `${bordersClass}`}>
            {props.children}
        </div>
     );
}
 
export default Container;