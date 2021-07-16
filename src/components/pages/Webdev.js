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
      name: "tripr.",
      img: tripr,
      desc: "is an an adventure logging app utilizing Node.js, Express, and Handlebars.",
      github: "https://github.com/k-ryanhunt/Project-2-Travel-Green",
      link: "https://tripr-project2.herokuapp.com/",
    },
    {
      name: "git.Music",
      img: gitmusic,
      desc: "is a music finding app that relies on the Discogs API for artist information.",
      github: "https://github.com/RLacer/Git-Music-Now-Project",
      link: "https://rlacer.github.io/Git-Music-Now-Project",
    },
    {
      name: "My Team",
      img: myteam,
      desc: "is a NodeJS app that takes user input and populates cards with it.",
      github: "https://github.com/MatteoThomas/10-TEAM-PAGE",
      link: "https://drive.google.com/file/d/1DAtHGeAqQ7yb4VXlPAMEG4zgTmYlhWD9/view",
    },
    {
      name: "Code Quiz",
      img: codequiz,
      desc: "is one of my first apps that uses Javascript to quiz users.",
      github: "https://github.com/MatteoThomas/cool-code-quiz",
      link: "https://github.com/MatteoThomas/cool-code-quiz",
    },
    {
      name: "Workday",
      img: workday,
      desc: "allows users to enter daily tasks and to-do's and save them in local storage.",
      github: "https://github.com/MatteoThomas/simple-event-planner",
      link: "https://matteothomas.github.io/simple-event-planner/",
    },
  ];

  return (
    <div className="webdev">
      <h1>
        <span className="full-text">Web Development</span>
        <span className="short-text">Web Dev</span>
      </h1>

      {project.map((item, i) => (
        <div key={i}>
          <div className="projects">
            <div className="container">
              <div className="web-image">
                <img src={item.img} alt="" className="image" />
              </div>
              <div className="overlay">
                <div className="text">
                  <h2>{item.name}</h2> <p>{item.desc}</p>
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
