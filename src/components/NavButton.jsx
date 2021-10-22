import React from "react";
import { bool, func } from "prop-types";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Button = styled.button`
  position: fixed;
  top: 0rem;
  right: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 2;

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: aqua;
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
  }
`;

const NavButton = ({ open, setOpen }) => {

  return (
    <Button open={open} onClick={() => setOpen(!open)}>
      {open ? <CloseIcon /> : <MenuIcon />}
    </Button>
  );
};

NavButton.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
};

export default NavButton;
