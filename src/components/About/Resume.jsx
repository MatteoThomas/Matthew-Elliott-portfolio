import React from "react";
import styled from "styled-components";
import  { Wrapper, Header, Outline, Button }  from "../../styles/Styles";
import {mobile} from "../../js/responsive"


const Container = styled.div`
  margin-top: 4rem;
  height: 100vh;
`
  
  
const HeaderWrap = styled.div`
  /* background-color: #222222; */
  width: clamp(100px, 90%, 1200px);
  display: flex;
  justify-content: center;
  align-items: center;
  ${mobile({ width: "90%"})} 
`
const ButtonWrap = styled.div`
/* position: absolute;
top:16rem; */
`

  

const Resume = () => {

  return (
    <div id="resume">
    <Container>
      <Wrapper>
        <HeaderWrap>

     <Header>
       <Outline>
       resume
       </Outline>
      </Header>
<ButtonWrap>
      <Button>
      <a href="https://docs.google.com/document/d/1yIj3v-auWwRtl1c8PikZNHBjr5PvkoXtcOY7j9OFkPs/edit?usp=sharing">
          Resume</a>
          </Button>
          </ButtonWrap>
      </HeaderWrap>


      </Wrapper>
      </Container>
      </div>
  );
}

export default Resume