import React from "react";

import credImage from "../../../src/img/cred/block_images/vuit-img.png";
import IntroBeneficios from "../../components/Intro/IntroBeneficios";
import ContatosBeneficios from "../../components/Contatos/ContatosBeneficios";
import BotaoWhatsapp from "../../components/Botoes/BotaoWhatsapp/BotaoWhatsapp";
import BotaoTelefone from "../../components/Botoes/BotaoTelefone/BotaoTelefone";
import Separacao from "../../components/Separacao/Separacao";
import "./Beneficios.css";

const Beneficios = () => {
  return (
    <div id="beneficios">
      <div className="container-beneficios">
        <img src={credImage} alt="Background" />
        <p>SUA EMPRESA MUITO MAIS SEGURA</p>
        <IntroBeneficios />
        <Separacao />
        <p>Add Vuit Beneficios</p>
        <Separacao />
        <p>Por que escolher a Vuit</p>
        <Separacao />
        <p>Atuacao Nacional</p>
        <Separacao />
        <p>Outros Servicos</p>
        <Separacao />
        <ContatosBeneficios />
        <BotaoWhatsapp />
        <BotaoTelefone />
        <Separacao />
      </div>
    </div>
  );
};

export default Beneficios;
