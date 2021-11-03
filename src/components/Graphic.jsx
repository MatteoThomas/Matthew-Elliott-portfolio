import React from "react";
import  { graphicData } from "../data"

import styled from "styled-components";
import Slide from 'react-reveal/Slide';
import  { Wrapper, Header, Description, Button, Outline }  from "../styles/Styles";
import {mobile} from "../responsive"

const Container = styled.div`

`
const HeaderWrap = styled.div`
  width: clamp(200px, 90%, 1200px);
  display: flex;
  justify-content: flex-end;
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

`
const ImgWrap = styled.div`
  /* width: clamp(200px, 100%, 1200px); */
  `

const Img = styled.img`
  object-fit: cover;
  width: 100%;
height: 50px;
  margin-bottom: 1rem;
  border-radius: 50px;
  transition-delay: 50ms;
    transition: transform 150ms;
    transition: height 1.7s ease-in-out;
  &:hover {
    height: 200px;
    transition-delay: 150ms;
    transition: transform 150ms;
    transition: height .7s ease-in-out;
    }
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
          See my portfolio
        </a>
      </Button>
  </HeaderWrap>
      <Description>
        <Slide bottom>
          I have over a decade of experience in online promotion, print, and product branding.
      </Slide>
      </Description>

<KeyWrap>
      {graphicData.map((item, i) => (
        <Key key={i}>
          <Slide bottom>
            <ImgWrap>
          <a href={item.link}> <Img src={item.img} alt="" /> </a>
            </ImgWrap>
          </Slide>
        </Key>
))}
</KeyWrap>

   


      </Wrapper>
    </Container>
</div>
  );
}

export default Graphic;
