import React from "react";
import { bool, func } from "prop-types";
import styled, { keyframes } from "styled-components";
import {mobile} from "../../js/responsive"
import { Wrapper } from "../../styles/Styles.jsx"
import menuCircleDark from "../../img/menu-circular-dark.png"

const Button = styled.button`
  overflow: hidden;
  color: ${({ theme }) => theme.background};
  margin: 1rem 1rem 0 0;
  ${mobile({ margin: "-2rem 2rem 0 0"})}
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  z-index: 111;
  transition: all .5s ease-in-out;
  overflow: hidden;
  
  &:hover {
    transform: scale(1.1);
}
  &:active {
    transform: scale(1.2);
    filter: opacity(0);
    transition: all .2s ease-in-out;
  }
`

const rotate = keyframes`
  from {
    transform: rotate(360deg)
  }
  to {
    transform: rotate(0deg)
}
`

const CircleIcon = styled.img`
  width:8rem;
  animation: ${rotate} 30s linear infinite;
  transition: rotate 2s ease-in-out;
  z-index: 200;
  filter: invert( ${({ theme }) => theme.invert} );
`

const MenuButton = ({ open, setOpen }) => {

  return (
    <div>
      <Wrapper>

        <Button open={open} onClick={() => setOpen(!open)}>

       <CircleIcon src={menuCircleDark}/>
     
        </Button>

      </Wrapper>
    </div>
  );
};

MenuButton.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
};

export default MenuButton;
