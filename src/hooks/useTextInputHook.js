import { useCallback, useState } from "react";

const checkVaidation = (data, constraint) => {
  if (!constraint) {
    return true;
  }

  if (constraint?.minLength && data.length < constraint?.minLength) {
    return false;
  }

  if (constraint?.maxLength && data.length > constraint?.maxLength) {
    return false;
  }

  if (constraint?.length && data.length !== constraint?.length) {
    return false;
  }
  return true;
};

const useTextInputHook = (constraint) => {
  const [content, setContent] = useState("");
  const [isValidated, setValidated] = useState(false);

  const contentChangeHandler = useCallback(
    (event) => {
      const data = event.target.value;
      if (checkVaidation(data, constraint)) {
        setValidated(true);
      } else {
        setValidated(false);
      }
      setContent(data);
    },
    [constraint]
  );

  return [content, isValidated, contentChangeHandler];
};

export default useTextInputHook;
