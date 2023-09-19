import React from "react";

import { FaPhoneFlip } from "react-icons/fa6";
import "./BotaoTelefone.css";

function BotaoTelefone() {
  return (
    <div className="botao-telefone">
      <button>
        <FaPhoneFlip /> Telefone
      </button>
    </div>
  );
}

export default BotaoTelefone;
