import React from "react";
import "../styles/Components.css";
import resumepdf from "../img/Matthew_Elliott_res.png";
import styled from "styled-components";

const Resume = () => {
  // All functional components must have a return method that contains JSX.
  // We return all the JSX inside a parent element with a className of "container".

  return (
    <div className="resume">
      {/* <h1>Resume</h1> */}
      <div className="skills">
        <p>
          <a href="https://docs.google.com/document/d/1yIj3v-auWwRtl1c8PikZNHBjr5PvkoXtcOY7j9OFkPs/edit?usp=sharing">
            <button>PDF Link</button>
          </a>
        </p>
      </div>
      <img id="resumeImg" src={resumepdf} alt="resume" />
    </div>
  );
}

export default Resume