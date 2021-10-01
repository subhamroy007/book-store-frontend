import { useCallback, useRef, useState } from "react";

const checkValidated = (file, constraint) => {
  if (!constraint) {
    return true;
  }

  if (constraint?.minSize && constraint.minSize > file.size) {
    return false;
  }

  if (constraint?.maxSize && constraint.maxSize < file.size) {
    return false;
  }

  return true;
};

const useFileInputHook = (constraint) => {
  const fileSelectorRef = useRef();
  const [url, setUrl] = useState(null);
  const file = useRef(null);
  const [isValidated, setValidated] = useState(false);

  const fileSelectorHandler = useCallback(() => {
    fileSelectorRef.current.click();
  }, []);

  const fileUploadHandler = useCallback(() => {
    const selectedFile = fileSelectorRef.current.files[0];
    if (checkValidated(selectedFile, constraint)) {
      const imageUrl = URL.createObjectURL(selectedFile);
      setUrl(imageUrl);
      setValidated(true);
      file.current = selectedFile;
    } else {
      setValidated(false);
      setUrl(null);
    }
  }, [constraint]);

  const fileRemoveHandler = useCallback(() => {
    URL.revokeObjectURL(url);
    setUrl(null);
  }, [url]);

  return [
    fileSelectorRef,
    url,
    fileSelectorHandler,
    fileUploadHandler,
    fileRemoveHandler,
    isValidated,
    file,
  ];
};

export default useFileInputHook;
