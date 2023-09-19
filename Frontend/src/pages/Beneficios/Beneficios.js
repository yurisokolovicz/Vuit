import React from "react";

import credImage from "../../../src/img/cred/block_images/vuit-img.png";
import IntroBeneficios from "../../components/Intro/IntroBeneficios/IntroBeneficios";
import ContatosBeneficios from "../../components/Contatos/ContatosBeneficios/ContatosBeneficios";
import BotaoWhatsapp from "../../components/Botoes/BotaoWhatsapp/BotaoWhatsapp";
import BotaoTelefone from "../../components/Botoes/BotaoTelefone/BotaoTelefone";
import Separacao from "../../components/Separacao/Separacao";
import BotaoProposta from "../../components/Botoes/BotaoProposta/BotaoProposta";
import { MdEmail } from "react-icons/md";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import "./Beneficios.css";

const Beneficios = () => {
  return (
    <div id="beneficios">
      <div className="container-beneficios">
        <img src={credImage} alt="Background" />
        <p>PRATICIDADE NA GESTÃO DE BENEFÍCIOS</p>
        <div className="beneficios-icons-container">
          <MdEmail className="MdEmail" />
          <FaFacebook className="FaFacebook" />
          <BsInstagram className="BsInstagram" />
          <FaLinkedin className="FaLinkedin" />
        </div>
        <IntroBeneficios />
        <Separacao />
        <p>Add Vuit Beneficios</p>
        <BotaoProposta texto="Solicite uma proposta" />
        <Separacao />
        <p>Por que escolher a Vuit</p>
        <BotaoProposta texto="Solicite uma proposta" />
        <Separacao />
        <p>Atuacao Nacional</p>
        <BotaoProposta texto="Solicite uma proposta" />
        <Separacao />
        <p>Outros Servicos</p>
        <BotaoProposta texto="Solicite uma proposta" />
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
