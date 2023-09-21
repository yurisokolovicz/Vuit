import React, { useEffect, useState } from "react";
import { getIntro } from "../../services/intro";
import { getRetang } from "../../services/retangulo";

import { MdEmail } from "react-icons/md";
import { FaPhoneSquare, FaFacebook, FaLinkedin } from "react-icons/fa";
import { BsInstagram, BsYoutube } from "react-icons/bs";
import vuitImage from "../../../src/img/Homepage/block_images/vuit-img.png";
import IntroReutilizavel from "../../components/Intro/IntroReutilizavel";
import BotaoWhatsapp from "../../components/Botoes/BotaoWhatsapp/BotaoWhatsapp";
import BotaoTelefone from "../../components/Botoes/BotaoTelefone/BotaoTelefone";
import Separacao from "../../components/Separacao/Separacao";
import BotaoBaixePdf from "../../components/Botoes/BotaoBaixePdf/BotaoBaixePdf";
import BotaoProposta from "../../components/Botoes/BotaoProposta/BotaoProposta";
import Baner from "../../components/Baner/Baner";
import ListaReutilizavel from "../../components/Conteudo/ListaReutilizavel/ListaReutilizavel";
import ParagReutilizavel from "../../components/Conteudo/ParagReutilizavel/ParagReutilizavel";
import RetanguloExpansivo from "../../components/RetanguloExpansivo/RetanguloExpansivo";
import ContatosReutilizavel from "../../components/Contatos/ContatosReutilizavel";
import "./Home.css";

const Home = () => {
  const [intro, setIntro] = useState([]);
  const [retangulo, setRetangulo] = useState([]);

  ///////// Intro /////////
  useEffect(() => {
    fetchIntro();
    fetchRetangulo();
  }, []);

  const fetchIntro = async () => {
    const IntroHomeAPI = await getIntro();
    setIntro(IntroHomeAPI);
  };
  console.log(intro);

  ///////// RetanguloHome /////////
  const fetchRetangulo = async () => {
    const IntroRetangAPI = await getRetang();
    setRetangulo(IntroRetangAPI);
  };
  console.log(retangulo);

  ///////// ListaReutilizavel /////////
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

  ///////// paragrafoHome /////////
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
          paragrafo1={intro.length > 0 ? intro[0].descricao : ""}
          paragrafo2={intro.length > 1 ? intro[1].descricao : ""}
        />
        <BotaoBaixePdf />
        <Separacao />
        <Baner
          src={require("../../img/Homepage/block_images/vuit-seguros.png")}
        />
        <div className="container-retangulos">
          <RetanguloExpansivo
            titulo={retangulo.length > 0 ? retangulo[0].titulo : ""}
            conteudo={retangulo.length > 0 ? retangulo[0].descricao : ""}
          />
          <RetanguloExpansivo
            titulo={retangulo.length > 1 ? retangulo[1].titulo : ""}
            conteudo={retangulo.length > 1 ? retangulo[1].descricao : ""}
          />
          <RetanguloExpansivo
            titulo={retangulo.length > 2 ? retangulo[2].titulo : ""}
            conteudo={retangulo.length > 2 ? retangulo[2].descricao : ""}
          />
          <RetanguloExpansivo
            titulo={retangulo.length > 3 ? retangulo[3].titulo : ""}
            conteudo={retangulo.length > 3 ? retangulo[3].descricao : ""}
          />
          <RetanguloExpansivo
            titulo={retangulo.length > 4 ? retangulo[4].titulo : ""}
            conteudo={retangulo.length > 4 ? retangulo[4].descricao : ""}
          />
          <RetanguloExpansivo
            titulo={retangulo.length > 5 ? retangulo[5].titulo : ""}
            conteudo={retangulo.length > 5 ? retangulo[5].descricao : ""}
          />
        </div>
        <BotaoProposta
          className="home-separacao"
          texto="Solicite uma proposta Vuit Seguros"
        />
        <Separacao />
        <Baner
          src={require("../../img/Homepage/block_images/vuit-beneficios.png")}
        />
        <ListaReutilizavel
          titulo={tituloDoBackEnd1}
          conteudo={listaDoBackEnd1}
        />
        <BotaoProposta texto="Solicite uma proposta Vuit Benefícios" />
        <Separacao />
        <Baner src={require("../../img/Homepage/block_images/vuit-cred.png")} />
        <ParagReutilizavel paragrafoDoBackEnd={paragrafoHome} />
        <BotaoProposta texto="Solicite uma proposta Vuit Cred" />
        <Separacao />
        <h3>CONTATOS:</h3>
        <ContatosReutilizavel link={"https://www.instagram.com/vuitseguros/"} />
        <BotaoWhatsapp />
        <BotaoTelefone />
        <Separacao />
      </div>
    </div>
  );
};

export default Home;
