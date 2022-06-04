import classes from "./PriceList.module.css";

const PriceList = (props) => {
  const liItems = props.prices.map((item, idx) => {
    return (
      <li key={idx}>
        <span>{item[0]}</span>
        <span>{item[1]}</span>
      </li>
    );
  });
  return (
    <div className={classes.prices}>
      <p className={classes["prices-title"]}>{props.title}</p>
      <ul className={classes["prices-list"]}>{liItems}</ul>
    </div>
  );
};

export default PriceList;
