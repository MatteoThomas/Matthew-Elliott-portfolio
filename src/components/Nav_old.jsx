import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: #e7e7e7;
`
const Wrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
height: 7rem;
`

const Nav = styled.div`
display: flex;
font-family: syne;
font-weight: 700;
font-size: .8rem;
`

const NavItem = styled.div`
margin: 0rem 1rem 0rem 1rem;
`

const Navbar = ({ currentPage, handlePageChange }) => {
  return ( 
    <Container>
     <Wrapper>

      <Nav>

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
              Web
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
              Graphic
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

        </Wrapper>
      </Container>
      
   
  );
}

export default Navbar;
