import React from "react";

import vuitImage from "../../../src/img/Homepage/block_images/vuit-img.png";
import IntroHome from "../../components/Intro/IntroHome";
import ContatosHome from "../../components/Contatos/ContatosHome";
import BotaoWhatsapp from "../../components/Botoes/BotaoWhatsapp/BotaoWhatsapp";
import BotaoTelefone from "../../components/Botoes/BotaoWhatsapp/BotaoTelefone";
import Separacao from "../../components/Separacao/Separacao";
import "./Home.css";

const Home = () => {
  return (
    <div id="home">
      <div className="container-home">
        <img src={vuitImage} alt="Background" />
        <p>SUA EMPRESA MUITO MAIS SEGURA</p>
        <p>Icones redes sociais</p>
        <IntroHome />
        <button>Baixe PDF apresentação Tudo na Vuit!</button>
        <Separacao />
        <p>Add Vuit Seguros</p>
        <Separacao />
        <p>Add Vuit Beneficios</p>
        <Separacao />
        <p>Add Vuit Cred</p>
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
