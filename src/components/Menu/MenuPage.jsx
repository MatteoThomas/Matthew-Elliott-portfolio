
import React from "react";
import styled from "styled-components"
import { bool } from 'prop-types';
import { mobile } from "../../js/responsive"
import  { Outline }  from "../../styles/Styles";
import GitHubIcon from '@mui/icons-material/GitHub';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import Three from "../Three/Three";
import { Link } from "react-scroll";

const Container = styled.div`
  background-color:  ${({ theme }) => theme.background};
  height:100vh;
  width:100vw;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-content: center;
  filter: ${({ open }) => open ?  'opacity: 1' : 'opacity 0'};
  transform: ${({ open }) => open ?  'translateX(100%)' : 'translateX(0%)'};
  /* transition: transform .7s ease-in-out; */
  transition: all .3s cubic-bezier(0,.23,1,.57);
  -webkit-transition: all .3s cubic-bezier(0,.23,1,.57);
  display: block;
  position: fixed;
  z-index: 10;

  a {
    transition: transform .8s ease-in-out;
    cursor: pointer;
    font-family: 'Nunito Sans', sans-serif;
    font-weight: 900;
    font-size: clamp(2rem, 10vw, 5.7rem);
    letter-spacing: .01rem;
    line-height:7rem;
    text-align: center;
    transition: all .5s ease;
    color: ${({ theme }) => theme.text};
    ${mobile({ lineHeight: "2rem",  paddingRight:".6rem"})}
    
    &:hover{
      color: ${({ theme }) => theme.accent};
      border: none;
    }
    &::after {
      opacity: 0;
    }
  }
  `

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 3rem;
  ${mobile({ paddingTop: "6rem"})}
  height: 100vh;
  `

const ThreeWrapper = styled.div`
  position: absolute;
  top:0;
  pointer-events: none;
`

const Icons = styled.div`
  display: flex;
  justify-content: center;
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

  const clickHandler = (page)  => {
    handlePageChange(page);
    setOpen(!open)

  }
    return (
    

    <Container className="blur" open={open} onClick={() =>  setOpen(!open)}>
      <Wrapper>

         <Link
          to="about"
          href="#about"
          onClick={(e) => clickHandler(e, "About" )}
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
        onClick={(e) => clickHandler(e, "Web Development" )}
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
        onClick={(e) => clickHandler(e, "Graphic Design" )}
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
        onClick={(e) => clickHandler(e, "Graphic Design" )}
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
        onClick={(e) => clickHandler(e, "Contact" )}
        className={
          currentPage === "Contact" ? "" : ""
        }
        >
           <a href="#0"> 
           <Outline>contact </Outline>me
            </a>
         
            </Link>

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

      {/* <A href="https://matteoelliott.myportfolio.com/">
        <Icon>
        <ImageIcon style={{ fontSize: "1.5rem"}}/>
        </Icon>
      </A> */}
 
    </Icons>
</Wrapper>
          

<ThreeWrapper>
  <Three/>
</ThreeWrapper>
    </Container>

)}    

MenuBar.propTypes = {
  open: bool.isRequired,
}

    
    export default MenuBar;