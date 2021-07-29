import React from "react";
import email from "../../img/email_icon2.png";
import instagram from "../../img/instagram_icon.png";
import github from "../../img/github_icon.png";
import linkedin from "../../img/linkedin_icon.png";
import "../../styles/Components.css";

export default function Footer() {
  return (
    <div className="footer">
      <a href="mailto:matt.ell@pm.me">
        <img src={email} alt="email" />
      </a>

      <a href="https://github.com/MatteoThomas">
        <img src={github} alt="github" />
      </a>

      <a href="https://www.linkedin.com/in/matthewell/">
        <img src={linkedin} alt="linkedin" />
      </a>

      <a href="https://www.instagram.com/mattycakes512/">
        <img src={instagram} alt="instagram" />
      </a>
    </div>
  );
}
