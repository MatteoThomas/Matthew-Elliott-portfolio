import React, { useState } from "react";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import GlobalStyles from '../styles/globalStyles';
import { lightTheme, darkTheme } from "../styles/globalStyles"
import LightModeButton from "./LightModeButton"
import { useLightMode } from "./useLightMode";
import AboutSpring from "../components/About/AboutSpring";
import WebdevSpring from "../components/WebDev/WebdevSpring";
import GraphicSpring from "../components/Graphic/GraphicSpring";
import ContactSpring from "../components/Contact/ContactSpring";
import SplashSpring from '../components/Splash/Splash'
import MenuPage from "../components/Menu/MenuPage";
import MenuButton from "../components/Menu/MenuButton";


const Container = styled.div`
`
const ComponentsWrapper = styled.div`
`
const ButtonWrapper = styled.div`
  position:fixed;
  top:0;
  right:0;
  z-index:133;
`
const Home = () => {

  const [open, setOpen] = useState(true);
  const [currentPage, setCurrentPage] = useState("SplashSpring");
  const [theme, toggleTheme] = useLightMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;
  const handlePageChange = (page) => setCurrentPage(page);
  console.log(theme)
  return (
      <div>
        <ThemeProvider theme={themeMode}>
          <GlobalStyles />
          <Container>
            <LightModeButton theme={theme} toggleTheme={toggleTheme} /> 

            <ButtonWrapper>
              <MenuButton open={open} setOpen={setOpen} />    
            </ButtonWrapper>

            <MenuPage 
            open={open} 
            setOpen={setOpen} 
            currentPage={currentPage} 
            handlePageChange={handlePageChange}/>
            
            <SplashSpring theme={theme}/>
            <ComponentsWrapper>
              
            <AboutSpring/>
            <WebdevSpring/>
            <GraphicSpring/>
            <ContactSpring/>

            </ComponentsWrapper>
      
          </Container>
        </ThemeProvider>
      </div>
  );
}

export default Home;
