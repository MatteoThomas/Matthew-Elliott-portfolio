import React from "react";

import GitHubIcon  from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

import styled from "styled-components";
import {mobile} from "../responsive"
import GlobalStyles from '../GlobalStyles';


const Container = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    color: rgb(87, 104, 107);
    background-color: aliceblue;
`

const Logo= styled.h1`
font-size: 30px;

`

const Footer = () => {
  return (
    <GlobalStyles>
    <Container>
      <Logo>Matthew Elliott</Logo>
      <MailOutlineIcon alt="email" href="mailto:matt.ell@pm.me"/>
      <GitHubIcon alt="github" href="https://github.com/MatteoThomas" />
      <LinkedInIcon alt="linkedin" href="https://www.linkedin.com/in/matthewell/"/>
    </Container>
    </GlobalStyles>
  );
}

export default Footer