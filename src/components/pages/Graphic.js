import React from "react";
import "../../styles/Components.css";

function Graphic() {
  // All functional components must have a return method that contains JSX.
  // We return all the JSX inside a parent element with a className of "container".
  return (
    <div className="graphic">
      <h1>Graphic Design</h1>
      <p>My graphic design portfolio</p>
    </div>
  );
}

export default Graphic;
