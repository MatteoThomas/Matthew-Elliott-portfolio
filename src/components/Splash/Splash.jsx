import React from "react";
import styled from "styled-components";
import { mobile } from "../../js/responsive";

import "./rotatingText.css"
import "./script"

const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
  ${mobile({  flexDirection: "initial"})}
`

const Wrapper = styled.div`
  padding: 8rem;
`

const AnimatedHelloText = styled.div` 
  display: flex;
  flex-direction: column;
  justify-content: left;
  text-align: left;
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  letter-spacing: -.4vw;
  line-height: clamp(1.1rem, 5vw, 4rem);
  ${mobile({ lineHeight: "clamp(1.1rem, 5vw, 4rem)"})};
  font-size: clamp(1.5rem, 14vw, 13rem);
  transition: all .3s;
  ${({ theme }) => theme.text}
`

const HelloOutline = styled.div`
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  letter-spacing: -.7vw;
  line-height: clamp(1.1rem, 7vw, 9rem);
  ${mobile({ lineHeight: "clamp(1.1rem, 10vw, 9rem)"})};
  font-size: clamp(3.5rem, 12vw, 10rem);
  transition: all .5s;
  margin-top: 1rem ;
  -webkit-text-stroke: 1px ${({ theme }) => theme.text};
  -webkit-text-fill-color: transparent;
`

const RotatingText = styled.div`
  margin-top: 1rem;
`
const Splash = () => {

return (
  <Container>
    <Wrapper>
      <AnimatedHelloText>
        <HelloOutline> 
          Hey! I'm   
        </HelloOutline>
        <br/>Matthew.<br/>   
        <HelloOutline>Let's make<br/>something</HelloOutline>
        <RotatingText className="rotatingText" id="word">            
          <span className="rotatingText-adjective" id="word">cool</span>
          <span className="rotatingText-adjective" id="word">useful</span>
          <span className="rotatingText-adjective" id="word">fun</span>
          <span className="rotatingText-adjective" id="word">meaningful</span> 
          <span className="rotatingText-adjective" id="word">hilarious</span> 
          <span className="rotatingText-adjective" id="word">weird</span>  
        </RotatingText>
      </AnimatedHelloText>
    </Wrapper>
  </Container>
)
}

export default Splash;
