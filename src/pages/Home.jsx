import Menu from "../components/Nav";
import NavButton from "../components/NavButton"
import Footer from "../components/Footer";
import About from "../components/About";
import Webdev from "../components/Webdev";
import Graphic from "../components/Graphic";
import Resume from "../components/Resume";
import Contact from "../components/Contact";
import styled from "styled-components";
import React, { useState } from "react";


const Container = styled.div`
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
          <Footer />
        </Container>
        </div>
  );
}

export default Home;
