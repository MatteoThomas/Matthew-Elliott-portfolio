import React from "react";
// import "../styles/Graphic.css";

export default function Graphic() {
  // All functional components must have a return method that contains JSX.
  // We return all the JSX inside a parent element with a className of "container".
  return (
    <graphic className="graphic">
      <h1>Graphic Design</h1>
      <p>My graphic design portfolio</p>
      <ul className="list">
        <li>Photoshop</li>
        <li>Illustrator</li>
        <li>XD</li>
      </ul>
    </graphic>
  );
}
