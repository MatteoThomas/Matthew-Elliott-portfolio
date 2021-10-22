import React from "react";

import styled from "styled-components";

import tripr from "../img/tripr2.png";
import pd from "../img/photodrop_screenshot.png";
import gitmusic from "../img/gitmusic.png";
// import myteam from "../img/myteam.png";
// import codequiz from "../img/codequiz.png";
// import workday from "../img/workday.png";
import link from "../img/link_icon.png";
import github from "../img/github_icon.png";


// font-family: 'Raleway', sans-serif;
// font-family: 'Syne', sans-serif;

const Container = styled.div`
background-color:#dfb9b9;
  height: fit-content;
  width: 100vw;
  
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  `

 
const Title = styled.div`
    font-family: "Syne";
    font-size: 2.7rem;
    font-weight: 700;
    color:  black;
    margin: 4rem 0 3rem 0;
    letter-spacing: -.11rem;
    transform: scale(1, .9);
    width: 80vw;
    /* background-color: aqua; */

`

const Projects = styled.div`
/* background-color: green; */
width:80%;
`

const Key = styled.div`
display: flex;
flex-direction: column;
align-items: center;
/* background-color: green; */
`
  

const ImgWrap = styled.div`
overflow: hidden;
height:7rem;
width:100%;
/* padding-right: 3rem; */
background-color: violet;
`
const Img = styled.img`
width: 150%;
`
const WebTitle = styled.h1`
font-family: 'Syne', sans-serif;
margin:-0rem 0rem -1rem 0rem;
`
const WebInfo = styled.div`
font-family: raleway;
font-weight: 400;
font-size: 1rem;
width: 100%;
margin: 1rem 0 4rem 0;
text-align: justify;

`
const Icon = styled.div`
background-color: yellow;
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
    // {
    //   name: "My Team",
    //   img: myteam,
    //   desc: "is a NodeJS app that takes user input and populates cards with it.",
    //   github: "https://github.com/MatteoThomas/10-TEAM-PAGE",
    //   link: "https://drive.google.com/file/d/1DAtHGeAqQ7yb4VXlPAMEG4zgTmYlhWD9/view",
    // },
    // {
    //   name: "Code Quiz",
    //   img: codequiz,
    //   desc: "is one of my first apps that uses Javascript to quiz users.",
    //   github: "https://github.com/MatteoThomas/cool-code-quiz",
    //   link: "https://matteothomas.github.io/cool-code-quiz/",
    // },
    // {
    //   name: "Workday",
    //   img: workday,
    //   desc: "allows users to enter daily tasks and to-do's and save them in local storage.",
    //   github: "https://github.com/MatteoThomas/simple-event-planner",
    //   link: "https://matteothomas.github.io/simple-event-planner/",
    // },
  ];

  return (
    
    <div>
      <Container>
        <Wrapper>

    <Title>
        Web Development
      </Title>


      <Projects>
      {project.map((item, i) => (
        <Key key={i}>
          <ImgWrap>
          <a href={item.link}> <Img src={item.img} alt="" /> </a>

                </ImgWrap>
                <WebInfo>
                  <WebTitle>{item.name}</WebTitle><br/>{item.desc}
                  <a href={item.github}>
                    <Icon src={github} alt="github" />
                  </a>
                  <a href={item.link}>
                    <Icon src={link} alt="link" />
                  </a>

            </WebInfo>
          </Key>
 
      ))}
      </Projects>

      </Wrapper>
      </Container>
    </div>
  );
}
export default Webdev;
