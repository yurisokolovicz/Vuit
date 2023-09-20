import React, { useState } from "react";

function RetanguloExpansivo() {
  const [expanded, setExpanded] = useState(false);

  const toggleExpansion = () => {
    setExpanded(!expanded);
  };

  return (
    <div
      style={{
        width: "680px",
        border: "1px solid #ccc",
        padding: "10px",
        marginBottom: "10px",
        cursor: "pointer",
        backgroundColor: "#fff",
        color: "#000",
        borderRadius: "5px",
      }}
      onClick={toggleExpansion}
    >
      <div>Seguro de vida em grupo e acidentes pessoais</div>
      {expanded && (
        <div>
          A Vuit Seguros é uma corretora que assessora as empresas, fornecendo
          seguro de vida em grupo e acidentes pessoais, permitindo que
          economizem tempo, esforço e dinheiro.
        </div>
      )}
    </div>
  );
}

export default RetanguloExpansivo;
