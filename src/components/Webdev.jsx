import React from "react";
import styled from "styled-components";
import Slide from 'react-reveal/Slide';
import  { Wrapper, Header, Description, Outline }  from "../styles/Styles";
import Slider from "../components/Slider"
import {mobile} from "../responsive"

const Container = styled.div`
margin-bottom: 10rem;
`
const HeaderWrap = styled.div`
  width: clamp(10px, 90%, 1200px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({ width: "90%"})} 
`



const Webdev = () => {

  return (
    
    <div id="web">
      <Container>
        <Wrapper>

        <HeaderWrap>
          <Header>
          <Outline> WEB </Outline>DEVELOPMENT
          </Header>
        </HeaderWrap>
          <Description>
        <Slide bottom>
          JavaScript / CSS / React / APIs / NodeJS / ExpressJS / MongoDB
      </Slide>
      </Description>
      <Slider/>

        </Wrapper>
      </Container>
    </div>
  );
}
export default Webdev;
