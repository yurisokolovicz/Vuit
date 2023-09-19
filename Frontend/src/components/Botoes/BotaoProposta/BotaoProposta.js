import React from "react";

import { BsWhatsapp } from "react-icons/bs";
import "./BotaoProposta.css";

function BotaoProposta(props) {
  return (
    <div className="botao-proposta">
      <button>
        <BsWhatsapp /> {props.texto}
      </button>
    </div>
  );
}

export default BotaoProposta;
