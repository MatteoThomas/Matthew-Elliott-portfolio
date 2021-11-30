import React, { useState } from "react";
import styled from "styled-components";
import { mobile } from "../../js/responsive";
import { useSpring, animated, useTransition, config } from '@react-spring/web'
import "./rotatingText.css"

const Container = styled.div`
  display: flex;
  justify-content: center;
  ${mobile({  flexDirection: "initial"})}
  height: 100vh;
`

const Wrapper = styled.div`
  padding: 10rem;
`

const AnimatedHelloText = styled.div` 
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  letter-spacing: -.4vw;
  line-height: clamp(1.1rem, 3vw, 9rem);
  font-size: clamp(3.5rem, 16vw, 13rem);
  transition: all .3s;
  width: clamp(100px, 90%, 1200px);
  ${({ theme }) => theme.text}
`

const HelloOutline = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  letter-spacing: -.7vw;
  line-height: clamp(1.1rem, 6vw, 9rem);
  font-size: clamp(3.5rem, 12vw, 10rem);
  transition: all .5s;
  width: clamp(100px, 100%, 1200px);
  margin-top: 2rem ;
  -webkit-text-stroke: 1px ${({ theme }) => theme.text};
  -webkit-text-fill-color: transparent;
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

const RotatingText = styled.div`
margin-top: 1rem;

`
const Splash = () => {

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
      <AnimatedHelloText>
          <HelloOutline> 
            Hey! I'm   
          </HelloOutline>
          <br/>Matthew.<br/>
          {/* <LeaveText> */}       
          <HelloOutline>Let's make<br/>something</HelloOutline>

          <RotatingText className="rotatingText">            
            <span className="rotatingText-adjective">cool</span>
            <span className="rotatingText-adjective">useful</span>
            <span className="rotatingText-adjective">fun!</span>
            <span className="rotatingText-adjective">meaningful</span> 
            <span className="rotatingText-adjective">hilarious</span> 
            <span className="rotatingText-adjective">lasting</span>  
          </RotatingText>


          

        </AnimatedHelloText>
  

      </Wrapper>
    </Container>

)
}

export default Splash;