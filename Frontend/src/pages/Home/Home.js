import React from "react";

import vuitImage from "../../../src/img/Homepage/block_images/vuit-img.png";
import IntroHome from "../../components/Intro/IntroHome";
import ContatosHome from "../../components/Contatos/ContatosHome";
import BotaoWhatsapp from "../../components/Botoes/BotaoWhatsapp/BotaoWhatsapp";
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
        <p> (Criar) componente de separacao _______ ^ ______</p>
        <p> Add Vuit Beneficios</p>
        <p> (Criar) componente de separacao _______ ^ ______</p>
        <p> Add Vuit Cred</p>
        <p> (Criar) componente de separacao _______ ^ ______</p>
        <ContatosHome />
        <BotaoWhatsapp />
        <p> (Criar) componente de separacao _______ ^ ______</p>
      </div>
    </div>
  );
};

export default Home;
