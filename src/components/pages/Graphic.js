import React from "react";
import "../../styles/Components.css";
import crowlers from "../../img/crowlers.png";
import cards from "../../img/LOFT718.png";
import records from "../../img/wpRECORDS.jpg";
import recovery from "../../img/recoverybanner.jpg";

function Graphic() {
  return (
    <div className="graphic">
      {/* <h1>Graphic Design</h1> */}
      <h2>Photoshop / Illustrator / Blender / XD</h2>

      <p>I have experience in online promotion, print, and product branding.</p>
      <button className="accordion">
        <a href="https://matteoelliott.myportfolio.com">
          See my portfolio here
        </a>
      </button>

      <img id="crowlers" src={crowlers} alt="crowlers" />
      <img id="records" src={records} alt="records" />
      <img id="recovery" src={recovery} alt="recovery banner" />
      <img id="cards" src={cards} alt="crowlers" />

      <div className="panel">
        <p></p>
      </div>
    </div>
  );
}

export default Graphic;
