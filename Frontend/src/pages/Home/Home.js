import React from "react";

import IntroHome from "../../components/IntroHome";
import vuitImage from "../../../src/img/Homepage/block_images/vuit-img.png";
import "./Home.css";

const Home = () => {
  return (
    <div id="home">
      <div className="container-home">
        <img src={vuitImage} alt="Background" />
        <p>SUA EMPRESA MUITO MAIS SEGURA</p>
        <p>Icones redes sociais</p>
        <IntroHome />
      </div>
    </div>
  );
};

export default Home;
