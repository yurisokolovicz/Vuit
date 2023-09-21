import React from "react";

import "./ParagReutilizavel.css";

const ParagReutilizavel = ({ paragrafo }) => {
  return (
    <div className="parag-reutilizavel-container">
      {paragrafo.map((text, index) => (
        <p key={index}>{text}</p>
      ))}
    </div>
  );
};

export default ParagReutilizavel;
