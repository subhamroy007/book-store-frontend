import { useCallback, useRef, useState } from "react";
import FormComponent from "../components/FomComponent";
import classes from "./UploadBookScreen.module.css";
import useTextInputHook from "../hooks/useTextInputHook";
import useFileInputHook from "../hooks/useFileInputHook";
import FileInputComponent from "../components/FileInputComponent";
import TextInputComponent from "../components/TextInputComponent";
import ButtonComponent from "../components/ButtonComponent";
import style from "./Transition.module.css";
import useHttpHook from "../hooks/useHttpHook";
import NotificationComponent from "../components/NotificationComponent";
import { CSSTransition } from "react-transition-group";

const UploadBookScreen = () => {
  const [title, isTitleValidated, titleChangeHandler] = useTextInputHook({
    minLength: 5,
    maxLength: 40,
  });
  const [price, isPriceValidated, priceChangeHandler] = useTextInputHook({
    minLength: 3,
    maxLength: 4,
  });
  const [page, isPageValidated, pageChangeHandler] = useTextInputHook({
    minLength: 2,
    maxLength: 4,
  });

  const [isNotificationVisble, setNotificationVisble] = useState(true);
  const notificationCancelHandler = useCallback(() => {
    setNotificationVisble(false);
  }, []);
  const requestHeaders = useRef({}).current;
  const [isLoading, hasError, execute] = useHttpHook(
    "http://localhost:8080/books",
    "POST",
    requestHeaders,
    null,
    null
  );

  const [
    fileSelectorRef,
    url,
    fileSelectorHandler,
    fileUploadHandler,
    fileRemoveHandler,
    isFileValidated,
    file,
  ] = useFileInputHook({ minSize: 10000, maxSize: 10000000 });

  const movieUploadHandler = useCallback(
    (event) => {
      event.preventDefault();
      setNotificationVisble(true);
      if (
        isFileValidated &&
        isPageValidated &&
        isPriceValidated &&
        isTitleValidated
      ) {
        const movieUploadData = new FormData();
        movieUploadData.append("title", title);
        movieUploadData.append("pages", page);
        movieUploadData.append("price", price);
        movieUploadData.append("coverPhoto", file.current);
        execute(movieUploadData);
      } else {
        console.log("invalid");
      }
    },
    [
      title,
      page,
      price,
      isFileValidated,
      isPageValidated,
      isPriceValidated,
      isTitleValidated,
      file,
      execute,
    ]
  );

  return (
    <div className={classes["screen"]}>
      <CSSTransition
        in={!isLoading && !hasError && isNotificationVisble}
        timeout={400}
        classNames={{
          enter: style["notify-enter"],
          enterActive: style["notify-enter-active"],
          enterDone: style["notify-enter-done"],
          exit: style["notify-exit"],
          exitActive: style["notify-exit-active"],
          exitDone: style["notify-exit-done"],
        }}
        unmountOnExit={true}
        mountOnEnter={true}
      >
        <NotificationComponent
          msg="successfully uploaded movie"
          type="info"
          onCancel={notificationCancelHandler}
        />
      </CSSTransition>
      <CSSTransition
        in={!isLoading && hasError && isNotificationVisble}
        timeout={400}
        classNames={{
          enter: style["notify-enter"],
          enterActive: style["notify-enter-active"],
          enterDone: style["notify-enter-done"],
          exit: style["notify-exit"],
          exitActive: style["notify-exit-active"],
          exitDone: style["notify-exit-done"],
        }}
        unmountOnExit={true}
        mountOnEnter={true}
      >
        <NotificationComponent
          msg="unsuccessfull request"
          type="error"
          onCancel={notificationCancelHandler}
        />
      </CSSTransition>
      <FormComponent onSubmit={movieUploadHandler}>
        <TextInputComponent
          label="Enter Book Title"
          placeholder="Title..."
          value={title}
          isValidated={isTitleValidated}
          onChange={titleChangeHandler}
        />
        <div className={classes["input-wrapper"]}>
          <TextInputComponent
            label="Enter Book Price"
            placeholder="Price..."
            value={price}
            isValidated={isPriceValidated}
            onChange={priceChangeHandler}
          />
          <TextInputComponent
            label="Enter Book pages"
            placeholder="Pages..."
            value={page}
            isValidated={isPageValidated}
            onChange={pageChangeHandler}
          />
        </div>
        <FileInputComponent
          fileRemoveHandler={fileRemoveHandler}
          fileSelectorHandler={fileSelectorHandler}
          fileUploadHandler={fileUploadHandler}
          isValidated={isFileValidated}
          url={url}
          ref={fileSelectorRef}
        />
        <ButtonComponent label="UPLOAD" />
      </FormComponent>
    </div>
  );
};

export default UploadBookScreen;
