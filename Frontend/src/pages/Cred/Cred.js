import React, { useEffect, useState } from "react";
import { getIntro } from "../../services/intro";

import { MdEmail } from "react-icons/md";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import credImage from "../../../src/img/cred/block_images/vuit-img.png";
import IntroReutilizavel from "../../components/Intro/IntroReutilizavel";
import BotaoWhatsapp from "../../components/Botoes/BotaoWhatsapp/BotaoWhatsapp";
import BotaoTelefone from "../../components/Botoes/BotaoTelefone/BotaoTelefone";
import Separacao from "../../components/Separacao/Separacao";
import BotaoProposta from "../../components/Botoes/BotaoProposta/BotaoProposta";
import Baner from "../../components/Baner/Baner";
import ListaReutilizavel from "../../components/Conteudo/ListaReutilizavel/ListaReutilizavel";
import ParagListReutilizavel from "../../components/Conteudo/ParagListReutilizavel/ParagListReutilizavel";
import ContatosReutilizavel from "../../components/Contatos/ContatosReutilizavel";
import "./Cred.css";

const Cred = () => {
  const [intro, setIntro] = useState([]);

  ///////// Intro /////////
  useEffect(() => {
    fetchIntro();
  }, []);

  const fetchIntro = async () => {
    const IntroHomeAPI = await getIntro();
    setIntro(IntroHomeAPI);
  };
  console.log(intro);

  ///////// ParagListReutilizavel /////////
  const tituloDoBackEndParagList1 = [
    "A Vuit Cred é uma empresa do Grupo Vuit e é responsável pela gestão de mais de 150 mil pessoas e mais de 1.500 empresas assistidas por seus produtos e benefícios.",
  ];
  const listaDoBackEndParagList1 = [
    "Mais de 150 mil pessoas",
    "Mais de 1500 empresas",
  ];

  const tituloDoBackEndParagList2 = [
    "Contratando o crédito consignado com a Vuit Cred é possível ajudar os seus colaboradores a terem crédito de forma ágil e simples, sem burocracia, sendo um facilitador ao RH da empresa.",
  ];

  const listaDoBackEndParagList2 = [
    "Menor taxa de juros",
    "Educação financeira de qualidade sem burocracia",
  ];

  const tituloDoBackEndParagList3 = [
    "Devido à capilaridade de clientes distribuídos em todos os estados brasileiros, é possível conquistar reduções nas taxas, nos custos e personalizar processos.",
  ];

  const listaDoBackEndParagList3 = [
    "Custos reduzidos",
    "Processos personalizados",
  ];

  ///////// ListaReutilizavel /////////
  const tituloDoBackEndListReut1 = [];

  const listaDoBackEndListReut1 = [
    "Apoio em eventos e campanhas da empresa ou instituição",
    "Ações comerciais para colaboradores e parceiros",
    "Rebate de até 2% para a empresa sobre a produção mensal paga",
    "Curso de educação financeira, digital, gratuito e com certificado para todos os colaboradores",
  ];

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
        <IntroReutilizavel
          showH3={true}
          showH4={false}
          showYoutube={true}
          showP={true}
          youtubeSrc="https://www.youtube.com/embed/kdPSpUR9BLY?si=w3qNc5oU6pqDucBm"
          youtubeTitle="Vuit Cred"
          paragrafo1={intro.length > 0 ? intro[0].descricao : ""}
          paragrafo2={intro.length > 1 ? intro[1].descricao : ""}
        />
        <Separacao />
        <Baner src={require("../../img/cred/block_images/vuit-cred.png")} />
        <ParagListReutilizavel
          titulo={tituloDoBackEndParagList1}
          conteudo={listaDoBackEndParagList1}
        />
        <BotaoProposta texto="Solicite uma proposta Vuit cred" />
        <Separacao />
        <Baner src={require("../../img/cred/block_images/vuit-escolha.png")} />
        <ParagListReutilizavel
          titulo={tituloDoBackEndParagList2}
          conteudo={listaDoBackEndParagList2}
        />
        <BotaoProposta texto="Solicite uma proposta Vuit cred" />
        <Separacao />
        <Baner src={require("../../img/cred/block_images/vuit-nacional.png")} />
        <ParagListReutilizavel
          titulo={tituloDoBackEndParagList3}
          conteudo={listaDoBackEndParagList3}
        />
        <Baner src={require("../../img/cred/block_images/vuit-parceria.png")} />
        <Separacao />
        <BotaoProposta texto="Solicite uma proposta Vuit cred" />
        <ListaReutilizavel
          titulo={tituloDoBackEndListReut1}
          conteudo={listaDoBackEndListReut1}
          uppercase={true}
        />
        <BotaoProposta texto="Solicite uma proposta Vuit cred" />
        <Separacao />
        <div className="contato-cred-container">
          <div className="contato-cred-text-container">
            <h3>FALE CONOSCO</h3>
            <h4>VAMOS CONVERSAR?</h4>
          </div>
          <div>
            <p className="contato-parag-container">
              Venha fazer parte deste ecossistema que tem mudado a vida das
              pessoas. Será um prazer tê-los conosco.
            </p>
          </div>
        </div>
        <ContatosReutilizavel link={"https://www.instagram.com/vuitcred/"} />
        <BotaoWhatsapp />
        <BotaoTelefone />
        <Separacao />
      </div>
    </div>
  );
};

export default Cred;
