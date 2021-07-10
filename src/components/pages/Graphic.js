import React from "react";
import "../../styles/Components.css";

function Graphic() {
  // All functional components must have a return method that contains JSX.
  // We return all the JSX inside a parent element with a className of "container".

  return (
    <div className="graphic">
      <h1>Graphic Design</h1>
      <h2>Photoshop / Illustrator / XD / Blender</h2>
      <p>
        In this example we have added a "plus" sign to each button. When the
        user clicks on the button, the "plus" sign is replaced with a "minus"
        sign.
      </p>

      <button className="accordion">Print</button>
      <div className="panel">
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
    </div>
  );
}

export default Graphic;
