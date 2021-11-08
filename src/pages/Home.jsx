import React, { useState } from "react";

import Menu from "../components/Nav";
import NavButtons from "../components/NavButtons"

import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import GlobalStyles from '../globalStyles';
import { lightTheme, darkTheme } from "../globalStyles"

import LightButton from "../components/LightModeButton"
import { useLightMode } from "../useLightMode";

import About from "../components/About";
import Webdev from "../components/Webdev";
import Graphic from "../components/Graphic";
import Resume from "../components/Resume";
import Contact from "../components/Contact";


const Container = styled.div`


`
const Nav = styled.div`


`
const Home = () => {
  
  const [open, setOpen] = useState(false);

  const [theme, toggleTheme] = useLightMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (
      <div>
      <ThemeProvider theme={themeMode}>
        <GlobalStyles />
      <Container>
        <LightButton theme={theme} toggleTheme={toggleTheme}/>
      <Nav>
          <NavButtons open={open} setOpen={setOpen} />
          <Menu open={open} setOpen={setOpen}/>
       </Nav>
          <About />

          <Webdev />

          <Graphic />
          <Resume />
          <Contact />
        </Container>
        </ThemeProvider>
        </div>
  );
}

export default Home;
