import classes from "./CustomButton.module.css";

const CustomButton = (props) => {
  const { title, ...restProps } = props;

  return (
    <button className={classes["button"]} {...restProps}>
      {title}
    </button>
  );
};

export default CustomButton;
