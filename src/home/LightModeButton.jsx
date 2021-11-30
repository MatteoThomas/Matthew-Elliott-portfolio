
import React from "react";
import styled from "styled-components";
import { func, string } from 'prop-types';
import { mobile } from "../js/responsive"

const ColorBtn = styled.button`
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  background-color: transparent;
  border: none;
  flex:none;
  cursor: pointer;
  position: fixed;
  top:13rem;
  right:2rem;
  ${mobile({ top:"9rem", right: "5.5rem"})}
  transition: all .5s ease;
  z-index: 110;
  background-color: transparent;
  transform: rotate(90deg);

  &:hover {
    transform: rotate(90deg) translateX(-10%);
}
`

const Icon = styled.div`
  transition: all 1s ease;
  color: ${({ theme }) => theme.text};
`

const IconDark = styled.div`
  transition: all .5s ease;
`

const LightModeButton = ({theme, toggleTheme}) => {

  return (
    <ColorBtn onClick={toggleTheme}>
      { theme === "dark" ? <Icon>LIGHT MODE</Icon> : <IconDark>DARK MODE</IconDark>}
    </ColorBtn>
);
}

LightModeButton.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
}

export default LightModeButton;