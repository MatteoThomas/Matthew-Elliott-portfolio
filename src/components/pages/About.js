import React from "react";
import "../../styles/Components.css";
import headshot from "../../img/headshot_bitmap.png";

function About() {
  return (
    <div className="about">
      <h1>About Me</h1>
      <img src={headshot} alt="avatar" />
      <div className="about-info">
        <div className="skills">
          <button>CSS</button>
          <button>JavaScript</button>
          <button>NodeJS</button>
          <button>Bootstrap</button>
          <button>React</button>
        </div>
        <p>
          I'm a recent Full Stack Web Developer boot camp graduate and Graphic
          Designer, I'm prepared to tackle any and all challenges and look
          forward to combining all my talents to create unique and memorable
          experiences for the masses.
        </p>
      </div>
    </div>
  );
}

export default About;
