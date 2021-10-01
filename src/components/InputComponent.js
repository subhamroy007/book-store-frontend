import TextInputComponent from "./TextInputComponent";
import FileInputComponent from "./FileInputComponent";
import ButtonComponent from "./ButtonComponent";
const InputComponent = ({
  type,
  label,
  placeholder,
  value,
  isValidated,
  onChange,
}) => {
  if (type === "text") {
    return (
      <TextInputComponent
        label={label}
        placeholder={placeholder}
        isValidated={isValidated}
        value={value}
        onChange={onChange}
      />
    );
  } else if (type === "button") {
    return <ButtonComponent title={label} />;
  }

  return <FileInputComponent />;
};

export default InputComponent;
