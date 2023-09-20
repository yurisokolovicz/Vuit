import React from "react";

import "./ListaReutilizavel.css";

const ListaReutilizavel = ({ listaDoBackEnd, titulo, uppercase }) => {
  const listaContainerClass = uppercase
    ? "lista-com-hifens uppercase"
    : "lista-com-hifens";

  return (
    <div className="lista-reutilizavel-container">
      {titulo && <p>{titulo}</p>}
      <ul className={listaContainerClass}>
        {listaDoBackEnd.map((lista, index) => (
          <li key={index}>{lista}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListaReutilizavel;
