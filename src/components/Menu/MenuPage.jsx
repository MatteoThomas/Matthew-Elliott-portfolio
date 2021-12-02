
import React, { useState } from "react";
import styled from "styled-components"
import { bool } from 'prop-types';
import { mobile } from "../../js/responsive"
import  { Outline }  from "../../styles/Styles";
import GitHubIcon from '@mui/icons-material/GitHub';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import ImageIcon from '@mui/icons-material/Image';
import Three from "../Three/Three"
import { Link } from "react-scroll"

const Container = styled.div`
  background-color:  ${({ theme }) => theme.background};
  height:100vh;
  width:100vw;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-content: center;
  transform: ${({ open }) => open ?  'translateX(0%)' : 'translateX(100%)'};
  display: ${({ open }) => open ?  'block' : 'none'};
  position: fixed;
  z-index: 10;
  transition: transform 1.8s ease-in-out;
  a {
    transition: transform .8s ease-in-out;
    cursor: pointer;
    font-family: 'Nunito Sans', sans-serif;
    font-weight: 900;
    font-size: clamp(2rem, 10vw, 5.7rem);
    letter-spacing: .01rem;
    line-height: 4rem;
    text-align: right;
    transition: all .5s ease;
    color: ${({ theme }) => theme.text};
    padding-right: 1rem;
    ${mobile({ lineHeight: "2rem",  paddingRight:".6rem"})}
    border: none;

    &:hover{
      color: ${({ theme }) => theme.accent};
    }
    &::after {
      opacity: 0;
    }
  }
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 13rem;
  ${mobile({ paddingTop: "6rem"})}
  height: 60vh;
`

const ThreeWrapper = styled.div`
  position: absolute;
  top:0;
  pointer-events: none;
`

const NavTab = styled.div`
  width: 100%;
  line-height:3vh;
  text-decoration: none;
  text-align: center;
  padding-bottom: 2.5rem;
  transition: all 1s ease;
  
  &:hover{
    color: ${({ theme }) => theme.accent};
  transform: scale(1.05);
  transition: all 1s ease;
  
  &::after {
    opacity: 0;
  }}
`

const Icons = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  border-top: 2px solid ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.background};
`

const Icon = styled.div`
  color: ${({ theme }) => theme.text};
  transition: all .5s ease;
  margin: 1rem 1rem 1rem 1rem;
  ${mobile({ margin: " 0 .5rem 0rem .5rem"})}
`

const A = styled.a`
  transition: all .3s ease-in-out;
  &:hover{
    transform: scale(1.2);
  }
  &::after {
    opacity: 0;
  }
`

function MenuBar({ open, setOpen ,currentPage, handlePageChange }) {

    return (
    

    <Container className="blur" open={open} onClick={() =>  setOpen(!open)}>
      <Wrapper>

         <Link
          to="about"
              href="#about"
              onClick={() => handlePageChange("About")}
              className={
                currentPage === "About" ?  "" : ""           
              }
           >
              <a href="#0"> 
      
              about

              </a>
              </Link>
                
        <Link
        to="webdev"
        href="#webdev"
        onClick={() => handlePageChange("Web Development")}
        className={
          currentPage === "Web Development" ?  "" : ""
        }
        >
           <a href="#0"> 
           <Outline>wev </Outline>development
            </a>
            </Link>

            <Link
            to="graphic"
        href="#graphic"
        onClick={() => handlePageChange("Graphic Design")}
        className={
          currentPage === "Graphic Design" ? "" : ""
        }
        >
           <a href="#0"> 
           <Outline>graphic </Outline>design
            </a>
            </Link>

            <Link
            to="resume"
        href="#resume"
        onClick={() => handlePageChange("Resume")}
        className={
          currentPage === "Resume" ? "" : ""
        }
        >
           <a href="#0"> 
        resume
        </a>
            
          
        </Link>
       
        <Link
             to="contact"
       
        href="#contact"
        onClick={() => handlePageChange("Contact")}
        className={
          currentPage === "Contact" ? "" : ""
        }
        >
           <a href="#0"> 
           <Outline>contact </Outline>me
            </a>
         
            </Link>

</Wrapper>
          
    <Icons>
      
      <A href="mailto:matt.ell@pm.me">
      <Icon>
        <MailOutlineIcon href="mailto:matt.ell@pm.me" style={{ fontSize: "1.5rem"}}/>
      </Icon>
      </A>

      <A href="https://github.com/MatteoThomas">
        <Icon>
        <GitHubIcon style={{ fontSize: "1.5rem"}}/>
        </Icon>
      </A>

      <A href="https://www.linkedin.com/in/matthewell/">
        <Icon>
        <LinkedInIcon style={{ fontSize: "1.5rem"}}/>
        </Icon>
      </A>

      <A href="https://www.instagram.com/mattycakes512/">
        <Icon>
        <InstagramIcon style={{ fontSize: "1.5rem"}}/>
        </Icon>
      </A>

      <A href="https://matteoelliott.myportfolio.com/">
        <Icon>
        <ImageIcon style={{ fontSize: "1.5rem"}}/>
        </Icon>
      </A>
 
    </Icons>

<ThreeWrapper>
  <Three/>
</ThreeWrapper>
    </Container>

)}    

MenuBar.propTypes = {
  open: bool.isRequired,
}

    
    export default MenuBar;