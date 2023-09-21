import React, { useEffect, useState } from "react";
import { getIntro } from "../../services/intro";
import { getLista } from "../../services/lista";

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
  const [lista, setLista] = useState([]);

  ///////// Intro /////////
  useEffect(() => {
    fetchIntro();
    fetchLista();
  }, []);

  const fetchIntro = async () => {
    const IntroHomeAPI = await getIntro();
    setIntro(IntroHomeAPI);
  };
  console.log(intro);

  ///////// ListaReutilizavel /////////
  const fetchLista = async () => {
    const listaAPI = await getLista();
    setLista(listaAPI);
  };
  console.log(lista);

  ///////// ParagListReutilizavel /////////

  const tituloDoBackEndParagList2 = [
    "Devido à capilaridade de clientes distribuídos em todos os estados brasileiros, é possível conquistar reduções nas taxas, nos custos e personalizar processos.",
  ];

  const listaDoBackEndParagList2 = [
    "Custos reduzidos",
    "Processos personalizados",
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
          titulo={lista.length > 0 ? lista[2].titulo : ""}
          conteudo={lista.length > 0 ? lista[2].conteudo : ""}
        />
        <BotaoProposta texto="Solicite uma proposta" />
        <Separacao />
        <Baner src={require("../../img/cred/block_images/vuit-escolha.png")} />
        <ListaReutilizavel
          titulo={lista.length > 0 ? lista[3].titulo : ""}
          conteudo={lista.length > 0 ? lista[3].conteudo : ""}
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
          titulo={lista.length > 0 ? lista[4].titulo : ""}
          conteudo={lista.length > 0 ? lista[4].conteudo : ""}
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
