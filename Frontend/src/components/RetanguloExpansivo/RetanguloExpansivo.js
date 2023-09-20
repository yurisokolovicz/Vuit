import React, { useState } from "react";

import { GrFormAdd } from "react-icons/gr";
import "./RetanguloExpansivo.css";

function RetanguloExpansivo() {
  const [expanded, setExpanded] = useState(false);

  const toggleExpansion = () => {
    setExpanded(!expanded);
  };

  return (
    <div
      className="retangulo-container"
      style={{
        fontSize: "1rem",
        fontWeight: "400",
        lineHeight: "1.5",
        padding: "5px 10px",
        width: "680px",
        border: "1px solid #ccc",
        marginBottom: "10px",
        cursor: "pointer",
        backgroundColor: "#fff",
        color: "#000",
        borderRadius: "5px",
      }}
      onClick={toggleExpansion}
    >
      <div className="not-expanded">
        <p>Seguro de vida em grupo e acidentes pessoais </p>
        <GrFormAdd className="icon" />
      </div>
      {expanded && (
        <div className="expanded">
          A Vuit Seguros é uma corretora que assessora as empresas, fornecendo
          seguro de vida em grupo e acidentes pessoais, permitindo que
          economizem tempo, esforço e dinheiro.
        </div>
      )}
    </div>
  );
}

export default RetanguloExpansivo;
