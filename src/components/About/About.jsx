import React, { useState } from "react";
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
  mix-blend-mode: saturation;
  ${mobile({  margin: "4rem auto 0 auto"})}
  ${mobile({  flexDirection: "initial"})}
`

const Wrapper = styled.div`
  height: 100vh;
  width: clamp(100px, 90%, 1200px);
  display: flex;
  flex-direction: column;
`

const AnimatedHelloText = styled.div` 
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  letter-spacing: -.8vw;
  line-height: clamp(1.1rem, 5vw, 9rem);
  font-size: clamp(3.5rem, 14vw, 13rem);
  transition: all .3s;
  width: clamp(100px, 80%, 1200px);
  margin: 5rem auto 0 auto;
`

const HelloOutline = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  letter-spacing: -.8vw;
  line-height: clamp(1.1rem, 5vw, 9rem);
  font-size: clamp(3.5rem, 14vw, 13rem);
  transition: all .3s;
  width: clamp(100px, 100%, 1200px);
  margin: 5rem auto 0 auto;
  -webkit-text-stroke: 1px ${({ theme }) => theme.text};
  -webkit-text-fill-color: transparent;
`
  
const Text = styled.div`
`

const SkillsWrapper = styled.div`
  padding: 2.2rem 0rem 0rem 0rem;
  display: flex;
  justify-content: end;
  align-items: center;
  margin: -1.3rem 8.5rem 0 0rem;
  ${mobile({  margin: "-1.8rem 4rem 7rem 0rem"})}
`

const Skills = styled(animated.h2)`
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  letter-spacing: 0;
  line-height: clamp(.8rem, 1.8vh, 1.8rem);
  text-align: end;
  font-size: clamp(.9rem, 3vw, 1.6rem);
  z-index:10;
`

const ImgWrap = styled.div`
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
  width: clamp(300px, 80%, 600px);
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

  const [isVisible, setIsVisible] = useState(true);

    
  // DEFINE ANIMATION PARAMETERS
  const first = useTransition(isVisible, {
      config: isVisible ? { ...config.molasses} : { duration: 150 },
      from: { opacity: 0, transform: `translate3d(0px, 822px, 0px)` },
      enter: { opacity: 1, transform: `translate3d(0px, 0px, 0px)` },
      leave: { opacity: 0, transform: `translate3d(0px, 10px, 0px)` },
      delay: 3300
  });

  const fadeOut = useTransition(isVisible, {
    config: isVisible ? { ...config.gentle} : { duration: 150 },
    from: { opacity: 1 },
    enter: { opacity: 0 },
    leave: { opacity: 0 },
    delay: 4000
});


return (
  <Container>
      <Wrapper> 
        <AboutDetail>
            I'm a recent full-stack web-developer boot camp graduate & graphic designer.  
            I'm looking forward to combining all my talents to create unique and memorable 
            experiences for the masses.
        </AboutDetail>
        <SkillsWrapper>            
        <Skills >Web Developer<br/>+<br/>Graphic Designer</Skills>
        </SkillsWrapper>           
        <Resume/>
      </Wrapper>
    </Container>
)
}

export default About;
