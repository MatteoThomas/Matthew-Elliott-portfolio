import React from 'react';
import { bool } from 'prop-types';
import styled from "styled-components";


const StyledMenu = styled.nav`
 font-family: "Syne";
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: white;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(200%)'};
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  right: 0;

  transition: transform 0.3s ease-in-out;
  
  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
  }

  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: black;
    text-decoration: none;
    transition: color 0.3s linear;
    
    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: ${({ theme }) => theme.primaryHover};
    }
  }

`

const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <a href="/">
        
        About
      </a>
      <a href="/">
        
        Web Development
        </a>
      <a href="/">
       
        Graphic Design
        </a>
        <a href="/">
       
       Contact
       </a>
       <a href="/">
       
       Resume
       </a>
    </StyledMenu>
  )
}

Menu.propTypes = {
  open: bool.isRequired,
}

export default Menu;