import React from "react";
import * as Tone from "tone";
import "../../styles/Components.css";

function Fun() {
  const synth = new Tone.PolySynth().toDestination();
  function playNote(note) {
    synth.triggerAttackRelease(`${note}4`, "1n");
  }

  return (
    <div className="fun">
      <h1>Fun Projects</h1>

      <div className="pad">
        <p>Drum Pads (under construction...)</p>

        <div className="box pad-1">
          R<br />
          kick
        </div>
        <div className="box pad-2" data-code="{84}">
          T<br />
          snare
        </div>
        <div className="box pad-3" data-code="{89}">
          Y<br />
          clap
        </div>
        <div className="box pad-4" data-code="{85}">
          U<br />
          hihat
        </div>
        <div className="box pad-5" data-code="{70}">
          F<br />
          shaker
        </div>
        <div className="box pad-6" data-code="{71}">
          G<br />
          openhat
        </div>
        <div className="box pad-7" data-code="{72}">
          H<br />
          rim
        </div>
        <div className="box pad-8" data-code="{74}">
          J<br />
          fx
        </div>
        <div className="box pad-9" data-code="{86}">
          V<br />
          pad
        </div>
        <div className="box pad-10" data-code="{66}">
          B<br />
          synth
        </div>
        <div className="box pad-11" data-code="{78}">
          N<br />
          bass
        </div>
        <div className="box pad-12" data-code="{77}">
          M<br />
          vox
        </div>
      </div>

      <div className="keys">
        <p>Keys</p>
      </div>
      <div className="note-wrapper">
        <button className="note" onClick={() => playNote("D")}>
          D
        </button>
        <button className="note" onClick={() => playNote("F")}>
          F
        </button>
        <button className="note" onClick={() => playNote("A")}>
          A
        </button>
        <button className="note" onClick={() => playNote("C")}>
          C
        </button>
        <button className="note" onClick={() => playNote("E")}>
          E
        </button>
      </div>
    </div>
  );
}

export default Fun;
