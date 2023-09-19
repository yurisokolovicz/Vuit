import React from "react";

import credImage from "../../../src/img/cred/block_images/vuit-img.png";
import IntroCred from "../../components/Intro/IntroCred";
import ContatosCred from "../../components/Contatos/ContatosCred";
import BotaoWhatsapp from "../../components/Botoes/BotaoWhatsapp/BotaoWhatsapp";
import BotaoTelefone from "../../components/Botoes/BotaoWhatsapp/BotaoTelefone";
import Separacao from "../../components/Separacao/Separacao";
import "./Cred.css";

const Cred = () => {
  return (
    <div id="cred">
      <div className="container-cred">
        <img src={credImage} alt="Background" />
        <p>CRÉDITO CONSGINADO ÁGIL E SEM BUROCRACIA</p>
        <p>Icones redes sociais</p>
        <IntroCred />
        <Separacao />
        <p>Add Vuit Cred</p>
        <Separacao />
        <p>Por que escolher a Vuit</p>
        <Separacao />
        <p>Atuacao Nacional</p>
        <p>Parceria Comercial</p>
        <Separacao />
        <p>Solicite uma proposta Vuit Cred</p>
        <Separacao />
        <ContatosCred />
        <BotaoWhatsapp />
        <BotaoTelefone />
        <Separacao />
      </div>
    </div>
  );
};

export default Cred;
