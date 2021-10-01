import classes from "./InputComponent.module.css";
import { MdCancel } from "react-icons/md";
import { FaFileUpload } from "react-icons/fa";
import React from "react";

const FileInputComponent = React.forwardRef(
  (
    {
      url,
      fileSelectorHandler,
      fileUploadHandler,
      fileRemoveHandler,
      isValidated,
    },
    ref
  ) => {
    return (
      <div className={classes["file-container"]}>
        <div className={classes["file-wrapper"]}>
          {url && (
            <>
              <img alt="preview" src={url} />
              <MdCancel
                color="white"
                className={classes["cancel-button"]}
                onClick={fileRemoveHandler}
                cursor="pointer"
              />
            </>
          )}
          {!url && (
            <>
              <FaFileUpload
                fontSize={48}
                onClick={fileSelectorHandler}
                cursor="pointer"
              />
              <input
                type="file"
                ref={ref}
                onChange={fileUploadHandler}
                accept="image/*"
              />
            </>
          )}
        </div>
      </div>
    );
  }
);

export default FileInputComponent;
