import React from "react";
import styled from "styled-components";
import tripr from "../img/TripThumb.png";
import pd from "../img/PhotoThumb.png";
import gitmusic from "../img/GitmusicThumb.png";
// import link from "../img/link_icon.png";
// import github from "../img/github_icon.png";
import Slide from 'react-reveal/Slide';
import  { Header, Description }  from "./Styles";


const Container = styled.div`
  background-color: #e7e7e7;
  width: 100vw;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 5rem;
  `


const Key = styled.div`

  `

const ImgWrap = styled.div`
  overflow: hidden;
  margin: 1rem 0 1rem 0;
  width: clamp(22rem, 60vw, 1400px);
`

const Img = styled.img`
  width: 100%;
`


const WebInfo = styled.div`
  display: flex;
  font-family: raleway;
  font-weight: 400;
  font-size: 3vw;
  width: 95%;
  margin: 1rem 0rem 4rem 0rem;
  `

const WebTitle = styled.h1`
    font-family: 'Syne', sans-serif;
    margin: 0rem 1rem 0rem 0rem;
    `
const WebDesc = styled.div`
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
      desc: "is a photo sharing project using React, Express, and Cloudinary.",
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

  ];


  return (
    
    <div id="web">
      <Container>
        <Wrapper>

    
          <Header>
          Web Development
          </Header>
          <Description>
        <Slide bottom>
          JavaScript / CSS / React / APIs / NodeJS / ExpressJS / MongoDB
      </Slide>
      </Description>

            {project.map((item, i) => (
              <Key key={i}>

                <Slide bottom>
                  <ImgWrap>
                    <a href={item.link}> <Img src={item.img} alt="" /> </a>
                  </ImgWrap>
                  </Slide>

                  <Slide bottom>
                    {/* <WebInfo>
                    <WebTitle>{item.name}</WebTitle>
                    <WebDesc>{item.desc}</WebDesc>
                     
                  </WebInfo> */}
                  </Slide>

              </Key>
            ))}
    
        </Wrapper>
      </Container>
    </div>
  );
}
export default Webdev;
