import classes from "./ButtonComponent.module.css";

const ButtonComponent = ({ title, onClick }) => {
  return <input type="submit" className={classes["btn"]} value={title} />;
};

export default ButtonComponent;
