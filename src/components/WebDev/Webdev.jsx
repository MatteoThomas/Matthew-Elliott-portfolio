import React, { useState } from "react";
import styled from "styled-components";
import  { Wrapper, Header, Outline }  from "../../styles/Styles";
import {mobile} from "../../js/responsive"
import WebGrid from "../WebDev/WebGrid"

const Container = styled.div`
  margin-bottom:5rem;
`

const HeaderWrap = styled.div`
`
const Description = styled.div`
  font-family: 'Nunito Sans', sans-serif;
  font-weight: 400;
  font-style: italic;
  letter-spacing: .01vw;
  text-align: right;
  line-height: clamp(.1rem, 6vw, 2rem);
  font-size: clamp(.2rem, 3vw, 1.74rem); 
  transition: all .5s ease;
  color:${({ theme }) => theme.text};
  margin: 1vw auto 0rem auto;
`

const Webdev = () => {

  return (
    
    <div id="webdev">
      <Container>
        <Wrapper>
        <HeaderWrap>
          <Header>
            <Outline>web </Outline>development
          </Header>
        </HeaderWrap>
        <Description>
          Javascript / Css / React / NodeJs / Express / MongoDB
        </Description>
        <WebGrid/>
        </Wrapper>
      </Container>
    </div>
  );
}
export default Webdev;
