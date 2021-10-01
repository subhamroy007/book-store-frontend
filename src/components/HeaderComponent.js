import classes from "./HeaderComponent.module.css";
import NavComponent from "./NavComponent";

const HeaderComponent = ({ currentScreen, onScreenChange }) => {
  return (
    <div className={classes["header"]}>
      <NavComponent title="Home" onClick={onScreenChange} />
      <NavComponent title="Upload" onClick={onScreenChange} />
    </div>
  );
};

export default HeaderComponent;
