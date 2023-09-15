import React from "react";

import credImage from "../../../src/img/cred/block_images/vuit-img.png";
import "./Beneficios.css";
import YoutubeImbedBeneficios from "../../components/YoutubeImbedBeneficios";

const Beneficios = () => {
  return (
    <div id="beneficios">
      <div className="container-beneficios">
        <img src={credImage} alt="Background" />
        <p>SUA EMPRESA MUITO MAIS SEGURA</p>
        <YoutubeImbedBeneficios />
      </div>
    </div>
  );
};

export default Beneficios;
