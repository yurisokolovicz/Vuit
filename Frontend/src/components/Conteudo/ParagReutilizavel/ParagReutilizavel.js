import React from "react";

import "./ParagReutilizavel.css";

const ParagReutilizavel = ({ paragrafoDoBackEnd }) => {
  return (
    <div className="parag-reutilizavel-container">
      {paragrafoDoBackEnd.map((text, index) => (
        <p key={index}>{text}</p>
      ))}
    </div>
  );
};

export default ParagReutilizavel;
