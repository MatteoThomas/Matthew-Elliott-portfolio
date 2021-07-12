import React from "react";
import email from "../../img/email_icon2.svg";
import instagram from "../../img/instagram_icon.svg";
import github from "../../img/github_icon.svg";
import linkedin from "../../img/linkedin_icon.png";
export default function Footer() {
  // All functional components must have a return method that contains JSX.
  // We return all the JSX inside a parent element with a className of "container".
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
