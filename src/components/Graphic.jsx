import React, { useState, useEffect } from "react";

import  { graphicData } from "../data"
import styled from "styled-components"
import Slide from 'react-reveal/Slide';
import  { Wrapper, Header, Description, SubDescription, Outline, Button }  from "../styles/Styles";
// import Button from "./Button"
import {mobile} from "../responsive"



const Container = styled.div`
margin-bottom: 8rem;
`
const HeaderWrap = styled.div`
  width: clamp(200px, 90%, 1200px);
  display: flex;
  align-items: center;
  ${mobile({ width: "90%", flexWrap: "wrap"})} 
  /* background-color: aliceblue; */
`

const KeyWrap = styled.div`
  width: clamp(100px, 90%, 1200px);
  height: 100%;
  display: block;
  ${mobile({ display: "block"})}
`
const Key = styled.div`
/* background-color: aliceblue; */
display: flex;

&:hover DescWrap {
  background-color: aqua;
}
`
  
const ImgWrap = styled.div`
  /* width: clamp(200px, 100%, 1200px); */
  transition: transform 1s;
  transition: width 1s ease-in-out;
  &:hover Img {
    width: 10%;
    transition: transform 1s;
    transition: width 1s ease-in-out;
  };

  &:hover + DescWrap {
    background-color: aquamarine;
  }
  
  `

const DescWrap = styled.div`
/* width: 100%; */
  display: none;
  /* width: clamp(200px, 100%, 1200px); */
  transition: transform 1s;
  transition: width 1s ease-in-out;

  `

const Img = styled.img`
  object-fit: cover;
  width: 100%;
  height: 50px;
  margin-bottom: 1rem;
  border-radius: 50px;

    transition: transform 1s;
    transition: width 1s ease-in-out;

`

const Graphic = () => {

  return (

      <div id="graphic">

    <Container>
 
      <Wrapper>
     <HeaderWrap>
          <Header>

       <Outline>GRAPHIC </Outline>DESIGN

       </Header>

      <Button>
        <a href="https://matteoelliott.myportfolio.com">
          MY PORTFOLIO
        </a>
      </Button>

  </HeaderWrap>
      <Description>

          I have over a decade of experience in online promotion, print, and product branding.

      </Description>

<KeyWrap>
      {graphicData.map((item, i) => (
        <Key key={i}>
            <ImgWrap>
            <Slide right>
          <a href={item.link}> <Img src={item.img} alt="" /> </a>
          </Slide>
            </ImgWrap>
            <Description>
            <DescWrap>
                {item.desc}
            </DescWrap>
            </Description>

        </Key>
))}
</KeyWrap>

   


      </Wrapper>
    </Container>
</div>

  );
}

export default Graphic;
