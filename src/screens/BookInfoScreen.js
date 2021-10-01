import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import BookInfoComponent from "../components/BookInfoComponent";
import classes from "./BookInfoScreen.module.css";
import useHttpHook from "../hooks/useHttpHook";
import NotificationComponent from "../components/NotificationComponent";
import { CSSTransition } from "react-transition-group";
import style from "./Transition.module.css";
import DataLoadingFallBackComponent from "../components/DataLoadingFallBackComponent";

const BookInfoScreen = () => {
  const [books, setBooks] = useState([]);

  const [isNotificationVisble, setNotificationVisble] = useState(true);
  const notificationCancelHandler = useCallback(() => {
    setNotificationVisble(false);
  }, []);

  const requestHeaders = useRef({}).current;
  const fetchBooksCompleteHandler = useCallback((data) => {
    setBooks([...data]);
  }, []);
  const [isLoading, hasError, execute] = useHttpHook(
    "http://localhost:8080/books",
    "GET",
    requestHeaders,
    "json",
    fetchBooksCompleteHandler
  );
  useEffect(() => {
    console.log("fetching data");
    execute(null);
  }, [execute]);

  let targetComponent = useMemo(() => {
    const loadingComponentList = [];
    for (let i = 0; i < 8; i++) {
      loadingComponentList.push(
        <DataLoadingFallBackComponent
          width="20%"
          height="50%"
          key={"item-" + i}
        />
      );
    }
    return loadingComponentList;
  }, []);

  if (!isLoading && !hasError) {
    targetComponent = (
      <>
        {books.map((book) => {
          console.dir(book);
          return (
            <BookInfoComponent
              width="20%"
              height="50%"
              title={book.title}
              pages={book.pages}
              price={book.price}
              coverPhotoUrl={book.coverPhotoName}
              key={book.id}
            />
          );
        })}
      </>
    );
  }

  if (hasError && !isLoading) {
    targetComponent = null;
  }

  return (
    <div className={classes["screen"]}>
      <CSSTransition
        in={isNotificationVisble && hasError && !isLoading}
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
      {targetComponent}
    </div>
  );
};

export default BookInfoScreen;
