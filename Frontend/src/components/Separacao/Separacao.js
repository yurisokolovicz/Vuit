import React from "react";

import { AiOutlineDown } from "react-icons/ai";
import "./Separacao.css";

const Separacao = () => {
  return (
    <div className="linha-container">
      <div className="linha-esquerda"></div>
      <AiOutlineDown className="AiOutlineDown" />
      <div className="linha-direita"></div>
    </div>
  );
};

export default Separacao;
