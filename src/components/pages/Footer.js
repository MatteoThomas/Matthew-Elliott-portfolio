import React from "react";

export default function Footer() {
  // All functional components must have a return method that contains JSX.
  // We return all the JSX inside a parent element with a className of "container".
  return (
    <div className="footer">
      <h1>Footer Section</h1>
      <ul>
        <li>E-Mail</li>
        <li>Github</li>
        <li>Instagram</li>
      </ul>
    </div>
  );
}
