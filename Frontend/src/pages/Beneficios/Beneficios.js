import React, { useEffect, useState } from "react";
import { getIntro } from "../../services/intro";

import { MdEmail } from "react-icons/md";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import BeneficiosImage from "../../../src/img/beneficios/block_images/vuitcred.png";
import IntroReutilizavel from "../../components/Intro/IntroReutilizavel";
import BotaoWhatsapp from "../../components/Botoes/BotaoWhatsapp/BotaoWhatsapp";
import BotaoTelefone from "../../components/Botoes/BotaoTelefone/BotaoTelefone";
import Separacao from "../../components/Separacao/Separacao";
import BotaoProposta from "../../components/Botoes/BotaoProposta/BotaoProposta";
import Baner from "../../components/Baner/Baner";
import ListaReutilizavel from "../../components/Conteudo/ListaReutilizavel/ListaReutilizavel";
import ParagListReutilizavel from "../../components/Conteudo/ParagListReutilizavel/ParagListReutilizavel";
import ContatosReutilizavel from "../../components/Contatos/ContatosReutilizavel";
import "./Beneficios.css";

const Beneficios = () => {
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

  ///////// ListaReutilizavel /////////
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
        <img
          className="beneficios-image"
          src={BeneficiosImage}
          alt="Background"
        />
        <p>PRATICIDADE NA GESTÃO DE BENEFÍCIOS</p>
        <div className="beneficios-icons-container">
          <MdEmail className="MdEmail" />
          <FaFacebook className="FaFacebook" />
          <BsInstagram className="BsInstagram" />
          <FaLinkedin className="FaLinkedin" />
        </div>
        <IntroReutilizavel
          showH3={true}
          showH4={true}
          showYoutube={false}
          showP={true}
          paragrafo1={intro.length > 0 ? intro[0].descricao : ""}
          paragrafo2={intro.length > 1 ? intro[1].descricao : ""}
        />
        <Separacao />
        <Baner
          src={require("../../img/Homepage/block_images/vuit-beneficios.png")}
        />
        <ListaReutilizavel
          titulo={tituloDoBackEndParagList1}
          conteudo={listaDoBackEndParagList1}
        />
        <BotaoProposta texto="Solicite uma proposta" />
        <Separacao />
        <Baner src={require("../../img/cred/block_images/vuit-escolha.png")} />
        <ListaReutilizavel
          titulo={tituloDoBackEndListReut1}
          conteudo={listaDoBackEndListReut1}
          uppercase={true}
        />
        <BotaoProposta texto="Solicite uma proposta" />
        <Separacao />
        <Baner src={require("../../img/cred/block_images/vuit-nacional.png")} />
        <ParagListReutilizavel
          titulo={tituloDoBackEndParagList2}
          conteudo={listaDoBackEndParagList2}
        />
        <BotaoProposta texto="Solicite uma proposta" />
        <Separacao />
        <Baner
          src={require("../../img/beneficios/block_images/vuit-outros-servicos.png")}
        />
        <ListaReutilizavel
          titulo={tituloDoBackEndListReut2}
          conteudo={listaDoBackEndListReut2}
          uppercase={true}
        />
        <BotaoProposta texto="Solicite uma proposta" />
        <Separacao />
        <div className="contato-benef-container">
          <h3>CONTATO</h3>
        </div>
        <ContatosReutilizavel
          link={"https://www.instagram.com/vuitbeneficios/"}
        />
        <BotaoWhatsapp />
        <BotaoTelefone />
        <Separacao />
      </div>
    </div>
  );
};

export default Beneficios;
