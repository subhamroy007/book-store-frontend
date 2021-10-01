import classes from "./Card.module.css";
import { Transition } from "react-transition-group";

const Card = (props) => {
  return (
    <Transition
      in={props.visible}
      timeout={500}
      // mountOnEnter={false}
      unmountOnExit
      appear={false}
    >
      {(state) => (
        <div className={`${classes["card"]} ${classes[`card-${state}`]}`}>
          this is a custom card which has animation in it
        </div>
      )}
    </Transition>
  );
};

export default Card;
