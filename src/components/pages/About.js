import React from "react";
// import "../styles/About.css";
import headshot from "../../img/avatar.jpg";

export default function About() {
  // All functional components must have a return method that contains JSX.
  // We return all the JSX inside a parent element with a className of "container".
  return (
    <about className="about">
      <h1>About me</h1>
      <p>
        I'm currently enrolled in a full-stack web development boot camp at the
        University of Denver. My background is in graphic design, music
        production and gaming (playing, not making(yet...)). I look forward to
        combining all these talents to create unique and memorable experiences
        for the masses.
      </p>

      <img src={headshot} alt="avatar" />
    </about>
  );
}
