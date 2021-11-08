import React from "react";
import styled from "styled-components";
import  { Button }  from "../styles/Styles";
import  { Wrapper, Header, Description, Outline }  from "../styles/Styles";
import {mobile} from "../responsive"
import Slide from 'react-reveal/Slide';

const Container = styled.div`

  `
  

const HeaderWrap = styled.div`
  width: clamp(100px, 90%, 1200px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({ width: "90%"})} 
`


const Resume = () => {

  return (
    <div id="resume">
    <Container>
      <Wrapper>
        <HeaderWrap>

     <Header>
       <Outline>
       RESUME
       </Outline>
      </Header>

      <Button>
    <a href="https://docs.google.com/document/d/1yIj3v-auWwRtl1c8PikZNHBjr5PvkoXtcOY7j9OFkPs/edit?usp=sharing">
          PDF Link</a></Button>
      </HeaderWrap>


      </Wrapper>
      </Container>
      </div>
  );
}

export default Resume