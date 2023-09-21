import React from "react";

import "./ParagListReutilizavel.css";

const ParagListReutilizavel = ({ titulo, conteudo }) => {
  return (
    <div className="paraglista-reutilizavel-container">
      {titulo && <p>{titulo}</p>}
      <ul className="lista-com-hifens">
        {Array.isArray(conteudo) ? (
          conteudo.map((lista, index) => <li key={index}>{lista}</li>)
        ) : (
          <li>{conteudo}</li>
        )}
      </ul>
    </div>
  );
};

export default ParagListReutilizavel;
