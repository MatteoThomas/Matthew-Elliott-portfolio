import React from "react";

import "../../styles/Components.css";

import tripr from "../../img/tripr2.png";
import gitmusic from "../../img/gitmusic.png";
import myteam from "../../img/myteam.png";
import codequiz from "../../img/codequiz.png";
import workday from "../../img/workday.png";
import github from "../../img/github.png";
import link from "../../img/link_icon.png";
function Webdev() {
  return (
    <div className="webdev">
      <h1>Web Development</h1>
      <div className="web-image">
        <img src={tripr} alt="triper" />
      </div>
      <div className="web-info">
        <p>
          <h2>Tripr.</h2> is an an adventure logging app utilizing Node.js,
          Express, and Handlebars.
        </p>
        <a href="https://github.com/k-ryanhunt/Project-2-Travel-Green">
          <img src={github} alt="github" width="40" height="40" />{" "}
        </a>
        <a href="https://tripr-project2.herokuapp.com/">
          <img src={link} alt="link" width="40" height="40" />{" "}
        </a>
      </div>
      <div className="web-image">
        <img src={gitmusic} alt="git music" />
      </div>
      <div className="web-info">
        <p>
          <h2>git.Music</h2> a music finding app that relies on the Discogs API
          for artist information.
        </p>

        <a href="https://github.com/RLacer/Git-Music-Now-Project">
          <img src={github} alt="github" width="40" height="40" />{" "}
        </a>
        <a href="https://rlacer.github.io/Git-Music-Now-Project">
          <img src={link} alt="link" width="40" height="40" />{" "}
        </a>
      </div>
      <div className="web-image">
        <img src={myteam} alt="My Team" />
      </div>
      <div className="web-info">
        <p>
          <h2>My Team</h2> is a NodeJS app that takes user input and populates
          cards with it..
        </p>
        <a href="https://github.com/MatteoThomas/10-TEAM-PAGE">
          <img src={github} alt="github" width="40" height="40" />{" "}
        </a>
        <a href="https://drive.google.com/file/d/1DAtHGeAqQ7yb4VXlPAMEG4zgTmYlhWD9/view">
          <img src={link} alt="link" width="40" height="40" />{" "}
        </a>
      </div>
      <div className="web-image">
        <img src={codequiz} alt="Code Quiz" />
      </div>
      <div className="web-info">
        <p>
          <h2>Code Quiz</h2> is one of my first apps that uses Javascript to
          quiz users.
        </p>
        <a href="https://github.com/MatteoThomas/cool-code-quiz">
          <img src={github} alt="github" width="40" height="40" />{" "}
        </a>
        <a href="https://github.com/MatteoThomas/cool-code-quiz">
          <img src={link} alt="link" width="40" height="40" />{" "}
        </a>
      </div>
      <div className="web-image">
        <img src={workday} alt="Work Day" />
      </div>
      <div className="web-info">
        <p>
          <h2>Workday</h2>allows users to enter daily tasks and to-do's and save
          them in local storage.
        </p>
        <a href="https://github.com/MatteoThomas/simple-event-planner">
          <img src={github} alt="github" width="40" height="40" />{" "}
        </a>
        <a href="https://matteothomas.github.io/simple-event-planner/">
          <img src={link} alt="link" width="40" height="40" />{" "}
        </a>

        {/* <img class='icons' src='assets/IMG/link_icon.png' width="50" height="60"></a> */}
      </div>
    </div>
  );
}

export default Webdev;
