import React from "react";

import credImage from "../../../src/img/cred/block_images/vuit-img.png";
import IntroCred from "../../components/Intro/IntroCred";
import ContatosCred from "../../components/Contatos/ContatosCred";
import BotaoWhatsapp from "../../components/Botoes/BotaoWhatsapp/BotaoWhatsapp";
import "./Cred.css";
import BotaoTelefone from "../../components/Botoes/BotaoWhatsapp/BotaoTelefone";

const Cred = () => {
  return (
    <div id="cred">
      <div className="container-cred">
        <img src={credImage} alt="Background" />
        <p>CRÉDITO CONSGINADO ÁGIL E SEM BUROCRACIA</p>
        <p>Icones redes sociais</p>
        <IntroCred />
        <p> (Criar) componente de separacao _______ ^ ______</p>
        <ContatosCred />
        <BotaoWhatsapp />
        <BotaoTelefone />
        <p> (Criar) componente de separacao _______ ^ ______</p>
      </div>
    </div>
  );
};

export default Cred;
