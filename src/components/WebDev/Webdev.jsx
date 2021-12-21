import React from "react";
import styled from "styled-components";
import  { Wrapper }  from "../../styles/Styles";
import {mobile} from "../../js/responsive"
import WebGrid from "../WebDev/WebGrid"

const Container = styled.div`
  margin:8rem 0 0rem 0;
`

const HeaderWrap = styled.div`
  width: clamp(200px, 90%, 1300px);
  padding-bottom: 9rem;
  ${mobile({ paddingBottom: "0rem"})};
`

const Header = styled.h1`
  font-family: 'Nunito Sans', sans-serif;
  font-weight: 900;
  font-size: clamp(3rem, 13vw, 13rem);
  letter-spacing: -.11rem;
  line-height: .8;
  word-wrap: break-word;
  text-align: left;
  transition: all .5s ease;
`

const Outline = styled.div`
  font-family: 'Hurricane', cursive;
  font-size: clamp(6rem, 28vw, 22rem);
  font-weight: 100;
  line-height: 1rem;
  display: inline;
  -webkit-text-stroke: 1px ${({ theme }) => theme.text};
  -webkit-text-fill-color: transparent;
  transition: all .5s ease;
`


const Description = styled.div`
  font-family: 'Nunito Sans', sans-serif;
  font-weight: 400;
  font-style: italic;
  letter-spacing: .01vw;
  text-align: left;
  line-height: clamp(.1rem, 6vw, 2rem);
  font-size: clamp(.2rem, 3vw, 1.74rem); 
  transition: all .5s ease;
  color:${({ theme }) => theme.text};
`

const Webdev = () => {

  return (
    
    <div id="webdev">
      <Container>
        <Wrapper>
        <HeaderWrap>
          <Header>
            <Outline>web</Outline><br/>development
        <Description>
          Javascript / CSS / React / NodeJs / Express / MongoDB
        </Description>
          </Header>
        </HeaderWrap>
        <WebGrid/>
        </Wrapper>
      </Container>
    </div>
  );
}
export default Webdev;
