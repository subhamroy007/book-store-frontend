import classes from "./NotificationComponent.module.css";
import { RiErrorWarningFill } from "react-icons/ri";
import { IoIosWarning } from "react-icons/io";
import { MdInfo } from "react-icons/md";
import { MdCancel } from "react-icons/md";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";

const NotificationComponent = React.forwardRef(
  ({ type, msg, onCancel, left }, ref) => {
    useEffect(() => {
      const cancelTimerId = setTimeout(onCancel, 3000);

      return () => clearTimeout(cancelTimerId);
    }, [onCancel]);

    const [leftPosition, setLeftPosition] = useState(0);
    const notificationRef = useRef();

    useLayoutEffect(() => {
      if (!notificationRef.current) return;
      let box = notificationRef.current.getBoundingClientRect();
      const left = document.documentElement.clientWidth / 2 - box.width / 2;
      if (document.documentElement.clientWidth > box.width) {
        setLeftPosition(left);
      }
    }, []);

    let notificationIcon = <MdInfo fontSize={18} fill="green" stroke="green" />;

    if (type === "warn")
      notificationIcon = (
        <IoIosWarning fontSize={18} fill="blue" stroke="blue" />
      );

    if (type === "error")
      notificationIcon = (
        <RiErrorWarningFill fontSize={18} fill="red" stroke="red" />
      );

    return (
      <div
        className={classes["notify"]}
        style={{ left: leftPosition }}
        ref={notificationRef}
      >
        {notificationIcon}
        <div className={classes["title"]}>{msg}</div>
        <MdCancel
          fontSize={18}
          fill="black"
          stroke="black"
          onClick={onCancel}
          cursor="pointer"
        />
      </div>
    );
  }
);

export default NotificationComponent;
