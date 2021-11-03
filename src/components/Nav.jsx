import React from 'react';
import { bool } from 'prop-types';
import styled from "styled-components";
import {Link} from 'react-scroll'
import {mobile} from "../responsive"

const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #e7dcd8;
  transform: ${({ open }) => open ?  'translateX(0)' : 'translateX(200%)'};
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: 0;
  z-index: 1;
  transition: transform .8s ease-in-out;
  
  
  a {
    cursor: pointer;
    font-family: "Syne";
    font-size: clamp(2rem, 8vw, 6.7rem);
    font-weight: 700;
    letter-spacing: -.11rem;
    line-height: 2.3rem;
    color: black;
    margin: 4rem 0 3rem 0;
    transform: scale(1, .9);
    width: 90%;
    text-align: right;
    margin-right: 2rem;
    ${mobile({ lineHeight: "0rem"})}
  }
`

const Menu = ({ open, setOpen }) => {
  return (
    <StyledMenu open={open}>      
      
                      {/* CLOSES MENU WHEN LINK CLICKED */}
      <Link to="web" open={open} onClick={() => setOpen(!open)}>
        Web Development
        </Link>

      <Link to="graphic" open={open} onClick={() => setOpen(!open)}>
        Graphic Design
      </Link>

       <Link to="resume" open={open} onClick={() => setOpen(!open)}>
       Resume
       </Link>
       
        <Link to="contact" open={open} onClick={() => setOpen(!open)}>
       Contact
       </Link>


    </StyledMenu>
  )
}

Menu.propTypes = {
  open: bool.isRequired,
}

export default Menu;