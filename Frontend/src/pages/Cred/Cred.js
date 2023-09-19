import React from "react";

import credImage from "../../../src/img/cred/block_images/vuit-img.png";
import IntroCred from "../../components/Intro/IntroCred/IntroCred";
import ContatosCred from "../../components/Contatos/ContatosCred/ContatosCred";
import BotaoWhatsapp from "../../components/Botoes/BotaoWhatsapp/BotaoWhatsapp";
import BotaoTelefone from "../../components/Botoes/BotaoTelefone/BotaoTelefone";
import Separacao from "../../components/Separacao/Separacao";
import BotaoProposta from "../../components/Botoes/BotaoProposta/BotaoProposta";
import { MdEmail } from "react-icons/md";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import Baner from "../../components/Baner/Baner";
import "./Cred.css";

const Cred = () => {
  return (
    <div id="cred">
      <div className="container-cred">
        <img src={credImage} alt="Background" />
        <p>CRÉDITO CONSGINADO ÁGIL E SEM BUROCRACIA</p>
        <div className="cred-icons-container">
          <MdEmail className="MdEmail" />
          <FaFacebook className="FaFacebook" />
          <BsInstagram className="BsInstagram" />
          <FaLinkedin className="FaLinkedin" />
        </div>
        <IntroCred />
        <Separacao />
        <Baner src={require("../../img/cred/block_images/vuit-cred.png")} />
        <p>Add Vuit Cred</p>
        <BotaoProposta texto="Solicite uma proposta Vuit cred" />
        <Separacao />
        <Baner src={require("../../img/cred/block_images/vuit-escolha.png")} />
        <p>Por que escolher a Vuit</p>
        <BotaoProposta texto="Solicite uma proposta Vuit cred" />
        <Separacao />
        <Baner src={require("../../img/cred/block_images/vuit-nacional.png")} />
        <p>Atuacao Nacional</p>
        <p>Parceria Comercial</p>
        <Baner src={require("../../img/cred/block_images/vuit-parceria.png")} />
        <Separacao />
        <BotaoProposta texto="Solicite uma proposta Vuit cred" />
        <p>Listar itens</p>
        <BotaoProposta texto="Solicite uma proposta Vuit cred" />
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
