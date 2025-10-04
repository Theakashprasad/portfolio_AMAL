import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "ELECTRICAL ENGINEER",
          "ELECTRICAL BIM MODELLER",
          "REVIT & AUTOCAD SPECIALIST",
          "CLASH DETECTION EXPERT",
          "SUBSTATION CONSTRUCTION PROFESSIONAL",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
