import React from "react";

import IntroBeneficios from "../../components/IntroBeneficios";
import ContatosHome from "../../components/Contatos/ContatosBeneficios";
import credImage from "../../../src/img/cred/block_images/vuit-img.png";
import "./Beneficios.css";

const Beneficios = () => {
  return (
    <div id="beneficios">
      <div className="container-beneficios">
        <img src={credImage} alt="Background" />
        <p>SUA EMPRESA MUITO MAIS SEGURA</p>
        <IntroBeneficios />
        <ContatosHome />
      </div>
    </div>
  );
};

export default Beneficios;
