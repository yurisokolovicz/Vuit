import React from "react";

import { MdEmail } from "react-icons/md";
import { FaPhoneSquare, FaFacebook, FaLinkedin } from "react-icons/fa";
import { BsInstagram, BsYoutube } from "react-icons/bs";
import vuitImage from "../../../src/img/Homepage/block_images/vuit-img.png";
import IntroReutilizavel from "../../components/Intro/IntroReutilizavel/IntroReutilizavel";
import ContatosHome from "../../components/Contatos/ContatosHome/ContatosHome";
import BotaoWhatsapp from "../../components/Botoes/BotaoWhatsapp/BotaoWhatsapp";
import BotaoTelefone from "../../components/Botoes/BotaoTelefone/BotaoTelefone";
import Separacao from "../../components/Separacao/Separacao";
import BotaoBaixePdf from "../../components/Botoes/BotaoBaixePdf/BotaoBaixePdf";
import BotaoProposta from "../../components/Botoes/BotaoProposta/BotaoProposta";
import Baner from "../../components/Baner/Baner";
import ListaReutilizavel from "../../components/Conteudo/ListaReutilizavel/ListaReutilizavel";
import ParagReutilizavel from "../../components/Conteudo/ParagReutilizavel/ParagReutilizavel";
import "./Home.css";

const Home = () => {
  const tituloDoBackEnd1 = [
    "Conheça as vantagens das empresas que utilizam Vuit Benefícios:",
  ];

  const listaDoBackEnd1 = [
    "A Sodexo possui vasta rede credenciada em todo o território nacional;",
    "Redução do tempo de recrutamento;",
    "Redução com absenteísmos;",
    "Redução da folha de pagamento;",
    "Implantação diferenciada aos clientes;",
    "Praticidade na gestão dos benefícios e relatórios;",
    "Possibilidade de negociação diferenciada.",
  ];

  const paragrafoHome = [
    "A Vuit Cred é uma empresa do Grupo Vuit, que é responsável pela gestão de mais de 150 mil pessoas e mais de 1.500 empresas assistidas por seus produtos e benefícios.",
    "Devido à capilaridade de clientes espalhados em todos os estados brasileiros, foi possível conquistar reduções nas taxas, nos custos e personalizar os processos.",
    "Contratando o crédito consignado com a Vuit Cred é possível ajudar seus colaboradores a terem crédito ágil e simples, tudo com desburocratização, sendo um facilitador ao RH da empresa.",
    "- MENOR TAXA DE JUROS",
    "- EDUCAÇÃO FINANCEIRA E DE QUALIDADE",
    "41 2101 1724",
    "41 99267 2010",
    "@VUITCRED",
  ];

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
        <IntroReutilizavel
          showH3={true}
          showH4={true}
          showYoutube={true}
          showP={true}
          youtubeSrc="https://www.youtube.com/embed/44gxvIpnsM8?si=GnTj1kyrHwNrVWPm"
          youtubeTitle="O Grupo Vuit"
        />
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
        <ListaReutilizavel
          listaDoBackEnd={listaDoBackEnd1}
          titulo={tituloDoBackEnd1}
        />
        <BotaoProposta texto="Solicite uma proposta Vuit Benefícios" />
        <Separacao />
        <Baner src={require("../../img/Homepage/block_images/vuit-cred.png")} />
        <ParagReutilizavel paragrafoDoBackEnd={paragrafoHome} />
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
