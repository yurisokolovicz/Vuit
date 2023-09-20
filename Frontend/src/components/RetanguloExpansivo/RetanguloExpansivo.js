import React, { useState } from "react";

import { GrFormAdd } from "react-icons/gr";
import "./RetanguloExpansivo.css";

function RetanguloExpansivo({ titulo, conteudo }) {
  const [expanded, setExpanded] = useState(false);

  const toggleExpansion = () => {
    setExpanded(!expanded);
  };

  return (
    <div
      className={`retangulo-container ${expanded ? "expanded" : ""}`}
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
        <p>{titulo}</p>
        <GrFormAdd className={`icon ${expanded ? "rotate-icon" : ""}`} />
      </div>
      {expanded && <div className="expanded">{conteudo}</div>}
    </div>
  );
}

export default RetanguloExpansivo;
