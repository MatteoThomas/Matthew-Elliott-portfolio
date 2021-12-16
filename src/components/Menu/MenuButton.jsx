import React from "react";
import { bool, func } from "prop-types";
import styled, { keyframes } from "styled-components";
import {mobile} from "../../js/responsive"
import { Wrapper } from "../../styles/Styles.jsx"
import menuCircleDark from "../../img/menu-circular-dark.png"

const Button = styled.button`
  overflow: hidden;
  color: ${({ theme }) => theme.background};
  margin: 1rem 2rem 0 0;
  ${mobile({ margin: "-2rem 2rem 0 0"})}
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  z-index: 111;
  transition: all .2s cubic-bezier(.3,.81,1,.82);
  -webkit-transition: all .6s cubic-bezier(.84,.46,.86,1.2);
  overflow: hidden;
  
  &:hover {

   transform: scale(.95);
   transition: all .2s cubic-bezier(.3,.81,1,.82);
  -webkit-transition: all .3s cubic-bezier(.84,.46,.86,1.2);

}

  &:active {
    transform: scale(1.05);
    transition: all .2s cubic-bezier(.3,.81,1,.82);
  -webkit-transition: all 1s cubic-bezier(.84,.46,.86,1.2);
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
  animation: ${rotate} 60s linear infinite;
  transition: all 2s ease-in-out;
  z-index: 200;
  filter: invert( ${({ theme }) => theme.invert} );

  /* &:hover {
   transform: scale(.8)
    transition: all 2s ease-in-out;
  } */

`

const MenuButton = ({ open, setOpen }) => {
  
  console.log(open)
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
