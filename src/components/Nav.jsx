import React from 'react';
import { bool } from 'prop-types';
import styled from "styled-components";
import {Link} from 'react-scroll'

const StyledMenu = styled.nav`
 font-family: "Syne";
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #23251f;
  transform: ${({ open }) => open ?  'translateX(0)' : 'translateX(200%)'};
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: 0;
  z-index: 1;
  transition: transform .8s ease-in-out;
  
  a {
    font-family: "Syne";
    font-size: clamp(2rem, 8vw, 6.7rem);
    font-weight: 700;
    letter-spacing: -.11rem;
    line-height: 2.3rem;
    color: #ffffff;
    margin: 4rem 0 3rem 0;
    transform: scale(1, .9);
    width: 100%;
    text-align: center;
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