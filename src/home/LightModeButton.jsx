import React from "react";
import styled from "styled-components";
import { func, string } from 'prop-types';
import { mobile } from "../js/responsive"

const ColorBtn = styled.div`
  position: relative;
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  line-height: 1rem;
  background-color: transparent;
  border: none;
  flex:none;
  cursor: pointer;
  position: fixed;
  top:2rem;
  left:1.5rem;
  ${mobile({ top:"1rem", right: "5.5rem"})}
  transition: all .1s ease;
  z-index: 110;
  
  `
const Outline = styled.div`
  padding-top: .3rem;
  text-align: center;
  height: 45px;
  width: 45px;
  border:1px solid ${({ theme}) => theme.text};    
  background-color: ${({ theme}) => theme.body};
  border-radius: 50%;
  /* overflow: hidden; */
  transition: all .1s ease;
  &:hover {
    color:${({ theme}) => theme.body};
    background-color: ${({ theme}) => theme.text}; 
    transition: all .5s ease;
}
`

const LightModeButton = ({theme, toggleTheme}) => {
  
  
  return (
    <ColorBtn onClick={toggleTheme}>
    {theme === "dark" ?   
    <Outline><div>L<br/>M</div></Outline> : <Outline><div>D<br/>M</div></Outline>}
    </ColorBtn>
);
}

LightModeButton.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
}

export default LightModeButton;