import React from "react";
import headshot from "../img/headshot_bitmap.png";
import styled from "styled-components";
import { mobile } from "../responsive";
import donutSrc from "../img/donut.svg"
import vortexSrc from "../img/vortex.svg"
import { keyframes} from "styled-components"



// font-family: 'Raleway', sans-serif;
// font-family: 'Syne', sans-serif;

const Container = styled.div`
  background-color: #e7e7e7;
  /* height: 130vh; */
  width: 100vw;
  height: fit-content;
`

const Wrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

const Headshot = styled.img`
  display: none;
  width: 17rem;
  height: 17rem;
  margin: 5rem 9vw 0rem 0rem;
  `

const AboutDiv = styled.div`
 `
  
 const HelloText = styled.h1` 
  color: black;
  font-family: "Syne";
  font-weight: 700;
  letter-spacing: -.6vw;
  line-height: 10vw;
  font-size: 11.5vw;
  max-width: 1300px;
`

const HelloDetail = styled.h2`
  color: black;
  font-family: "Syne";
  font-weight: 400;
  letter-spacing: -.1vw;
  line-height: 3vw;
  font-size: 3.6vw;
  text-align: end;
  padding: 1rem 0rem 0 0;
  /* background-color: #8d8d8d; */
  display: flex;
  justify-content: end;
`

const HelloSkills = styled.div`

/* background-color: #d3d3d3; */
width: fit-content;
`

const rotate = keyframes`
  from {
      transform: rotate(0deg);
  }
  to {
      transform: rotate(359deg);
  }
`

const Img = styled.img`
    width: 330px;
    height: 360px;
    padding-top: 1.5rem;
    animation: ${rotate} 277s linear infinite;
`

const AboutDetail = styled.div`
font-family: raleway;
width: 20rem;
margin-top: -2rem;
margin-bottom: 2rem;
`

const About = () => {

  return (
    <Container>
      <Wrapper>
 
      <AboutDiv>

        <HelloText>
          Hi, I'm<br/>Matthew.<br/>Let's make<br/>something!
        </HelloText>

        <HelloDetail><HelloSkills>Web Developer<br/>+ Graphic Designer</HelloSkills></HelloDetail>
  
      </AboutDiv>

      <Headshot src={headshot} alt="avatar" />
        
        <Img src={donutSrc}/>

        <AboutDetail>

          What is Lorem Ipsum?
  Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
  when an unknown printer took a galley of type and scrambled it to make a type 
  specimen book. 

        </AboutDetail>

      </Wrapper>
    </Container>
  );
}

export default About;
