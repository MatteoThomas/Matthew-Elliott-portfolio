import React from "react";
import emailjs from "emailjs-com";
import styled from "styled-components";
import {mobile} from "../responsive"
import Slide from 'react-reveal/Slide';
import  { Wrapper, Header, Description, SubDescription, Outline }  from "../styles/Styles";
import GitHubIcon from '@mui/icons-material/GitHub';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Container = styled.div`
display: flex;
flex-direction: column;
`

const HeaderWrap = styled.div`
  width: clamp(100px, 90%, 1200px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({ width: "90%",fontSize: "1.8rem"})}
  /* background-color: antiquewhite; */
  `

const Icons = styled.div`
/* background-color: #696053; */

display: flex;
justify-content: flex-start;
${mobile({ margin: "1rem 0rem 1rem 1rem"})};
`
const IconWrapper = styled.div`
width:80px;
  // MATERIAL UI ICONS USE THIS TO INHERIT SIZE
  font-size: 2.5rem;
  color: #e7dcd8;

  /* margin: 0rem 1rem 0rem 1rem; */
  transition: all .5s ease;
  :hover {
    transition: all .5s ease;
    color: white;
  }

`
const Contact = () => {
  

  return (
    <div id="contact">
  <Container>
    <Wrapper>
<HeaderWrap>
    <Header>
      <Outline>
        CONTACT
        </Outline>
    </Header>
      
      <Icons><SubDescription>E-Mail
      <Slide right duration={500}>
    <a href="mailto:matt.ell@pm.me">
    <IconWrapper>
      <MailOutlineIcon href="mailto:matt.ell@pm.me" style={{color: "inherit", fontSize: "inherit", margin: "inherit"}}/>
      </IconWrapper>
    </a>
    </Slide>
    </SubDescription>
    <SubDescription>Github
    <Slide right duration={1000}>
    <a href="https://github.com/MatteoThomas">
      <IconWrapper>
      <GitHubIcon style={{ color: "inherit", fontSize: "inherit", margin: "inherit"}}/>
      </IconWrapper>

    </a>
    </Slide>
    </SubDescription>
    <SubDescription>LinkedIn
    <Slide right duration={1500}>
    <a href="https://www.linkedin.com/in/matthewell/">
    <IconWrapper>
      <LinkedInIcon style={{color: "inherit", fontSize: "inherit", margin: "inherit"}}/>
      </IconWrapper>
    </a>
    </Slide>
    </SubDescription>
    </Icons>
    </HeaderWrap>
    </Wrapper>
  </Container>
  </div>
  );
}

export default Contact;
