import React from "react";

import YoutubeImbedCred from "../../components/YoutubeImbedCred";
import credImage from "../../../src/img/cred/block_images/vuit-img.png";
import "./Cred.css";

const Cred = () => {
  return (
    <div id="cred">
      <div className="container-cred">
        <img src={credImage} alt="Background" />
        <p>CRÉDITO CONSGINADO ÁGIL E SEM BUROCRACIA</p>
        <p>Icones redes sociais</p>
        <YoutubeImbedCred />
      </div>
    </div>
  );
};

export default Cred;
