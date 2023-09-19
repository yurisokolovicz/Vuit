import React from "react";

import "./ListaReutilizavel.css";

const ListaReutilizavel = ({ listaDoBackEnd, titulo }) => {
  return (
    <div className="lista-reutilizavel-container">
      {titulo && <p>{titulo}</p>}
      <ul className="lista-com-hifens">
        {listaDoBackEnd.map((lista, index) => (
          <li key={index}>{lista}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListaReutilizavel;
