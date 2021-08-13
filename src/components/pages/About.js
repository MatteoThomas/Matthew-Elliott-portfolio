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
          I'm a Full Stack Web Developer and Graphic Designer building websites
          from idea to address. Able to work independently and collaborate with
          teams I'm prepared to tackle any and all challenges and look forward
          to combining all these talents to create unique and memorable
          experiences for the masses.
        </p>
      </div>
    </div>
  );
}

export default About;
