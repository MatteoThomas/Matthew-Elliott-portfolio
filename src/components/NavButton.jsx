import React from "react";
import { bool, func } from "prop-types";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Button = styled.button`
  color: "#e7dcd8";
  position: fixed;
  top: 1.3rem;
  right: 1.3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 2;
  filter: invert(1);
  transition: all .5s ease-in-out;
/* background-color: aliceblue; */
  :hover {
    color: #1100ff;
  }
/* 
  div {
    width: 2rem;
    height: 0.25rem;  
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
  } */
`;

const NavButton = ({ open, setOpen }) => {

  return (
    <Button open={open} onClick={() => setOpen(!open)}>
      {/* CHANGES ICON WHEN OPEN */}
      {open ? <CloseIcon className="material-icons" style={{fill: "white" }}/> : <MenuIcon className="material-icons md-36" />}
    </Button>
  );
};

NavButton.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
};

export default NavButton;
