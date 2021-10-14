import React from "react";
import crowlers from "../img/crowlers.png";
import cards from "../img/LOFT718.png";
import records from "../img/wpRECORDS.jpg";
import recovery from "../img/recoverybanner.jpg";
import searsucker from "../img/searsucker.png";
import styled from "styled-components";

const Container = styled.div`

`
const Wrapper = styled.div`
display: flex;
background-color: #e7e7e7;
justify-content: space-between;
height:100vh;
width:100vw;
`

const Title = styled.div`
    position: relative;
    top: 0rem;
    left: 15rem;
    /* background-color: pink; */
    transform:rotate(270deg);
    transform-origin:(0 0);
`
const Left = styled.div``
  

const Right = styled.div``
  
const Projects = styled.div`
display: flex;
flex-wrap: wrap;
/* background-color:lightblue; */
width: 100%;

`
const Img = styled.img`
width: 22rem;
`
const About = styled.h1` 
font-family: 'Noto Sans Mono', monospace;
font-weight: 900;
letter-spacing: 1rem;
line-height: 2rem;
font-size: 3rem;
color:#e7e7e7;
    -webkit-text-stroke: .5px black;
`

const Graphic = () => {
  return (
    <Container>
      <Wrapper>

        <Left></Left>
        <Title>
        <h1>Graphic Design</h1>
      </Title>

    <Projects>
      <About>
      I have over 15 years of experience in online promotion, print, and product branding.
      {/* Photoshop / Illustrator / Blender / XD */}
      </About>
      <button className="accordion">
        <a href="https://matteoelliott.myportfolio.com">
          See my portfolio here
        </a>
      </button>
      <div id="gdimg">
        <a href="https://matteoelliott.myportfolio.com/gd">
          <Img id="crowlers" src={crowlers} alt="crowlers" />
        </a>
        <a href="https://matteoelliott.myportfolio.com/whiskey-pickle">
          <Img id="records" src={records} alt="records" />
        </a>
        <a href="https://matteoelliott.myportfolio.com/recovery">
          <Img id="recovery" src={recovery} alt="recovery banner" />
        </a>
        <a href="https://matteoelliott.myportfolio.com/loft-718">
          <Img id="cards" src={cards} alt="crowlers" />
        </a>
        <a href="https://matteoelliott.myportfolio.com/searsucker">
          <Img id="searsucker" src={searsucker} alt="searcucker" />
        </a>
        <div className="panel">
          <p></p>
        </div>
      </div>
    </Projects>
    <Right></Right>
    </Wrapper>
    </Container>
  );
}

export default Graphic;
