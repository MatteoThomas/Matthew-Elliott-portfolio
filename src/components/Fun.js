import React from "react";
import "../styles/Fun.css";

export default function Fun() {
  // All functional components must have a return method that contains JSX.
  // We return all the JSX inside a parent element with a className of "container".
  return (
    <fun className="fun">
      <h1>Fun projects and experiments</h1>
      <p>Fun Javascript stuff</p>
      <ul className="fun">
        <li>Drum kit</li>
        <li>Oscillascope</li>
        <li>Platform game</li>
      </ul>
    </fun>
  );
}
