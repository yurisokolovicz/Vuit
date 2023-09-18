import React from "react";

import credImage from "../../../src/img/cred/block_images/vuit-img.png";
import IntroBeneficios from "../../components/Intro/IntroBeneficios";
import ContatosBeneficios from "../../components/Contatos/ContatosBeneficios";
import BotaoWhatsapp from "../../components/Botoes/BotaoWhatsapp/BotaoWhatsapp";
import "./Beneficios.css";

const Beneficios = () => {
  return (
    <div id="beneficios">
      <div className="container-beneficios">
        <img src={credImage} alt="Background" />
        <p>SUA EMPRESA MUITO MAIS SEGURA</p>
        <IntroBeneficios />
        <p> (Criar) componente de separacao _______ ^ ______</p>
        <ContatosBeneficios />
        <BotaoWhatsapp />
        <p> (Criar) componente de separacao _______ ^ ______</p>
      </div>
    </div>
  );
};

export default Beneficios;
