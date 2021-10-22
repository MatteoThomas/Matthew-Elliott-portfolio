import React from "react";
import crowlers from "../img/crowlers.png";
import cards from "../img/LOFT718.png";
import records from "../img/wpRECORDS.jpg";
import recovery from "../img/recoverybanner.jpg";
import searsucker from "../img/searsucker.png";
import styled from "styled-components";
import Slide from 'react-reveal/Slide';

const Container = styled.div`
  background-color: #e7fae9;
  height: fit-content;
  width: 100vw;
  `
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* width: 80%; */
  `

const Title = styled.div`
    font-family: "Syne";
    font-size: 2.7rem;
    font-weight: 700;
    letter-spacing: -.11rem;
    line-height: 2.3rem;
    color:  black;
    margin: 4rem 0 3rem 0;
    transform: scale(1, .9);
    width: 80%;
    /* background-color: aqua; */
text-align: center;
    `

const Projects = styled.div`
/* display: flex;
flex-direction: column;
align-items: center; */
/* background-color:lightblue; */
`
const Links = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
/* margin: auto; */
/* justify-content: space-between; */

`
const About = styled.h1` 
font-family: 'Noto Sans Mono', monospace;
font-weight: 100;
letter-spacing: .3rem;
line-height: 1.5rem;
font-size: 1.5rem;
text-align: justify;
color:#e7e7e7;
-webkit-text-stroke: .5px black;
/* width: 80%; */
display: flex;
width: clamp(350px, 75%, 800px);    
`
const Button = styled.button`
margin: 2rem 0rem 3rem 0rem;
`

const Key = styled.div`

`
const ImgWrap = styled.div`
overflow: hidden;
height:7rem;
margin: 1rem 0 1rem 0;
width: 100%;
`

const Img = styled.img`
width: 100%;
`

const Graphic = () => {

  const designs = [
    {
      name: "Vine St.",
      img: crowlers,
      link: "https://matteoelliott.myportfolio.com/gd",
    },
    {
      name: "Whiskey Pickle Records",
      img: records,
      link: "https://matteoelliott.myportfolio.com/whiskey-pickle",
    },
    {
      name: "Recovery",
      img: recovery,
      link: "https://matteoelliott.myportfolio.com/recovery",
    },    
    {
      name: "LOFT718",
      img: cards,
      link: "https://matteoelliott.myportfolio.com/loft-718",
    },
    {
      name: "Searsucker",
      img: searsucker,
      link: "https://matteoelliott.myportfolio.com/searsucker",
    },
  ]

  return (
    
    <Container>
 
      <Wrapper>
        <Title>
        Graphic Design
      </Title>
      <Slide bottom>
    </Slide>
    <Projects>
  <Links>
      <About>
      I have over a decade of experience in online promotion, print, and product branding.
      </About>
      <Button>
        <a href="https://matteoelliott.myportfolio.com">
          See my portfolio
        </a>
      </Button>

      {designs.map((item, i) => (
        <Key key={i}>
          <Slide bottom>
            <ImgWrap>
          <a href={item.link}> <Img src={item.img} alt="" /> </a>
            </ImgWrap>
          </Slide>
        </Key>
))}

  </Links>
    </Projects>

    </Wrapper>
    </Container>

  );
}

export default Graphic;
