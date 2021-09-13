import React from "react";
import "../styles/Nav.css";
// import dolphin from "../img/dolphin_portfolio_sm.svg";

function Nav({ currentPage, handlePageChange }) {
  return (
    <div className="parent">
      {/* dolphin landing */}
      {/* <div
        className="dolphin"
        style={{
          backgroundImage: `url(${dolphin})`,
          height: "500px",
          width: "670px",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundSize: "contain",
          backgroundRepeat: "none",
        }}
      >

      </div> */}
      <div className="nav">
        <ul className="nav nav-tabs">
          <h1>
            Matthew <span>Elliott</span>
          </h1>
          <li className="nav-item">
            <a
              href="#about"
              onClick={() => handlePageChange("About Me")}
              className={
                currentPage === "About" ? "nav-link active" : "nav-link"
              }
            >
              About Me
            </a>
          </li>
          <li className="nav-item">
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
          </li>
          <li className="nav-item">
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
          </li>
          <li className="nav-item">
            <a
              href="#resume"
              onClick={() => handlePageChange("Resume")}
              className={
                currentPage === "Resume" ? "nav-link active" : "nav-link"
              }
            >
              Resume
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#contact"
              onClick={() => handlePageChange("Contact")}
              className={
                currentPage === "Contact" ? "nav-link active" : "nav-link"
              }
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
