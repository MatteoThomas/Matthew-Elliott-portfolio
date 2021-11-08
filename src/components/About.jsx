import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import pc from "../img/pc.png"
import { keyframes} from "styled-components"
import Fade  from 'react-reveal/Fade';
import  { Wrapper, Outline }  from "../styles/Styles";


import down from "../img/downArrow.png"

const Container = styled.div`

`

const AboutDiv = styled.div`
 `

const HelloText = styled.div` 
  display: flex;
  justify-content: center;
  margin-top: 3rem;
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  letter-spacing: -.4vw;
  line-height: clamp(2.5rem, 11vw, 5.6rem);
  font-size: clamp(3.3rem, 14vw, 8rem);
  `
  const Text = styled.div`
  transition: all .5s ease;
  `

const HelloDetail = styled.h2`
  font-family: 'Poppins', sans-serif;
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
`

const HelloSkills = styled.div`
  width: fit-content;
`



const Img = styled.img`
  width: clamp(350px, 60%, 600px);
  margin: 2rem 0 1rem 0;
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
  color: ${({ theme }) => theme.text};
  font-family: 'Poppins', sans-serif;
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
        
        <Img src={pc}/>

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
