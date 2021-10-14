import Navbar from "../components/Nav";
import Footer from "../components/Footer";

import About from "../components/About";
import Webdev from "../components/Webdev";
import Graphic from "../components/Graphic";
import Resume from "./Resume";
import Contact from "./Contact";

import styled from "styled-components";
import React, { useState } from "react";


const Container = styled.div`
    /* margin-left:auto;
    margin-right:auto;
    width: 100vw; */
`
const Home = () => {
  
  const [currentPage, setCurrentPage] = useState("About Me");

  const renderPage = () => {
    if (currentPage === "About Me") {
      return <About />;
    }
    if (currentPage === "Web Development") {
      return <Webdev />;
    }
    if (currentPage === "Graphic Design") {
      return <Graphic />;
    }
    if (currentPage === "Contact") {
      return <Contact />;
    }
    return <Resume />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
  <div>
    <Container>
        <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
          {renderPage()}
          {/* <Webdev /> */}
        {/* <Footer /> */}
        <Webdev/>
        <Graphic/>
        </Container>
        </div>
  );
}

export default Home;
