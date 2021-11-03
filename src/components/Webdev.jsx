import React from "react";
import styled from "styled-components";
import Slide from 'react-reveal/Slide';
import  { Wrapper, Header, Description }  from "../styles/Styles";
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

// const Box = styled.div`
//   flex: 1;
//   overflow: hidden;
//   transition: .5s;
//   margin: 0 2%;
//   box-shadow: 0 20px 30px rgba(0,0,0,.1);
//   line-height: 0;
//   &:hover {
//     flex: 1 1 50%
//   }
// `
// const BoxImg = styled.img`
//   width: 200%;
//   height: calc(100% - 10vh);
//   object-fit: cover; 
//   transition: .5s;
//   &:hover {
//     width: 100%;
//     height: 100%;
//   }
// `
// const BoxSpan = styled.h3`
//   font-size: 3.8vh;
//   display: block;
//   text-align: center;
//   height: 10vh;
//   line-height: 2.6;
// `


const Webdev = () => {

  return (
    
    <div id="web">
      <Container>
        <Wrapper>

        <HeaderWrap>
          <Header>
          Web Development
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
