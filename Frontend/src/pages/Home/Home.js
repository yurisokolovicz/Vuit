import React from "react";

import YoutubeImbed from "../../components/YoutubeImbed";
import vuitImage from "../../../src/img/Homepage/block_images/vuit-img.png";
import "./Home.css";

const Home = () => {
  return (
    <div id="home">
      <div className="container-home">
        <img src={vuitImage} alt="Background" />
        <p>SUA EMPRESA MUITO MAIS SEGURA</p>
        <p>Icones redes sociais</p>
        <YoutubeImbed />
      </div>
    </div>
  );
};

export default Home;
