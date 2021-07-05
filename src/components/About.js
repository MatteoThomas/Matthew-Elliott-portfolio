import React from "react";
import "../styles/About.css";

export default function About() {
  // All functional components must have a return method that contains JSX.
  // We return all the JSX inside a parent element with a className of "container".
  return (
    <about className="about">
      <h1>About me</h1>
      <p>
        Currently enrolled in a full-stack web development boot camp at the
        University of Denver
      </p>
      <ul className="about">
        <li>E-Mail</li>
        <li>Github</li>
        <li>Instagram</li>
      </ul>
    </about>
  );
}
