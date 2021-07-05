import React from "react";

export default function About() {
  // All functional components must have a return method that contains JSX.
  // We return all the JSX inside a parent element with a className of "container".
  return (
    <div className="container">
      <h1>About me</h1>
      <p>
        Currently enrolled in a full-stack web development boot camp at the
        University of Denver
      </p>
      <ul className="parent">
        <li>React</li>
        <li>Javascript</li>
        <li>CSS</li>
        <li>HTML</li>
      </ul>
    </div>
  );
}
