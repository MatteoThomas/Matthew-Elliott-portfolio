import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import vortexSrc from "../img/pc.png"
import { keyframes} from "styled-components"
import Fade  from 'react-reveal/Fade';
import  { Wrapper, Header, Description, Outline }  from "../styles/Styles";

import Slide from 'react-reveal/Slide';
import GitHubIcon from '@mui/icons-material/GitHub';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import down from "../img/downArrow.png"

const Container = styled.div`

`
const Icons = styled.div`
display: flex;
width: 100vw;
justify-content: end;
margin-right: 15rem;
margin-top: 1.5rem;
${mobile({ marginTop: "1.6rem", marginRight: "0", marginLeft: "4.6rem", justifyContent: "start"})}
`

const AboutDiv = styled.div`
 `

const HelloText = styled.div` 
  display: flex;
  justify-content: center;
  margin-top: 3rem;
  color: #e7dcd8;
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  letter-spacing: -.4vw;
  line-height: clamp(2.5rem, 11vw, 5.6rem);
  font-size: clamp(3.3rem, 14vw, 8rem);
  /* background-color: #bb7979; */
  `
  const Text = styled.div`
  `

const HelloDetail = styled.h2`

  /* color: #e7dcd8; */
  font-family: raleway;
  font-weight: 400;
  letter-spacing: 0;
  line-height: clamp(.1rem, 2vh, 1.8rem);
  font-size: clamp(1.2rem, 3vw, 1.6rem);
  text-align: end;
  padding: 2.2rem 0rem 0rem 0rem;
  display: flex;
  justify-content: end;
  align-items: center;
  ${mobile({ padding: "1rem .5rem 0rem 0rem"})}
  /* background-color: aqua; */
`

const HelloSkills = styled.div`
  width: fit-content;
`



const Img = styled.img`
  width: clamp(350px, 60%, 600px);
  margin: 2rem 0 1rem 0;

  /* filter: invert(1); */
  `

  const blink = keyframes`
       0% {
          opacity: 1;
       }
        50% {
        opacity: .6;
        }
  `

const AboutDetail = styled.div`
margin: 1rem;
  display: flex;
  flex-direction: column;
  color: #e7dcd8;
  font-family: raleway;
  margin-top: 1rem;
  margin-bottom: 7rem;
  letter-spacing: -.1vw;
  line-height: clamp(.2rem, 5vw, 2.5rem);
  font-size: clamp(.5rem, 4vw, 2rem);
  text-align: center;
  
  &:after {
    content: url(${down});
    margin-top: 1rem;
    animation: ${blink} 2s infinite;
 
  }
`
const About = () => {

  return (
    <div id="about">
    <Container>
      <Wrapper>
      <Slide right>
      <Icons>
      <Slide right duration={1000}>
    <a href="mailto:matt.ell@pm.me">
      <MailOutlineIcon href="mailto:matt.ell@pm.me" style={{color: "#e7dcd8", fontSize: "1.5rem", margin: "0rem 1rem 0 0"}}/>
    </a>
    </Slide>
    <Slide right duration={2000}>
    <a href="https://github.com/MatteoThomas">
      <GitHubIcon style={{color: "#e7dcd8", fontSize: "1.5rem", margin: "0rem 1rem 0 0"}}/>
    </a>
    </Slide>
    <Slide right duration={3000}>
    <a href="https://www.linkedin.com/in/matthewell/">
      <LinkedInIcon style={{color: "#e7dcd8", fontSize: "1.5rem", margin: "0rem 1rem 0 0"}}/>
    </a>
    </Slide>
    </Icons>
    </Slide>
      <AboutDiv>

        <HelloText>
          <Fade left>
            
            <Text> 
            <Outline> Hey! I'm </Outline><br/>Matthew. <br/><Outline>Let's make <br/>something!</Outline>
          </Text>
          
          
          </Fade> 
        </HelloText>
         
        <HelloDetail>
        <Fade right>
          <HelloSkills>Web Developer<br/><Outline>+</Outline> Graphic Designer</HelloSkills>
        </Fade>
        </HelloDetail>  

      </AboutDiv>
        
        <Img src={vortexSrc}/>

        <AboutDetail>
          <Fade bottom>
            I'm a recent full-stack web-developer boot camp graduate & graphic 
            designer.
          </Fade>
        </AboutDetail>

      </Wrapper>
    </Container>
    </div>
  );
}

export default About;
