import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

function App() {
  const letter = "Hello World";

  return (
    <div className="App">
      <Header title="Hello" age="23" adress="Toshkent" />
      <Main />
    </div>
  );
}

export default App;
