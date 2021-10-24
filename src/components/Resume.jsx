import React from "react";
import resumepdf from "../img/Matthew_Elliott_res.png";
import styled from "styled-components";
import plants from "../img/plants_PNG.png"
import mountains from "../img/wireframe_mountains.png"
import  { Button }  from "./Styles";

const Container = styled.div`
  background-color: #e7e7e7;
  height: 80vh;
  background-image: url(${mountains});
  width: 100vw;
  height: 100vh;
  `

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  width: clamp(16rem, 90vw, 33rem);

`
const Title = styled.div`
  font-size: clamp(5.4rem, 10vw, 18rem);
  font-family: "Syne";
  font-weight: 700;
  color:  black;
  line-height: 1rem;
  letter-spacing: -.5rem;
  transform: rotate(-90deg);
  position: relative;
  transform-origin: left; 
  margin-top: 25rem;
  margin-left: 2rem;
`


const TitleRight = styled.div`
  background-color: #7a7a7a;
  font-family: "Syne";
  font-size: clamp(5.4rem, 10vw, 18rem);
  font-weight: 700;
  color:  #000000;
  line-height: 1rem;
  letter-spacing: -.5rem;
  transform: rotate(90deg);
  position: relative;
  transform-origin: right; 
  text-align: end;
  margin-top: -12rem;
  margin-right:4rem;
`

const Resume = () => {

  return (
    <div id="resume">
    <Container>
      <Wrapper>
        <Title>
        Resume
      </Title>
      <Button>
    <a href="https://docs.google.com/document/d/1yIj3v-auWwRtl1c8PikZNHBjr5PvkoXtcOY7j9OFkPs/edit?usp=sharing">
          PDF Link</a></Button>
      
      <TitleRight>
        Resume
      </TitleRight>
      {/* <Img id="resumeImg" src={resumepdf} alt="resume" /> */}
      </Wrapper>
      </Container>
      </div>
  );
}

export default Resume