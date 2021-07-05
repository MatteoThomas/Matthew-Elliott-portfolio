import React from "react";

export default function Webdev() {
  // All functional components must have a return method that contains JSX.
  // We return all the JSX inside a parent element with a className of "container".
  return (
    <div className="container">
      <h1>Web Development</h1>
      <p>My projects and current skills</p>
      <ul className="parent">
        <li>React</li>
        <li>Javascript</li>
        <li>CSS</li>
        <li>HTML</li>
      </ul>
    </div>
  );
}
