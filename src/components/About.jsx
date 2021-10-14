import React from "react";
import headshot from "../img/headshot_bitmap.png";
import styled from "styled-components";

const Container = styled.div`

`

const Wrapper = styled.div`
display: flex;
background-color: #e7e7e7;
justify-content: space-between;
height:100vh;
width:100vw;
`

const Left = styled.div`
/* THIS DIV ADD SPACE UNDER TITLE */
`

const Title = styled.div`
    position: absolute;
    top: 17rem;
    left: -10rem;
    /* background-color: pink; */
    transform:rotate(270deg);
    transform-origin:(0 0);
`

const Headshot = styled.img`
  width: 17rem;
  height: 17rem;
  margin: 5rem 9rem 0rem 0rem;
`

const AboutDiv = styled.div`
  /* background-color: #a1bdbd; */
  margin-left: 10rem;
  width: 60rem;
 `
  
 const AboutText = styled.h1` 
  color: black;
  font-family: 'Noto Sans Mono', monospace;
  font-weight: 900;
  letter-spacing: 0.01rem;
  line-height: 5rem;
  font-size: 5.5rem;
  
`


const About = () => {
  return (
    <Container>
      <Wrapper>
<Left></Left>
      <Title>
        <h1>About Me</h1>
      </Title>

      <AboutDiv>

        <AboutText>
          Hey there! I'm a new web developer. I make awesome web pages. 
          Let's make something together. 
          Something like...
        </AboutText>

      </AboutDiv>
   

  
      <Headshot src={headshot} alt="avatar" />

      </Wrapper>
    </Container>
  );
}

export default About;
