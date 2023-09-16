import React from "react";

import IntroCred from "../../components/IntroCred";
import ContatosHome from "../../components/Contatos/ContatosCred";
import credImage from "../../../src/img/cred/block_images/vuit-img.png";
import "./Cred.css";

const Cred = () => {
  return (
    <div id="cred">
      <div className="container-cred">
        <img src={credImage} alt="Background" />
        <p>CRÉDITO CONSGINADO ÁGIL E SEM BUROCRACIA</p>
        <p>Icones redes sociais</p>
        <IntroCred />
        <ContatosHome />
      </div>
    </div>
  );
};

export default Cred;
