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
import Baner from "../../components/Baner/Baner";
import "./Beneficios.css";
import ListaReutilizavel from "../../components/Conteudo/ListaReutilizavel/ListaReutilizavel";

const Beneficios = () => {
  const listaDoBackEnd1 = [
    "IMPLANTAÇÃO DIFERENCIADA AOS CLIENTES",
    "PRATICIDADE NA GESTAO DOS BENEFÍCIOS E RELATÓRIOS",
    "POSSIBILIDADE DE NEGOCIAÇÃO FINANCEIRA",
    "A SODEXO POSSUI VASTA REDE CREDENCIADA EM TODO TERRITÓRIO NACIONAL",
    "REDUÇÃO DA FOLHA DE PAGAMENTO",
    "REDUÇÃO DO TEMPO DE RECRUTAMENTO",
    "REDUÇÃO COM ABSENTEÍSMOS",
  ];

  const listaDoBackEnd2 = [
    "SEGUROS DE VIDA EM GRUPO",
    "ACIDENTES PESSOAIS",
    "SEGURO GARANTIA E GARANTIA JUDICIAL",
    "RESPONSABILIDADE CIVIL E PRESTAÇÃO DE SERVIÇOS",
    "SEGURO DE SAUDE, DENTAL E TELEMEDICINA",
    "CRÉDITO CONSIGNADO (VUIT CRED)",
  ];

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
        <Baner
          src={require("../../img/Homepage/block_images/vuit-beneficios.png")}
        />
        <ListaReutilizavel
          listaDoBackEnd={[]}
          titulo="A Vuit Benefícios é uma empresa do Grupo Vuit responsável pela implantação de benefícios para milhares de colaboradores de empresas de todo país."
        />
        <BotaoProposta texto="Solicite uma proposta" />
        <Separacao />
        <Baner src={require("../../img/cred/block_images/vuit-escolha.png")} />
        <ListaReutilizavel listaDoBackEnd={listaDoBackEnd1} />
        <BotaoProposta texto="Solicite uma proposta" />
        <Separacao />
        <Baner src={require("../../img/cred/block_images/vuit-nacional.png")} />
        <p>Atuacao Nacional</p>
        <BotaoProposta texto="Solicite uma proposta" />
        <Separacao />
        <Baner
          src={require("../../img/beneficios/block_images/vuit-outros-servicos.png")}
        />
        <ListaReutilizavel listaDoBackEnd={listaDoBackEnd2} />
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
