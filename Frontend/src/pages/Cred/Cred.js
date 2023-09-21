import React, { useEffect, useState } from "react";
import { getIntro } from "../../services/intro";
import { getLista } from "../../services/lista";
import { getHibrido } from "../../services/hibrido";

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
  const [lista, setLista] = useState([]);
  const [hibrido, setHibrido] = useState([]);

  useEffect(() => {
    fetchIntro();
    fetchLista();
    fetchHibrido();
  }, []);

  const fetchIntro = async () => {
    const IntroHomeAPI = await getIntro();
    setIntro(IntroHomeAPI);
  };
  console.log(intro);

  const fetchLista = async () => {
    const listaAPI = await getLista();
    setLista(listaAPI);
  };
  console.log(lista);

  const fetchHibrido = async () => {
    const hibridoAPI = await getHibrido();
    setHibrido(hibridoAPI);
  };
  console.log(hibrido);

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
          titulo={hibrido.length > 0 ? hibrido[0].titulo : ""}
          conteudo={hibrido.length > 0 ? hibrido[0].conteudo : ""}
        />
        <BotaoProposta texto="Solicite uma proposta Vuit cred" />
        <Separacao />
        <Baner src={require("../../img/cred/block_images/vuit-escolha.png")} />
        <ParagListReutilizavel
          titulo={hibrido.length > 0 ? hibrido[1].titulo : ""}
          conteudo={hibrido.length > 0 ? hibrido[1].conteudo : ""}
        />
        <BotaoProposta texto="Solicite uma proposta Vuit cred" />
        <Separacao />
        <Baner src={require("../../img/cred/block_images/vuit-nacional.png")} />
        <ParagListReutilizavel
          titulo={hibrido.length > 0 ? hibrido[2].titulo : ""}
          conteudo={hibrido.length > 0 ? hibrido[2].conteudo : ""}
        />
        <Baner src={require("../../img/cred/block_images/vuit-parceria.png")} />
        <Separacao />
        <BotaoProposta texto="Solicite uma proposta Vuit cred" />
        <ListaReutilizavel
          titulo={lista.length > 0 ? lista[1].titulo : ""}
          conteudo={lista.length > 0 ? lista[1].conteudo : ""}
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
