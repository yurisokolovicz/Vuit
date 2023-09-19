import React from "react";

import vuitImage from "../../../src/img/Homepage/block_images/vuit-img.png";
import IntroHome from "../../components/Intro/IntroHome/IntroHome";
import ContatosHome from "../../components/Contatos/ContatosHome/ContatosHome";
import BotaoWhatsapp from "../../components/Botoes/BotaoWhatsapp/BotaoWhatsapp";
import BotaoTelefone from "../../components/Botoes/BotaoTelefone/BotaoTelefone";
import Separacao from "../../components/Separacao/Separacao";
import BotaoBaixePdf from "../../components/Botoes/BotaoBaixePdf/BotaoBaixePdf";
import BotaoProposta from "../../components/Botoes/BotaoProposta/BotaoProposta";
import { MdEmail } from "react-icons/md";
import { FaPhoneSquare, FaFacebook, FaLinkedin } from "react-icons/fa";
import { BsInstagram, BsYoutube } from "react-icons/bs";
import Baner from "../../components/Baner/Baner";
import "./Home.css";
import VuitCredInfo from "../../components/Conteudo/Home/VuitCredInfo/VuitCredInfo";
import VuitBeneficiosInfo from "../../components/Conteudo/Home/VuitBeneficiosInfo/VuitBeneficiosInfo ";

const Home = () => {
  return (
    <div id="home">
      <div className="container-home">
        <img src={vuitImage} alt="Background" />
        <p>SUA EMPRESA MUITO MAIS SEGURA</p>
        <div className="home-icons-container">
          <MdEmail className="MdEmail" />
          <FaPhoneSquare className="FaPhoneSquare" />
          <FaFacebook className="FaFacebook" />
          <BsInstagram className="BsInstagram" />
          <BsYoutube className="BsYoutube" />
          <FaLinkedin className="FaLinkedin" />
        </div>
        <IntroHome />
        <BotaoBaixePdf />
        <Separacao />
        <Baner
          src={require("../../img/Homepage/block_images/vuit-seguros.png")}
        />
        <p>Add componente expandivel</p>
        <BotaoProposta texto="Solicite uma proposta Vuit Seguros" />
        <Separacao />
        <Baner
          src={require("../../img/Homepage/block_images/vuit-beneficios.png")}
        />
        <VuitBeneficiosInfo />
        <BotaoProposta texto="Solicite uma proposta Vuit Benefícios" />
        <Separacao />
        <Baner src={require("../../img/Homepage/block_images/vuit-cred.png")} />
        <VuitCredInfo />
        <BotaoProposta texto="Solicite uma proposta Vuit Cred" />
        <Separacao />
        <ContatosHome />
        <BotaoWhatsapp />
        <BotaoTelefone />
        <Separacao />
      </div>
    </div>
  );
};

export default Home;
