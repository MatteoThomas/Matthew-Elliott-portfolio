import React from 'react';
import { bool } from 'prop-types';
import styled from "styled-components";
import {Link} from 'react-scroll'
import {mobile} from "../responsive"
import  {  Outline }  from "../styles/Styles";

const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${({ theme }) => theme.body};
  transform: ${({ open }) => open ?  'translateX(0)' : 'translateX(200%)'};
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  z-index: 1;
  transition: transform 1s ease-in-out;
  
  
  a {
    cursor: pointer;
    font-family: 'Poppins', sans-serif;
    font-size: clamp(2rem, 8vw, 6.7rem);
    font-weight: 700;
    letter-spacing: .01rem;
    line-height: 2rem;
    color: ${({ theme }) => theme.background};
    margin: 2rem 0 1rem 0;
    transform: scale(1, .9);
    width: 90%;
    text-align: right;
    margin-right: 2rem;
    ${mobile({ lineHeight: "1.5rem"})}
  }
`

const Menu = ({ open, setOpen }) => {
  return (
    <StyledMenu open={open}>      
      
                      {/* CLOSES MENU WHEN LINK CLICKED */}
      <Link to="web" open={open} onClick={() => setOpen(!open)}>
        WEB DEVELOPMENT
        </Link>

      <Link to="graphic" open={open} onClick={() => setOpen(!open)}>
        GRAPHIC DESIGN
      </Link>

       <Link to="resume" open={open} onClick={() => setOpen(!open)}>
       RESUME
       </Link>
       
        <Link to="contact" open={open} onClick={() => setOpen(!open)}>
       CONTACT
       </Link>


    </StyledMenu>
  )
}

Menu.propTypes = {
  open: bool.isRequired,
}

export default Menu;