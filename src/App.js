import React from "react";

import "./App.css";

import Webdev from "./components/Webdev";
import Graphic from "./components/Graphic";
import About from "./components/About";
import Fun from "./components/Fun";

function App() {
  return (
    <div>
      <Webdev />
      <Graphic />
      <About />
      <Fun />
    </div>
  );
}

export default App;
