import React from "react";

import "../../styles/Components.css";

import tripr from "../../img/tripr2.png";
import gitmusic from "../../img/gitmusic.png";
import myteam from "../../img/myteam.png";
import codequiz from "../../img/codequiz.png";
import workday from "../../img/workday.png";
import link from "../../img/link_icon.png";
import github from "../../img/github_icon.png";

function Webdev() {
  const project = [
    {
      id: 1,
      name: "tripr.",
      img: { tripr },
      desc: "is an an adventure logging app utilizing Node.js, Express, and Handlebars.",
      github: "https://github.com/k-ryanhunt/Project-2-Travel-Green",
      link: "https://tripr-project2.herokuapp.com/",
    },
    {
      id: 2,
      name: "git.music",
      img: { gitmusic },
      desc: "is a music finding app that relies on the Discogs API for artist information.",
      github: "https://github.com/RLacer/Git-Music-Now-Project",
      link: "https://rlacer.github.io/Git-Music-Now-Project",
    },
  ];

  return (
    <div className="webdev">
      <h1>
        <span className="full-text">Web Development</span>
        <span class="short-text">Web Dev.</span>
      </h1>

      {project.map((item) => (
        <div>
          <div className="projects">
            <div className="container">
              <div className="web-image">
                <img src={item.img} alt="" className="image" />
              </div>
              <div class="overlay">
                <div class="text">
                  <p>
                    <h2>{item.name}</h2> {item.desc}
                  </p>
                  <a href={item.github}>
                    <img src={github} alt="github" width="40" height="40" />{" "}
                  </a>
                  <a href={item.link}>
                    <img src={link} alt="link" width="40" height="40" />{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
export default Webdev;

{
  /* <div className="webdev">
      <h1>
        <span className="full-text">Web Development</span>
        <span class="short-text">Web Dev.</span>
      </h1>
      <div className="projects">
        <div className="container">
          <div className="web-image">
            <img src={tripr} alt="triper" className="image" />
          </div>
          <div class="overlay">
            <div class="text">
              <p>
                <h2>tripr.</h2> is an an adventure logging app utilizing
                Node.js, Express, and Handlebars.
              </p>
              <a href="https://github.com/k-ryanhunt/Project-2-Travel-Green">
                <img src={github} alt="github" width="40" height="40" />{" "}
              </a>
              <a href="https://tripr-project2.herokuapp.com/">
                <img src={link} alt="link" width="40" height="40" />{" "}
              </a>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="web-image">
            <img src={gitmusic} alt="git music" className="image" />
          </div>
          <div class="overlay">
            <div class="text">
              <p>
                <h2>git.Music</h2> is a music finding app that relies on the
                Discogs API for artist information.
              </p>
              <a href="https://github.com/RLacer/Git-Music-Now-Project">
                <img src={github} alt="github" width="40" height="40" />{" "}
              </a>
              <a href="https://rlacer.github.io/Git-Music-Now-Project">
                <img src={link} alt="link" width="40" height="40" />{" "}
              </a>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="web-image">
            <img src={myteam} alt="my team" className="image" />
          </div>
          <div class="overlay">
            <div class="text">
              <p>
                <h2>My Team</h2> is a NodeJS app that takes user input and
                populates cards with it..
              </p>
              <a href="https://github.com/MatteoThomas/10-TEAM-PAGE">
                <img src={github} alt="github" width="40" height="40" />{" "}
              </a>
              <a href="https://drive.google.com/file/d/1DAtHGeAqQ7yb4VXlPAMEG4zgTmYlhWD9/view">
                <img src={link} alt="link" width="40" height="40" />{" "}
              </a>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="web-image">
            <img src={codequiz} alt="Code Quiz" className="image" />
          </div>
          <div class="overlay">
            <div class="text">
              <p>
                <h2>Code Quiz</h2> is one of my first apps that uses Javascript
                to quiz users.
              </p>
              <a href="https://github.com/MatteoThomas/cool-code-quiz">
                <img src={github} alt="github" width="40" height="40" />{" "}
              </a>
              <a href="https://github.com/MatteoThomas/cool-code-quiz">
                <img src={link} alt="link" width="40" height="40" />{" "}
              </a>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="web-image">
            <img src={workday} alt="Workday" className="image" />
          </div>
          <div class="overlay">
            <div class="text">
              <p>
                <h2>Workday</h2>allows users to enter daily tasks and to-do's
                and save them in local storage.
              </p>
              <a href="https://github.com/MatteoThomas/simple-event-planner">
                <img src={github} alt="github" width="40" height="40" />{" "}
              </a>
              <a href="https://matteothomas.github.io/simple-event-planner/">
                <img src={link} alt="link" width="40" height="40" />{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div> */
}
