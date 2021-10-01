import { CSSTransition } from "react-transition-group";
import classes from "./Card.module.css";

const Card2 = (props) => {
  return (
    <CSSTransition
      timeout={400}
      classNames={{
        enter: classes["my-card-container-enter"],
        enterActive: classes["my-card-container-enter-active"],
        enterDone: classes["my-card-container-enter-done"],
        exit: classes["my-card-container-exit"],
        exitActive: classes["my-card-container-exit-active"],
        exitDone: classes["my-card-container-exit-done"],
      }}
      in={props.visible}
      unmountOnExit
      mountOnEnter
    >
      <div className={classes["card2"]}>
        this is a custom card which has animation in it
      </div>
    </CSSTransition>
  );
};

export default Card2;
