import { useCallback } from "react";
import classes from "./HeaderComponent.module.css";

const NavComponent = ({ title, onClick }) => {
  const clickHandler = useCallback(
    (event) => {
      onClick(title);
    },
    [onClick, title]
  );

  return (
    <div className={classes["nav"]} onClick={clickHandler}>
      {title}
    </div>
  );
};

export default NavComponent;
