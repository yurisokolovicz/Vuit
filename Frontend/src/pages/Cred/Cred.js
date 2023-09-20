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
import ListaReutilizavel from "../../components/Conteudo/ListaReutilizavel/ListaReutilizavel";
import "./Cred.css";
import ParagListReutilizavel from "../../components/Conteudo/ParagListReutilizavel/ParagListReutilizavel";

const Cred = () => {
  const listaDoBackEnd4 = ["Custos reduzidos", "Processos personalizados"];

  const listaDoBackEnd3 = [
    "Menor taxa de juros",
    "Educação financeira de qualidade sem burocracia",
  ];

  const listaDoBackEnd2 = ["Mais de 150 mil pessoas", "Mais de 1500 empresas"];

  const listaDoBackEnd1 = [
    "APOIO EM EVENTOS E CAMPANHAS DA EMPRESA OU INSTITUIÇÃO",
    "AÇÕES COMERCIAIS PARA COLABORADORES E PARCEIROS",
    "REBATE DE ATÉ 2% PARA A EMPRESA SOBRE A PRODUÇÃO MENSAL PAGA",
    "CURSO DE EDUCAÇÃO FINANCEIRA, DIGITAL, GRATUITO E COM CERTIFICADO PARA TODOS OS COLABORADORES",
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
          listaDoBackEnd={listaDoBackEnd2}
          titulo="A Vuit Cred é uma empresa do Grupo Vuit e é responsável pela gestão de mais de 150 mil pessoas e mais de 1.500 empresas assistidas por seus produtos e benefícios."
        />
        <BotaoProposta texto="Solicite uma proposta Vuit cred" />
        <Separacao />
        <Baner src={require("../../img/cred/block_images/vuit-escolha.png")} />
        <ParagListReutilizavel
          listaDoBackEnd={listaDoBackEnd3}
          titulo="Contratando o crédito consignado com a Vuit Cred é possível ajudar os seus colaboradores a terem crédito de forma ágil e simples, sem burocracia, sendo um facilitador ao RH da empresa."
        />
        <BotaoProposta texto="Solicite uma proposta Vuit cred" />
        <Separacao />
        <Baner src={require("../../img/cred/block_images/vuit-nacional.png")} />
        <ParagListReutilizavel
          listaDoBackEnd={listaDoBackEnd4}
          titulo="Devido à capilaridade de clientes distribuídos em todos os estados brasileiros, é possível conquistar reduções nas taxas, nos custos e personalizar processos."
        />
        <Baner src={require("../../img/cred/block_images/vuit-parceria.png")} />
        <Separacao />
        <BotaoProposta texto="Solicite uma proposta Vuit cred" />
        <ListaReutilizavel listaDoBackEnd={listaDoBackEnd1} />
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
