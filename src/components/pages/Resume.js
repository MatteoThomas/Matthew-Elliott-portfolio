import React from "react";
import "../../styles/Components.css";
import resume from "../../img/resume.png";

export default function About() {
  // All functional components must have a return method that contains JSX.
  // We return all the JSX inside a parent element with a className of "container".
  return (
    <div className="resume">
      <h1>Resume</h1>
      <ul className="list">
        <li>React</li>
        <li>Javascript</li>
        <li>CSS</li>
        <li>HTML</li>
      </ul>

      <img src={resume} alt="resume" />
    </div>
  );
}
