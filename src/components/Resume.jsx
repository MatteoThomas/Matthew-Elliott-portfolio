import React from "react";
import resumepdf from "../img/Matthew_Elliott_res.png";
import styled from "styled-components";
import plants from "../img/plants_PNG.png"
import mountains from "../img/wireframe_mountains.png"
import  { Button }  from "../styles/Styles";
import  { Wrapper, Header, Description }  from "../styles/Styles";
import {mobile} from "../responsive"

const Container = styled.div`
background-color: #e7dcd8;
  `
  

const HeaderWrap = styled.div`
  width: clamp(100px, 90%, 1200px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({ width: "90%"})} 
`

const Background = styled.div`
  position: absolute;
  bottom: -30;
  opacity: .3;
  filter: invert(1);
  background-image: url(${mountains});
  width: 100vw;
  height: 60vh;
  z-index:-1;
`

const Resume = () => {

  return (
    <div id="resume">
    <Container>
      <Wrapper>
        <HeaderWrap>
     <Header style={{ color: "#000000"}}>
        Resume
      </Header>
      <Button>
    <a href="https://docs.google.com/document/d/1yIj3v-auWwRtl1c8PikZNHBjr5PvkoXtcOY7j9OFkPs/edit?usp=sharing">
          PDF Link</a></Button>
      </HeaderWrap>

      <Background/>
      {/* <Img id="resumeImg" src={resumepdf} alt="resume" /> */}
      </Wrapper>
      </Container>
      </div>
  );
}

export default Resume