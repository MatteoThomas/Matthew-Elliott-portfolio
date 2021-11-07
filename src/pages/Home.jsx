import Menu from "../components/Nav";
import NavButton from "../components/NavButton"

import About from "../components/About";
import Webdev from "../components/Webdev";
import Graphic from "../components/Graphic";
import Resume from "../components/Resume";
import Contact from "../components/Contact";
import styled from "styled-components";
import React, { useState } from "react";


const Container = styled.div`
background-color: black;
color:#e7dcd8;
`
const Home = () => {
  
  const [open, setOpen] = useState(false);

  return (
      <div>
      <Container>
      
          <NavButton open={open} setOpen={setOpen} />
          <Menu open={open} setOpen={setOpen}/>
       
          <About />
          <Webdev />
          <Graphic />
          <Resume />
          <Contact />
          {/* <Footer /> */}
        </Container>
        </div>
  );
}

export default Home;
