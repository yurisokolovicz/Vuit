import React from "react";

import { MdEmail } from "react-icons/md";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import credImage from "../../../src/img/cred/block_images/vuit-img.png";
import IntroCred from "../../components/Intro/IntroCred/IntroCred";
import ContatosCred from "../../components/Contatos/ContatosCred/ContatosCred";
import BotaoWhatsapp from "../../components/Botoes/BotaoWhatsapp/BotaoWhatsapp";
import BotaoTelefone from "../../components/Botoes/BotaoTelefone/BotaoTelefone";
import Separacao from "../../components/Separacao/Separacao";
import BotaoProposta from "../../components/Botoes/BotaoProposta/BotaoProposta";
import Baner from "../../components/Baner/Baner";
import ListaReutilizavel from "../../components/Conteudo/ListaReutilizavel/ListaReutilizavel";
import ParagListReutilizavel from "../../components/Conteudo/ParagListReutilizavel/ParagListReutilizavel";
import "./Cred.css";

const Cred = () => {
  // ParagListReutilizavel data from the backend
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

  // ListaReutilizavel data from the backend
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
        <IntroCred />
        <Separacao />
        <Baner src={require("../../img/cred/block_images/vuit-cred.png")} />
        <ParagListReutilizavel
          titulo={tituloDoBackEndParagList1}
          listaDoBackEnd={listaDoBackEndParagList1}
        />
        <BotaoProposta texto="Solicite uma proposta Vuit cred" />
        <Separacao />
        <Baner src={require("../../img/cred/block_images/vuit-escolha.png")} />
        <ParagListReutilizavel
          titulo={tituloDoBackEndParagList2}
          listaDoBackEnd={listaDoBackEndParagList2}
        />
        <BotaoProposta texto="Solicite uma proposta Vuit cred" />
        <Separacao />
        <Baner src={require("../../img/cred/block_images/vuit-nacional.png")} />
        <ParagListReutilizavel
          titulo={tituloDoBackEndParagList3}
          listaDoBackEnd={listaDoBackEndParagList3}
        />
        <Baner src={require("../../img/cred/block_images/vuit-parceria.png")} />
        <Separacao />
        <BotaoProposta texto="Solicite uma proposta Vuit cred" />
        <ListaReutilizavel
          titulo={tituloDoBackEndListReut1}
          listaDoBackEnd={listaDoBackEndListReut1}
        />
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
