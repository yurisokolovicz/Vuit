import React from "react";

import { BsWhatsapp } from "react-icons/bs";
import "./BotaoWhatsapp.css";

function BotaoWhatsapp() {
  return (
    <div className="botao-whatsapp">
      <button>
        <BsWhatsapp /> WhatsApp
      </button>
    </div>
  );
}

export default BotaoWhatsapp;
