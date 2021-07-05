import React from "react";

export default function Fun() {
  // All functional components must have a return method that contains JSX.
  // We return all the JSX inside a parent element with a className of "container".
  return (
    <div className="container">
      <h1>Fun projects and experiments</h1>
      <p>Fun stuff</p>
      <ul className="parent">
        <li>Drum kit</li>
        <li>Oscillascope</li>
        <li>Platform game</li>
      </ul>
    </div>
  );
}
