import React, { useState } from "react";
import styled from "styled-components"
import MenuPage from "../components/Menu/MenuPage";
import MenuButton from "../components/Menu/MenuButton"
import AboutSpring from "../components/About/AboutSpring";
import WebdevSpring from "../components/WebDev/WebdevSpring";
import GraphicSpring from "../components/GraphicSpring";
import ContactSpring from "../components/Contact/ContactSpring";
import ResumeSpring from "../components/About/ResumeSpring";
import SplashSpring from '../components/Splash/Splash'

const Container = styled.div`
   background: ${({ theme }) => theme.background};
`
const ButtonWrapper = styled.div`

`
const RenderedPage = styled.div``

export default function Router() {
//NAV ROUTER
const [currentPage, setCurrentPage] = useState("SplashSpring");
//MENU
const [open, setOpen] = useState(false);

const renderPage = () => {
    if (currentPage === "About") {
      return <AboutSpring />;
    }
    if (currentPage === "Web Development") {
      return <WebdevSpring />;
    }
    if (currentPage === "Graphic Design") {
      return <GraphicSpring />;
    }
    if (currentPage === "Contact") {
      return <ContactSpring />;
    }
    // if (currentPage === "Three") {
    //   return <Three />;
    // }
    if (currentPage === "Resume") {
      return <ResumeSpring />;
    }
    return <SplashSpring />;
  };

const handlePageChange = (page) => setCurrentPage(page);

  return (
    <Container >
      <div>
        <ButtonWrapper>
           <MenuButton open={open} setOpen={setOpen} />    
        </ButtonWrapper>
        <MenuPage open={open} setOpen={setOpen} currentPage={currentPage} handlePageChange={handlePageChange}/>
        {/* <Navbar currentPage={currentPage} handlePageChange={handlePageChange}/> */}
        <RenderedPage>
        {renderPage()}
        </RenderedPage>
      </div>
    </Container>
  );
}