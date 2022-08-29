import React from "react";
import styled from "styled-components";
import { mobile } from "../../js/responsive";
import Resume from "../About/Resume"


const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0rem auto 0 auto;
  ${mobile({  margin: "4rem auto 0 auto"})}
  ${mobile({  flexDirection: "initial"})}
`

const Wrapper = styled.div`
  width: clamp(100px, 90%, 1200px);
  text-align: right;
`

const AboutDetail = styled.div`
  margin: 0rem auto 0 auto;
  font-family: 'EXO', sans-serif;
  font-weight: 200;
  color: ${({ theme }) => theme.text};
  letter-spacing: -.05vw;
  line-height: clamp(2rem, 3.2vw, 3.5rem);
  font-size: clamp(1.3rem, 1.7vw, 8.6rem);
  text-align: left;
  ${mobile({ margin: "0rem auto 0 auto"})}
`


const About = () => {

return (
  <Container id="about">
      <Wrapper> 
        <AboutDetail>
            I'm a full-stack web developer with a background in graphic design. Having
            completed a web development boot-camp at the University of Denver in 
            2021, I'm ready to hit the ground running, and learn 
            everything. Looking forward to combining all my talents to create 
            unique and memorable experiences for the masses.
        </AboutDetail>
        <Resume/>
      </Wrapper>
    </Container>
)
}

export default About;
