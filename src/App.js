import { useCallback, useState } from "react";
import "./App.css";
import HeaderComponent from "./components/HeaderComponent";
import UploadBookScreen from "./screens/UploadBookScreen";
import BookInfoScreen from "./screens/BookInfoScreen";

function App() {
  const [screen, setScreen] = useState("Upload");

  const screenChangeHandler = useCallback((newScreen) => {
    setScreen(newScreen);
  }, []);

  let currentScreenComponent = null;

  switch (screen) {
    case "Home":
      currentScreenComponent = <BookInfoScreen />;
      break;

    case "Upload":
      currentScreenComponent = <UploadBookScreen />;
      break;
    default:
  }

  return (
    <div className="App">
      <HeaderComponent
        currentScreen={screen}
        onScreenChange={screenChangeHandler}
      />
      {currentScreenComponent}
    </div>
  );
}

export default App;
