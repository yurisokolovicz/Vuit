import React from "react";

import { MdEmail } from "react-icons/md";
import { FaPhoneSquare, FaFacebook, FaLinkedin } from "react-icons/fa";
import { BsInstagram, BsYoutube } from "react-icons/bs";
import vuitImage from "../../../src/img/Homepage/block_images/vuit-img.png";
import IntroReutilizavel from "../../components/Intro/IntroReutilizavel/IntroReutilizavel";
import ContatosHome from "../../components/Contatos/ContatosHome/ContatosHome";
import BotaoWhatsapp from "../../components/Botoes/BotaoWhatsapp/BotaoWhatsapp";
import BotaoTelefone from "../../components/Botoes/BotaoTelefone/BotaoTelefone";
import Separacao from "../../components/Separacao/Separacao";
import BotaoBaixePdf from "../../components/Botoes/BotaoBaixePdf/BotaoBaixePdf";
import BotaoProposta from "../../components/Botoes/BotaoProposta/BotaoProposta";
import Baner from "../../components/Baner/Baner";
import ListaReutilizavel from "../../components/Conteudo/ListaReutilizavel/ListaReutilizavel";
import ParagReutilizavel from "../../components/Conteudo/ParagReutilizavel/ParagReutilizavel";
import RetanguloExpansivo from "../../components/RetanguloExpansivo/RetanguloExpansivo";
import "./Home.css";

const Home = () => {
  ///////// RetanguloExpansivo /////////
  const tituloBloco1 = ["Seguro de vida em grupo e acidentes pessoais"];

  const conteudoBloco1 = [
    "A Vuit Seguros é uma corretora que assessora as empresas, fornecendo seguro de vida em grupo e acidentes pessoais, permitindo que economizem tempo, esforço e dinheiro.",
  ];

  const tituloBloco2 = ["Seguro de saúde, dental e telemedicina"];

  const conteudoBloco2 = [
    "Seguindo os objetivos dos empregadores, somos capazes de propor acordos que atendam às expectativas dos colaboradores por sua empresa. Juntos encontramos as melhores soluções para seguro saúde, odontológico e telemedicina, um dos benefícios mais desejados pelos colaboradores. Ajudamos as empresas a encontrar uma solução nesta área, fornecendo planos de qualidade, gerenciando a demanda e acompanhamento de pós-venda, fortalecendo o comprometimento dos funcionários com a empresa.",
  ];

  const tituloBloco3 = ["Responsabilidade civil e prestação de serviços"];

  const conteudoBloco3 = [
    "Os seguros de responsabilidade civil geral, prestação de serviços, profissional, E&O e D&O, não são mais uma opção, mas sim uma necessidade, trazendo tranquilidade exigida pelos seus clientes e principalmente, protegendo os seus negócios. Estar preparado para o inesperado é importante para o sucesso da sua empresa. O seguro pode preencher lacunas na cobertura, ajudar a gerenciar riscos e garantir a continuidade dos negócios.",
  ];

  const tituloBloco4 = ["Seguro garantia e Garantia Judicial"];

  const conteudoBloco4 = [
    "Através da VUIT Seguros, você tem as garantias que precisa para fazer seu trabalho. Nossos clientes estão em primeiro lugar, e nossos profissionais são projetados para ajudar nas suas necessidades. Serviços especializados como garantia de proposta, garantia de execução, antecipação de pagamento ou garantia judicial, liberando os recursos imobilizados e este ajudando no fluxo de caixa da sua empresa.",
  ];

  const tituloBloco5 = ["Crédito consignado VUIT Cred"];

  const conteudoBloco5 = [
    "Use sua empresa para oferecer o benefício de crédito consignado ao seu funcionário, com a facilidade de desconto em folha, juros a partir de 1,89% ao mês, parcelamento em até 48x e o melhor de tudo: após 3 dias do primeiro contanto o recurso já pode estar disponível na conta do colaborador.",
  ];

  const tituloBloco6 = [
    "VUIT benefícios: vale alimentação, refeição e combustível",
  ];

  const conteudoBloco6 = [
    "Através da parceria com a Sodexo, maior rede credenciada de Vale Alimentação e Vale Refeição do Brasil, a Vuit benefícios tem como objetivo expandir o leque de produtos oferecidos aos seus clientes. É bom para o seu RH. Ao oferecer o vale-alimentação e o vale-refeição Sodexo, sua empresa pode receber isenção de encargos sociais e descontos no IR previstos pelo PAT. Faça a gestão online dos benefícios com praticidade, segurança e controle de gastos. É bom para os seus colaboradores. Seus funcionários têm acesso a opções de alimentação saudável. Os cartões de benefícios são aceitos em estabelecimentos físicos e aplicativos de entrega. É mais qualidade de vida para todos.",
  ];

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
        />
        <BotaoBaixePdf />
        <Separacao />
        <Baner
          src={require("../../img/Homepage/block_images/vuit-seguros.png")}
        />
        <div className="container-retangulos">
          <RetanguloExpansivo titulo={tituloBloco1} conteudo={conteudoBloco1} />
          <RetanguloExpansivo titulo={tituloBloco2} conteudo={conteudoBloco2} />
          <RetanguloExpansivo titulo={tituloBloco3} conteudo={conteudoBloco3} />
          <RetanguloExpansivo titulo={tituloBloco4} conteudo={conteudoBloco4} />
          <RetanguloExpansivo titulo={tituloBloco5} conteudo={conteudoBloco5} />
          <RetanguloExpansivo titulo={tituloBloco6} conteudo={conteudoBloco6} />
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
          listaDoBackEnd={listaDoBackEnd1}
          titulo={tituloDoBackEnd1}
        />
        <BotaoProposta texto="Solicite uma proposta Vuit Benefícios" />
        <Separacao />
        <Baner src={require("../../img/Homepage/block_images/vuit-cred.png")} />
        <ParagReutilizavel paragrafoDoBackEnd={paragrafoHome} />
        <BotaoProposta texto="Solicite uma proposta Vuit Cred" />
        <Separacao />
        <ContatosHome />
        <BotaoWhatsapp />
        <BotaoTelefone />
        <Separacao />
      </div>
    </div>
  );
};

export default Home;
