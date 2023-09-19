import React from "react";

import { FaPhoneFlip } from "react-icons/fa6";
import "./BotaoBaixePdf.css";

function BotaoBaixePdf() {
  return (
    <div className="botao-baixepdf">
      <button>
        <FaPhoneFlip /> Baixe PDF apresentação Tudo na Vuit!
      </button>
    </div>
  );
}

export default BotaoBaixePdf;
