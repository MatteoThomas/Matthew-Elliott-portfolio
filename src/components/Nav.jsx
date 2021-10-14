import React from "react";
import styled from "styled-components";
import GlobalStyles from '../GlobalStyles';

const Container = styled.div`

`
const Wrapper = styled.div`

display: flex;
align-items: center;
justify-content: space-between;
`;


const Left = styled.div`

`

const Title = styled.h2`
    color: black;
    font-family: 'Noto Sans Mono', monospace;
    font-size: 1rem;
`
const Center = styled.div`
`

const Nav = styled.div`
display: flex;
`

const NavItem = styled.div`
margin: 0rem 1rem 0rem 1rem;
`


const Right = styled.div`
`


const Navbar = ({ currentPage, handlePageChange }) => {
  return (
   
    <Container>
     <Wrapper>
  
           <Title>
            Matthew Elliott
          </Title>
     
    

      <Nav>

          <NavItem>
            <a
              href="#about"
              onClick={() => handlePageChange("About Me")}
              className={
                currentPage === "About" ? "nav-link active" : "nav-link"
              }
            >
              About Me
            </a>
          </NavItem>
          <NavItem>
            <a
              href="#webdev"
              onClick={() => handlePageChange("Web Development")}
              className={
                currentPage === "Web Development"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Web Development
            </a>
          </NavItem>
          <NavItem>
            <a
              href="#graphic"
              onClick={() => handlePageChange("Graphic Design")}
              className={
                currentPage === "Graphic Design"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Graphic Design
            </a>
          </NavItem>
          <NavItem>
            <a
              href="#resume"
              onClick={() => handlePageChange("Resume")}
              className={
                currentPage === "Resume" ? "nav-link active" : "nav-link"
              }
            >
              Resume
            </a>
          </NavItem>
          <NavItem>
            <a
              href="#contact"
              onClick={() => handlePageChange("Contact")}
              className={
                currentPage === "Contact" ? "nav-link active" : "nav-link"
              }
            >
              Contact
            </a>
          </NavItem>
       

        </Nav>

        

!
  
        </Wrapper>
      </Container>
      
   
  );
}

export default Navbar;
