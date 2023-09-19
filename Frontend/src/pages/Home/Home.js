import React from "react";

import vuitImage from "../../../src/img/Homepage/block_images/vuit-img.png";
import IntroHome from "../../components/Intro/IntroHome/IntroHome";
import ContatosHome from "../../components/Contatos/ContatosHome";
import BotaoWhatsapp from "../../components/Botoes/BotaoWhatsapp/BotaoWhatsapp";
import BotaoTelefone from "../../components/Botoes/BotaoTelefone/BotaoTelefone";
import Separacao from "../../components/Separacao/Separacao";
import BotaoBaixePdf from "../../components/Botoes/BotaoBaixePdf/BotaoBaixePdf";
import BotaoProposta from "../../components/Botoes/BotaoProposta/BotaoProposta";
import "./Home.css";

const Home = () => {
  return (
    <div id="home">
      <div className="container-home">
        <img src={vuitImage} alt="Background" />
        <p>SUA EMPRESA MUITO MAIS SEGURA</p>
        <p>Icones redes sociais</p>
        <IntroHome />
        <BotaoBaixePdf />
        <Separacao />
        <p>Add Vuit Seguros</p>
        <BotaoProposta texto="Solicite uma proposta Vuit Seguros" />
        <Separacao />
        <p>Add Vuit Beneficios</p>
        <BotaoProposta texto="Solicite uma proposta Vuit Benefícios" />
        <Separacao />
        <p>Add Vuit Cred</p>
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
