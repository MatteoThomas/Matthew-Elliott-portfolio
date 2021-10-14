import React from "react";

import styled from "styled-components";

import tripr from "../img/tripr2.png";
import pd from "../img/photodrop_screenshot.png";
import gitmusic from "../img/gitmusic.png";
import myteam from "../img/myteam.png";
import codequiz from "../img/codequiz.png";
import workday from "../img/workday.png";
import link from "../img/link_icon.png";
import github from "../img/github_icon.png";

const Container = styled.div`

`
const Wrapper = styled.div`
display: flex;
background-color: #e7e7e7;
justify-content: space-between;
height:60rem;
width:100vw;
`

const Left = styled.div`

`

const Title = styled.div`
    position: relative;
    top: 0rem;
    left: 6rem;
    /* background-color: pink; */
    transform:rotate(270deg);
    transform-origin:(0 0);
`

const Projects = styled.div`
display: flex;
flex-wrap: wrap;
/* background-color:lightblue; */
width: 80rem;
margin-left: 0rem;
`
const Right = styled.div`

`

const Webdev = () => {
  const project = [
    {
      name: "tripr.",
      img: tripr,
      desc: "is an an adventure logging app utilizing Node.js, Express, and Handlebars.",
      github: "https://github.com/k-ryanhunt/Project-2-Travel-Green",
      link: "https://tripr-project2.herokuapp.com/",
    },
    {
      name: "PhotoDrop",
      img: pd,
      desc: "is a photo sharing project using React, Express, Cloudinary and more.",
      github: "https://github.com/k-ryanhunt/Project-2-Travel-Green",
      link: "https://photo-drop2.herokuapp.com/",
    },
    {
      name: "git.Music",
      img: gitmusic,
      desc: "is a music finding app that relies on the Discogs API for artist information.",
      github: "https://github.com/MatteoThomas/photo-drop",
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
      link: "https://matteothomas.github.io/cool-code-quiz/",
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
    
    <div>
      <Container>
        <Wrapper>
          <Left></Left>
    <Title>
        <h1>Web<br/>Development</h1>
      </Title>

      <Projects>
      {project.map((item, i) => (
        <div key={i} className="big">
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
      </Projects>
      <Right></Right>
      </Wrapper>
      </Container>
    </div>
  );
}
export default Webdev;
