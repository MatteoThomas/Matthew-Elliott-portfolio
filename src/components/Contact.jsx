import React from "react";
import emailjs from "emailjs-com";
import styled from "styled-components";
import {mobile} from "../responsive"
import Slide from 'react-reveal/Slide';

import  { Wrapper, Header, Description }  from "../styles/Styles";
import GitHubIcon from '@mui/icons-material/GitHub';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Container = styled.div`
background-color: black;
`

const HeaderWrap = styled.div`
  width: clamp(100px, 90%, 1200px);
  display: flex;
  justify-content: space-between;
  align-items: center;
// MATERIAL UI ICONS USE THIS TO INHERIT SIZE
font-size: 2.5rem;
${mobile({ width: "90%",fontSize: "1.8rem"})}
`

const Icons = styled.div`
display: flex;

${mobile({ marginTop: "0rem", marginRight: "1rem", flexDirection: "column"})}
`

const Contact = () => {
  

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_818x1x1",
        "template_3vq1l5a",
        e.target,
        "user_iwbCAENbu4RyZEHcbrk1W"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message Sent");
          document.querySelector("form").reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  }


  return (
    <div id="contact">
  <Container>
    <Wrapper>
<HeaderWrap>
    <Header style={{color: "#e7dcd8"}}>
        Contact
    </Header>
      
      <Icons>
      <Slide right duration={1000}>
    <a href="mailto:matt.ell@pm.me">
      <MailOutlineIcon href="mailto:matt.ell@pm.me" style={{color: "#e7dcd8", fontSize: "inherit", margin: "0rem 1rem 0 0"}}/>
    </a>
    </Slide>
    <Slide right duration={2000}>
    <a href="https://github.com/MatteoThomas">
      <GitHubIcon style={{color: "#e7dcd8", fontSize: "inherit", margin: "0rem 1rem 0 0"}}/>
    </a>
    </Slide>
    <Slide right duration={3000}>
    <a href="https://www.linkedin.com/in/matthewell/">
      <LinkedInIcon style={{color: "#e7dcd8", fontSize: "inherit", margin: "0rem 1rem 0 0"}}/>
    </a>
    </Slide>
    </Icons>
    </HeaderWrap>
    </Wrapper>
  </Container>
  </div>
  );
}

export default Contact;
