import React from "react";

import { MdEmail } from "react-icons/md";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import credImage from "../../../src/img/cred/block_images/vuit-img.png";
import IntroBeneficios from "../../components/Intro/IntroBeneficios/IntroBeneficios";
import ContatosBeneficios from "../../components/Contatos/ContatosBeneficios/ContatosBeneficios";
import BotaoWhatsapp from "../../components/Botoes/BotaoWhatsapp/BotaoWhatsapp";
import BotaoTelefone from "../../components/Botoes/BotaoTelefone/BotaoTelefone";
import Separacao from "../../components/Separacao/Separacao";
import BotaoProposta from "../../components/Botoes/BotaoProposta/BotaoProposta";
import Baner from "../../components/Baner/Baner";
import ListaReutilizavel from "../../components/Conteudo/ListaReutilizavel/ListaReutilizavel";
import ParagListReutilizavel from "../../components/Conteudo/ParagListReutilizavel/ParagListReutilizavel";
import "./Beneficios.css";

const Beneficios = () => {
  // ParagListReutilizavel data from the backend
  const tituloDoBackEndParagList1 = [
    "A Vuit Benefícios é uma empresa do Grupo Vuit responsável pela implantação de benefícios para milhares de colaboradores de empresas de todo país.",
  ];

  const listaDoBackEndParagList1 = [];

  const tituloDoBackEndParagList2 = [
    "Devido à capilaridade de clientes distribuídos em todos os estados brasileiros, é possível conquistar reduções nas taxas, nos custos e personalizar processos.",
  ];

  const listaDoBackEndParagList2 = [
    "Custos reduzidos",
    "Processos personalizados",
  ];

  // ListaReutilizavel data from the backend
  const tituloDoBackEndListReut1 = [];

  const listaDoBackEndListReut1 = [
    "Implantação diferenciada aos clientes",
    "Praticidade na gestão dos benefícios e relatórios",
    "Possibilidade de negociação financeira",
    "A sodexo possui vasta rede credenciada em todo território nacional",
    "Redução da folha de pagamento",
    "Redução do tempo de recrutamento",
    "Redução com absenteísmos",
  ];

  const tituloDoBackEndListReut2 = [];

  const listaDoBackEndListReut2 = [
    "Seguros de vida em grupo",
    "Acidentes pessoais",
    "Seguro garantia e garantia judicial",
    "Responsabilidade civil e prestação de serviços",
    "Seguro de Saúde, dental e telemedicina",
    "crédito consignado (vuit cred)",
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
          titulo={tituloDoBackEndParagList1}
          listaDoBackEnd={listaDoBackEndParagList1}
        />
        <BotaoProposta texto="Solicite uma proposta" />
        <Separacao />
        <Baner src={require("../../img/cred/block_images/vuit-escolha.png")} />
        <ListaReutilizavel
          titulo={tituloDoBackEndListReut1}
          listaDoBackEnd={listaDoBackEndListReut1}
          uppercase={true}
        />
        <BotaoProposta texto="Solicite uma proposta" />
        <Separacao />
        <Baner src={require("../../img/cred/block_images/vuit-nacional.png")} />
        <ParagListReutilizavel
          titulo={tituloDoBackEndParagList2}
          listaDoBackEnd={listaDoBackEndParagList2}
        />
        <BotaoProposta texto="Solicite uma proposta" />
        <Separacao />
        <Baner
          src={require("../../img/beneficios/block_images/vuit-outros-servicos.png")}
        />
        <ListaReutilizavel
          titulo={tituloDoBackEndListReut2}
          listaDoBackEnd={listaDoBackEndListReut2}
          uppercase={true}
        />
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
