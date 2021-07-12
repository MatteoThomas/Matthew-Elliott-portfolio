import React from "react";
import "../../styles/Components.css";
import headshot from "../../img/avatar.jpg";

function About() {
  return (
    <div className="about">
      <h1>About Me</h1>
      <img src={headshot} alt="avatar" />
      <div className="about-info">
        <p>
          I'm currently enrolled in a full-stack web development boot camp at
          the University of Denver. My background is in graphic design, music
          production and gaming (playing, not making yet...). I look forward to
          combining all these talents to create unique and memorable experiences
          for the masses.
        </p>
      </div>
    </div>
  );
}

export default About;
