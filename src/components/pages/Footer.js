import React from "react";

export default function Footer() {
  // All functional components must have a return method that contains JSX.
  // We return all the JSX inside a parent element with a className of "container".
  return (
    <div className="footer">
      <a href="mailto:matt.ell@pm.me">Email</a>
      <a href="https://github.com/MatteoThomas">Github</a>
      <a href="https://www.instagram.com/mattycakes512/">Instagram</a>
    </div>
  );
}
