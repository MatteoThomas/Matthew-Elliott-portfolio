import React, { useState } from "react";
import styled from "styled-components";

import  { Wrapper, Header, Outline }  from "../../styles/Styles";

import {mobile} from "../../js/responsive"

import  Slider  from "../Slider/Slider"

const Container = styled.div`
  width: clamp(100px, 90%, 1200px);
margin-bottom: 110vh;
${mobile({ marginBottom:"210vh"})}
`

const HeaderWrap = styled.div`
  /* width: clamp(100px, 90%, 1200px); */
`

const Description = styled.div`
  font-family: 'Nunito Sans', sans-serif;
  font-weight: 400;
  font-style: italic;
  letter-spacing: .01vw;
  text-align: right;
  line-height: clamp(.1rem, 6vw, 2rem);
  font-size: clamp(.2rem, 3vw, 1.74rem); 
  width: clamp(100px, 90%, 1200px);
  transition: all .5s ease;
  color:${({ theme }) => theme.text};
  margin: 1vw auto 0rem auto;
`

const SliderWrap = styled.div`
  font-family: 'Poppins', sans-serif;
  letter-spacing: .01vw;
  text-align: center;
  line-height: clamp(.1rem, 6vw, 2rem);
  font-size: clamp(.3rem, 3.5vw, 1.74rem); 
  width: clamp(100px, 90%, 1200px);
  transition: all .5s ease;
  color:${({ theme }) => theme.text};
  display: flex;
  flex-direction: column; 
  align-items: center;
`

const Webdev = () => {

  return (
    
    <div id="web">
      <Container>
        <Wrapper>

        <HeaderWrap>

          <Header>
          <Outline> web </Outline>development
          </Header>

        </HeaderWrap>
        
        <Description>
        
        Javascript / Css / React / NodeJs / Express / MongoDB

        </Description>
  
          <SliderWrap>
        
        <Slider/>
        </SliderWrap>
        
        </Wrapper>
      </Container>
    </div>
  );
}
export default Webdev;
