import classes from "./HeaderInfo.module.css";

const HeaderInfo = (props) => {
  return (
    <div className={classes["header-info"]}>
      <article>
        <p>#Loftowe wnętrze</p>
        <p>#Dobre whisky</p>
        <p>#Najlepsi barberzy</p>
      </article>
    </div>
  );
};

export default HeaderInfo;
