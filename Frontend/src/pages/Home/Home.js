import React, { useEffect, useState } from "react";
import { getIntro } from "../../services/intro";
import { getRetang } from "../../services/retangulo";
import { getHome } from "../../services/home";
import { getLista } from "../../services/lista";

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
  const [home, setHome] = useState([]);
  const [lista, setLista] = useState([]);

  ///////// Intro /////////
  useEffect(() => {
    fetchIntro();
    fetchRetangulo();
    fetchHome();
    fetchLista();
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

  ///////// paragrafoHome /////////
  const fetchHome = async () => {
    const homeAPI = await getHome();
    setHome(homeAPI);
  };
  console.log(home);

  ///////// ListaReutilizavel /////////
  const fetchLista = async () => {
    const listaAPI = await getLista();
    setLista(listaAPI);
  };
  console.log(lista);

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
          {retangulo.map((item) => (
            <RetanguloExpansivo
              key={item.id}
              titulo={item.titulo}
              conteudo={item.descricao}
            />
          ))}
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
          titulo={lista.length > 0 ? lista[0].titulo : ""}
          conteudo={lista.length > 0 ? lista[0].conteudo : ""}
        />
        <BotaoProposta texto="Solicite uma proposta Vuit Benefícios" />
        <Separacao />
        <Baner src={require("../../img/Homepage/block_images/vuit-cred.png")} />
        {home.map((item) => (
          <ParagReutilizavel key={item.id} paragrafo={[item.paragrafo]} />
        ))}

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
