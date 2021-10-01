import { useState } from "react";
import { TransitionGroup } from "react-transition-group";
import Card2 from "./Card2";
import classes from "./Container.module.css";
import CustomButton from "./CustomButton";

const Container = () => {
  const [showCard, setShowCard] = useState(false);

  return (
    <>
      <CustomButton
        title="Add Card"
        onClick={() => {
          // console.log("button clicked");
          setShowCard((status) => !status);
        }}
      />
      <div className={classes["container"]}>
        <Card2 visible={showCard} />
        {/* <TransitionGroup component={null}>
          {showCard && <Card2 key={45} />}
        </TransitionGroup> */}
      </div>
    </>
  );
};

export default Container;
