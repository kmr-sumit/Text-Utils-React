import React, { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); //checks whether dark mode is enabled or not.
  const [alert, setAlert] = useState(null);
  function showAlert(message, type) {
    setAlert({
      msg: message,
      type: type, // the the right type is  the  type passeed in the function.
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  function toggleMode() {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "Success");
      document.title = "TextUtils - Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "Success");
      document.title = "TextUtils - Light Mode";
    }
  }
  return (
    <>
      {/* <Router> */}
      <Navbar
                title="Text-Utils"
                homeText="Home"
                aboutText="About"
                modePassed={mode}
                changeMode={toggleMode}
              />
        <Alert alert={alert} />
        <div className="container" my-3>
          {/* <Switch> */}
            
            {/* <Route exact path="/about">
              <About />
            </Route> */}
            {/* <Route exact path="/"> */}
              <TextForm
                heading="Enter the text to analyze below"
                modePassed={mode}
                showAlert={showAlert}
              />
            {/* </Route>
          </Switch> */}
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
