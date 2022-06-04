import classes from "./HeaderInfo.module.css";

const HeaderInfo = (props) => {
  return (
    <div className={classes["header-info"]}>
      <article>
        <p>#loftowe wnętrze</p>
        <p>#dobre whisky</p>
        <p>#najlepsi barberzy</p>
      </article>
    </div>
  );
};

export default HeaderInfo;
