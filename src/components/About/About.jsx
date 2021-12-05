import React from "react";
import styled from "styled-components";
import { mobile } from "../../js/responsive";
import { useSpring, animated, useTransition, config } from '@react-spring/web'
import Resume from "../About/Resume"
import { fontSize } from "@mui/system";

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

const AnimatedFade = styled(animated.div)`
  margin:5rem 0rem 0 0;
  ${mobile({ marginTop: "0rem"})}
`

const AnimatedAbout = styled(animated.div)`
  margin:0rem 0rem 0 0;
  ${mobile({ marginTop: "0rem"})}
`

const LeaveText = styled(animated.div)`
`

const About = () => {

return (
  <Container id="about">
      <Wrapper> 
        <AboutDetail>
            I'm a live event technician and graphic designer that 
            completed a web development boot-camp at the University of Denver in 2021. Now 
            learning everything. I'm looking forward to combining all my talents to create 
            unique and memorable experiences for the masses.
        </AboutDetail>
        <Resume/>
      </Wrapper>
    </Container>
)
}

export default About;
