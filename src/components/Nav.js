import React from "react";
import "../styles/Nav.css";

function Nav({ currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a
          href="#about"
          onClick={() => handlePageChange("About Me")}
          // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === "About" ? "nav-link active" : "nav-link"}
        >
          About Me
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#webdev"
          onClick={() => handlePageChange("Web Development")}
          // This is a conditional (ternary) operator that checks to see if the current page is "Web Development"
          // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
          className={
            currentPage === "Web Development" ? "nav-link active" : "nav-link"
          }
        >
          Web Development
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#graphic"
          onClick={() => handlePageChange("Graphic Design")}
          // Check to see if the currentPage is `Graphic Design`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={
            currentPage === "Graphic Design" ? "nav-link active" : "nav-link"
          }
        >
          Graphic Design
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#contact"
          onClick={() => handlePageChange("Contact")}
          // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === "Contact" ? "nav-link active" : "nav-link"}
        >
          Contact
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#resume"
          onClick={() => handlePageChange("Resume")}
          // Check to see if the currentPage is `Resume`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === "Resume" ? "nav-link active" : "nav-link"}
        >
          Resume
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#fun"
          onClick={() => handlePageChange("Fun")}
          // Check to see if the currentPage is `Fun`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === "Fun" ? "nav-link active" : "nav-link"}
        >
          Fun
        </a>
      </li>
    </ul>
  );
}

export default Nav;
