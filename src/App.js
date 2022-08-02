import logo from "./logo.svg";
import "./App.css";
import { InputText } from "./Components/InputText";
import About from "./Components/About";
import { NavBar } from "./Components/NavBar";
import React, { useState } from "react";
import { Alert } from "./Components/Alert";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import { TextForm } from './TextForm';
function App() {
  const [mode, setMode] = useState("light");
  const [alertText, setalertText] = useState(null);
  const showAlert = (message, type) => {
    setalertText({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setalertText(null);
    }, 1500);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      console.log("In Toggle Mode");
      document.body.style.background = "#17253a";
      showAlert("Dark Mode Enabled", "success");
      document.title = "TextUtils - Dark Mode";
    } else {
      setMode("light");
      document.body.style.background = "white";
      showAlert("Light Mode Enabled", "success");
      document.title = "TextUtils - Light Mode";
    }
  };

  return (
    <>
      {/* <NavBar title={3} aboutText={6}/>    */}

      {/* <About /> */}
      <BrowserRouter>
      <NavBar mode={mode} toggleMode={toggleMode} />
      <Alert alert={alertText} />
      <Routes>
        <Route exact path="/" element={<InputText showAlert={showAlert} heading="Enter the text below" mode={mode} alert={alertText}/>}/>
          
          <Route exact path="/about" element={<About/>} />
          {/* <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
       
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
