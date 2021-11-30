import React, { useState } from "react";
import styled from "styled-components";
import { mobile } from "../../responsive";
import textThin from "../../img/circletextTHIN.svg"
import textBold from "../../img/circletext.svg"
import face from "../../img/face2.svg"
import { keyframes} from "styled-components"

import { useSpring, animated, useTransition, config } from '@react-spring/web'


const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* margin: 7rem auto 0 auto; */
  mix-blend-mode: saturation;
  /* ${mobile({  margin: "4rem auto 0 auto"})} */
  ${mobile({  flexDirection: "initial"})}
`
const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`
const AboutDiv = styled.div`
`

const AnimatedHelloText = styled.div` 
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  letter-spacing: -.4vw;
  line-height: clamp(1.1rem, 5vw, 9rem);
  font-size: clamp(3.5rem, 14vw, 13rem);
  transition: all .3s;
  width: clamp(100px, 80%, 1200px);
  margin: 5rem auto 0 auto;
  /* background-color: aqua; */
`

const HelloOutline = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  letter-spacing: -.4vw;
  line-height: clamp(1.1rem, 5vw, 9rem);
  font-size: clamp(3.5rem, 14vw, 13rem);
  transition: all .3s;
  width: clamp(100px, 100%, 1200px);
  margin: 5rem auto 0 auto;
  -webkit-text-stroke: 1px ${({ theme }) => theme.text};
  -webkit-text-fill-color: transparent;
  /* padding: 1rem; */
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
  /* position: absolute; */
  /* background-color: aliceblue; */
  ${mobile({ margin: "0rem auto 0 auto"})}
`
const AnimatedFade = styled(animated.div)`
  /* line-height: clamp(5rem, 5.2vw, 3.5rem); */
  margin:5rem 0rem 0 0;
  ${mobile({ marginTop: "0rem"})}
`
const AnimatedAbout = styled(animated.div)`
  margin:0rem 0rem 0 0;
  ${mobile({ marginTop: "0rem"})}
`

const LeaveText = styled(animated.div)`
  /* margin-top: -10rem;
  ${mobile({ marginTop: "-11rem"})} */
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
  
      <AboutDiv>

        <AnimatedHelloText>
          <HelloOutline> Hey! I'm </HelloOutline>
          <br/>Matthew. <br/>
          {/* <LeaveText> */}
          {fadeOut((style, item) =>
                item ? <AnimatedFade style={style}> 
          <HelloOutline>Let's make <br/>something.</HelloOutline>
          </AnimatedFade> : ''
                )}
          {/* </LeaveText> */}
          

        </AnimatedHelloText>
         
      </AboutDiv>

        <SkillsWrapper>
              
         {/* <Skills >Web Developer<HelloOutline>+<br/></HelloOutline> Graphic Designer</Skills> */}

        </SkillsWrapper>  
        
        {first((style, item) =>
                item ? <div><AnimatedAbout style={style}> 
    
        <AboutDetail>
    
            I'm a recent full-stack web-developer boot camp graduate & graphic designer.  
            I'm looking forward to combining all my talents to create unique and memorable 
            experiences for the masses.
 
        </AboutDetail>

                </AnimatedAbout></div> : ''
                )}
      </Wrapper>
    </Container>

)
}

export default About;
