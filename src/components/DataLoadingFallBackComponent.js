import classes from "./DataLoadingFallBackComponent.module.css";

const DataLoadingFallBackComponent = ({ width, height }) => {
  return (
    <div
      className={classes["card-container"]}
      style={{ width: width, height: height }}
    >
      <div
        className={`${classes["card-img-fallback"]} ${classes["animate"]}`}
      ></div>
      <div className={classes["card-info"]}>
        <div
          className={`${classes["card-title-fallback"]} ${classes["animate"]}`}
        ></div>
        <div className={classes["card-title-meta"]}>
          <div
            className={`${classes["card-pageno-fallback"]} ${classes["animate"]}`}
          ></div>
          <div
            className={`${classes["card-price-fallback"]} ${classes["animate"]}`}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default DataLoadingFallBackComponent;
