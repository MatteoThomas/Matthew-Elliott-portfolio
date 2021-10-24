import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import donutSrc from "../img/donut.svg"
import vortexSrc from "../img/vortex.svg"
import { keyframes} from "styled-components"
import Fade  from 'react-reveal/Fade';

const Container = styled.div`
  background-color: #e7e7e7;
  width: 100vw;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const AboutDiv = styled.div`
 `

 const HelloText = styled.div` 
  color: black;
  font-family: "Syne";
  font-weight: 700;
  letter-spacing: -.6vw;
  line-height: clamp(3rem, 7vw, 10vw);
  font-size: clamp(3.7rem, 12vw, 11rem);
  max-width: 1000px;
  margin-top:8rem;
  `

const HelloDetail = styled.h2`
  color: black;
  font-family: "Syne";
  font-weight: 400;
  letter-spacing: -.1vw;
  line-height: clamp(.1rem, 3vw, 2.5rem);
  font-size: clamp(1rem, 3vw, 2rem);
  text-align: end;
  padding: 1rem 0rem 0 0;
  display: flex;
  justify-content: end;
`

const HelloSkills = styled.div`
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
  width: 27vw;
  padding-top: 1.5rem;
  animation: ${rotate} 277s linear infinite;
  margin-bottom: 5rem;
`

const AboutDetail = styled.div`
  font-family: raleway;
  width: clamp(1rem, 80vw, 800px);
  margin-top: -2rem;
  margin-bottom: 7rem;
  letter-spacing: -.1vw;
  line-height: clamp(.2rem, 5vw, 2.5rem);
  font-size: clamp(.5rem, 4vw, 2rem);
  text-align: right;
`

const About = () => {

  return (
    <div id="about">
    <Container>
      <Wrapper>
 
      <AboutDiv>

        <HelloText>
          <Fade left>
            <div> Hey! I'm<br/>Matthew.<br/>Let's make<br/>something!</div>
          </Fade> 
        </HelloText>
         
        <HelloDetail>
        <Fade right>
          <HelloSkills>Web Developer<br/>+ Graphic Designer</HelloSkills>
        </Fade>
        </HelloDetail>  

      </AboutDiv>
        
        <Img src={vortexSrc}/>

        <AboutDetail>
          <Fade bottom>
            I'm a recent full-stack web-developer boot camp graduate & graphic 
            designer. I'm ready to take on any challenges and look 
            forward to combining all my talents to create unique and memorable 
            experiences for the masses.
          </Fade>
        </AboutDetail>

      </Wrapper>
    </Container>
    </div>
  );
}

export default About;
