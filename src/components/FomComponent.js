import classes from "./FormComponent.module.css";

const FormComponent = ({ children, onSubmit }) => {
  return (
    <form className={classes["form"]} onSubmit={onSubmit}>
      {children}
    </form>
  );
};

export default FormComponent;
