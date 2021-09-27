import React from "react";
import "../../styles/Components.css";
import crowlers from "../../img/crowlers.png";
import cards from "../../img/LOFT718.png";
import records from "../../img/wpRECORDS.jpg";
import recovery from "../../img/recoverybanner.jpg";
import searsucker from "../../img/searsucker.png";

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
      <div id="gdimg">
        <a href="https://matteoelliott.myportfolio.com/gd">
          <img id="crowlers" src={crowlers} alt="crowlers" />
        </a>
        <a href="https://matteoelliott.myportfolio.com/whiskey-pickle">
          <img id="records" src={records} alt="records" />
        </a>
        <a href="https://matteoelliott.myportfolio.com/recovery">
          <img id="recovery" src={recovery} alt="recovery banner" />
        </a>
        <a href="https://matteoelliott.myportfolio.com/loft-718">
          <img id="cards" src={cards} alt="crowlers" />
        </a>
        <a href="https://matteoelliott.myportfolio.com/searsucker">
          <img id="searsucker" src={searsucker} alt="searcucker" />
        </a>
        <div className="panel">
          <p></p>
        </div>
      </div>
    </div>
  );
}

export default Graphic;
