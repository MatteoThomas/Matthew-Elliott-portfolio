import React from "react";
import "../../styles/Webdev.css";
import tripr from "../../img/tripr2.png";
import gitmusic from "../../img/gitmusic.png";
import myteam from "../../img/myteam.png";
import codequiz from "../../img/codequiz.png";
import workday from "../../img/workday.png";

function Webdev() {
  return (
    <webdev className="webdev">
      <h1>Web Development</h1>
      <p>My projects and current skills</p>
      <div className="webdev">Projects</div>
      <img src={tripr} alt="triper" />
      <img src={gitmusic} alt="git music" />
      <img src={myteam} alt="My Team" />
      <img src={codequiz} alt="Code Quiz" />
      <img src={workday} alt="Work Day" />
    </webdev>
  );
}

export default Webdev;
