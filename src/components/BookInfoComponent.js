import classes from "./BookInfoComponent.module.css";

const BookInfoComponent = ({
  width,
  height,
  title,
  pages,
  price,
  coverPhotoUrl,
}) => {
  return (
    <div
      className={classes["card-container"]}
      style={{ width: width, height: height }}
    >
      <div className={classes["card-img-fallback"]}>
        <img alt="" src={coverPhotoUrl} />
      </div>
      <div className={classes["card-info"]}>
        <div className={classes["card-title-fallback"]}>{title}</div>
        <div className={classes["card-title-meta"]}>
          <div className={classes["card-pageno-fallback"]}>pages({pages})</div>
          <div className={classes["card-price-fallback"]}>price({price})</div>
        </div>
      </div>
    </div>
  );
};

export default BookInfoComponent;
