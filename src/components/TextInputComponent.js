import classes from "./InputComponent.module.css";

const TextInputComponent = ({
  label,
  placeholder,
  value,
  isValidated,
  onChange,
}) => {
  const inputClassName = isValidated ? "" : "error";

  return (
    <div className={classes["input-container"]}>
      <label>{label}</label>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={classes[inputClassName]}
      />
    </div>
  );
};

export default TextInputComponent;
