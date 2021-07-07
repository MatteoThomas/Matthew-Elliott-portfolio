import React from "react";
import "../../styles/Components.css";

export default function Fun() {
  // All functional components must have a return method that contains JSX.
  // We return all the JSX inside a parent element with a className of "container".
  return (
    <div className="fun">
      <h1>Fun projects and experiments</h1>
      <p>Drum Pads</p>
    </div>
  );
}
