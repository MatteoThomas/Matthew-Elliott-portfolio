import React from "react";
import "../../styles/Components.css";

function Graphic() {
  // All functional components must have a return method that contains JSX.
  // We return all the JSX inside a parent element with a className of "container".

  return (
    <div className="graphic">
      <h1>Graphic Design</h1>
      <h2>Photoshop / Illustrator / Blender</h2>
      <p>I have experience in online promotion, print, and product branding.</p>

      <button className="accordion">
        <a href="https://matteoelliott.myportfolio.com/work">
          Check it out here!
        </a>
      </button>
      <div className="panel">
        <p></p>
      </div>
    </div>
  );
}

export default Graphic;
