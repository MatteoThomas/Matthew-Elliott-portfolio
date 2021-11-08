
import React from "react";
import styled from "styled-components";
import  { Button }  from "../styles/Styles";
import { func, string } from 'prop-types';


const ColorBtn = styled.button`
  padding: .0rem 1rem .0rem 1rem;
  border: none;
  background-color: transparent;
  margin: 0;
  padding: 0;
`
const LightModeButton = ({theme, toggleTheme}) => {

  return (
<Button>
  <ColorBtn onClick={toggleTheme}>
    { theme === "dark" ? <a>LIGHT</a> : <a>DARK</a>}
  </ColorBtn>
</Button>
 
);
}

LightModeButton.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
}
export default LightModeButton;