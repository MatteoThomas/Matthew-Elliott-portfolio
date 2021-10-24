import React from "react";
import crowlers from "../img/VineThumb.png";
import cards from "../img/CardThumb.png";
import records from "../img/RecordThumb.png";
import recovery from "../img/RecoveryThumb.png";
import searsucker from "../img/SearThumb.png";
import styled from "styled-components";
import Slide from 'react-reveal/Slide';
import  { Header, Description, Button }  from "./Styles";

const Container = styled.div`
  background-color: #e7e7e7;
  width: 100vw;
  `
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  `
const BtnWrap = styled.div`
`

const Key = styled.div`
`
const ImgWrap = styled.div`
  overflow: hidden;
  margin: 1rem 0 1rem 0;
  width: clamp(22rem, 60vw, 1400px);
`

const Img = styled.img`
  width: 100%;
`

const Graphic = () => {

  const designs = [
    {
      name: "Vine St.",
      img: crowlers,
      link: "https://matteoelliott.myportfolio.com/gd",
    },
    {
      name: "Whiskey Pickle Records",
      img: records,
      link: "https://matteoelliott.myportfolio.com/whiskey-pickle",
    },
    {
      name: "Recovery",
      img: recovery,
      link: "https://matteoelliott.myportfolio.com/recovery",
    },    
    {
      name: "LOFT718",
      img: cards,
      link: "https://matteoelliott.myportfolio.com/loft-718",
    },
    {
      name: "Searsucker",
      img: searsucker,
      link: "https://matteoelliott.myportfolio.com/searsucker",
    },
  ]

  return (
    
    <div id="graphic">
    <Container>
 
      <Wrapper>
     
          <Header>
       Graphic Design
       </Header>
  
      <Description>
        <Slide bottom>
          I have over a decade of experience in online promotion, print, and product branding.
      </Slide>
      </Description>
   <BtnWrap>
      <Button>
        <a href="https://matteoelliott.myportfolio.com">
          See my portfolio
        </a>
      </Button>
      </BtnWrap>
   
 


      {designs.map((item, i) => (
        <Key key={i}>
          <Slide bottom>
            <ImgWrap>
          <a href={item.link}> <Img src={item.img} alt="" /> </a>
            </ImgWrap>
          </Slide>
        </Key>
))}

   


      </Wrapper>
    </Container>
</div>
  );
}

export default Graphic;
