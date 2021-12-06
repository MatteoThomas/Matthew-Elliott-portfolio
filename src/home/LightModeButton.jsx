
import React from "react";
import styled from "styled-components";
import { func, string } from 'prop-types';
import { mobile } from "../js/responsive"
import lm from "../img/LDmode_L.png"

const ColorBtn = styled.div`
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
  transition: all .5s ease;
  z-index: 110;
  transform: rotate(0deg);

  &:hover {
    transform:  translateY(10%);
}
`

const Icon = styled.img`
  transition: all 1s ease;
  background-image: url(${lm});
  width:100;
  height:100;
`

const IconDark = styled.img`
  transition: all .5s ease;
  background-image: url(${lm});
  width:100;
  height:100;
`
const Img = ({ theme }) => (
<img
style={{ width: '48px', height: '48px' }}
src={theme === "dark" ? lm  : lm}
  />
  );

const LightModeButton = ({theme, toggleTheme}) => {

  return (
    <ColorBtn onClick={toggleTheme}>
     <Img/>
    </ColorBtn>
);
}

LightModeButton.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
}

export default LightModeButton;