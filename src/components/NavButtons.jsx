import React from "react";
import { bool, func } from "prop-types";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import {mobile} from "../responsive"
import Slide from 'react-reveal/Slide';
import GitHubIcon from '@mui/icons-material/GitHub';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Button = styled.button`
  color: ${({ theme }) => theme.background};
  position: fixed;
  top: 1.3rem;
  right: 1.3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  z-index: 2;
  transition: all .5s ease-in-out;
  ${mobile({ right: "5rem"})};
  :hover {
    color: ${({ theme }) => theme.body};
    background: ${({ theme }) => theme.background};
    transition: all .5s ease-in-out;
  }
`
const Icons = styled.div`
  /* background-color: aqua; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
 position: absolute;
top:5rem;
right:0rem;

${mobile({ flexDirection: "initial", top: "1rem", right: "3rem" })}
`

const Icon = styled.div`
/* background-color: #5e5952; */
margin: .5rem 0rem .5rem .5rem;
color: ${({ theme }) => theme.background};
transition: all .5s ease;
/* ${mobile({ marginTop: "1.6rem", marginRight: "0", marginLeft: "4.6rem", justifyContent: "start"})} */
`

const NavButton = ({ open, setOpen }) => {

  return (
    <div>
    <Button open={open} onClick={() => setOpen(!open)}>
      {/* CHANGES ICON WHEN OPEN */}
      {open ? <CloseIcon className="material-icons" /> : <MenuIcon className="material-icons md-36" />}
    </Button>
            <Icons>
            <Slide right>
            <Slide right duration={1000}>
          <a href="mailto:matt.ell@pm.me">
            <Icon>
            <MailOutlineIcon href="mailto:matt.ell@pm.me" style={{ fontSize: "1.5rem", margin: "0rem 1rem 0 0"}}/>
          </Icon>
          </a>
          </Slide>
          <Slide right duration={2000}>
          <a href="https://github.com/MatteoThomas">
            <Icon>
            <GitHubIcon style={{ fontSize: "1.5rem", margin: "0rem 1rem 0 0"}}/>
            </Icon>
          </a>
          </Slide>
          <Slide right duration={3000}>
          <a href="https://www.linkedin.com/in/matthewell/">
            <Icon>
            <LinkedInIcon style={{ fontSize: "1.5rem", margin: "0rem 1rem 0 0"}}/>
            </Icon>
          </a>
          </Slide>
          </Slide>
          </Icons>
          </div>
  );
};

NavButton.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
};

export default NavButton;
