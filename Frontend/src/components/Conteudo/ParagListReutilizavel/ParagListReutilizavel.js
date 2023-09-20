import React from "react";

import "./ParagListReutilizavel.css";

const ParagListReutilizavel = ({ listaDoBackEnd, titulo }) => {
  return (
    <div className="paraglista-reutilizavel-container">
      {titulo && <p>{titulo}</p>}
      <ul className="lista-com-hifens">
        {listaDoBackEnd.map((lista, index) => (
          <li key={index}>{lista}</li>
        ))}
      </ul>
    </div>
  );
};

export default ParagListReutilizavel;
