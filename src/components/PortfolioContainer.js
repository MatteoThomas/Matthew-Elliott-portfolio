import React, { useState } from "react";

import Nav from "./Nav";

import Webdev from "./pages/Webdev";
import Graphic from "./pages/Graphic";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Fun from "./pages/Fun";
import Resume from "./pages/Resume";
import Footer from "./pages/Footer";
// import Footer from "./components/Footer";

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("Web Development");

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
    if (currentPage === "Resume") {
      return <Resume />;
    }
    return <Fun />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className="portfolioContainer">
      <div>
        {/* We are passing the currentPage from state and the function to update it */}
        <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
        {/* Here we are calling the renderPage method which will return a component  */}
        {renderPage()}

        <Footer />
      </div>
    </div>
  );
}
