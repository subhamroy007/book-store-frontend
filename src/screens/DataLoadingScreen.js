import { useMemo } from "react";
import classes from "./DataLoadingScreen.module.css";
import DataLoadingFallBackComponent from "../components/DataLoadingFallBackComponent";
const DataLoadingScreen = ({ noOfItems }) => {
  const fallbackContent = useMemo(() => {
    const loadingComponentList = [];
    for (let i = 0; i < noOfItems; i++) {
      loadingComponentList.push(
        <DataLoadingFallBackComponent
          width="20%"
          height="50%"
          key={"item-" + i}
        />
      );
    }
    return loadingComponentList;
  }, [noOfItems]);

  return <div className={classes["screen"]}>{fallbackContent}</div>;
};

export default DataLoadingScreen;
