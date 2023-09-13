import React from "react";

import vuitImage from "../../../src/img/Homepage/block_images/vuit-img.png";
import "./Home.css";

const Home = () => {
  return (
    <footer id="home">
      <img src={vuitImage} alt="Background" />
      <p>SUA EMPRESA MUITO MAIS SEGURA</p>
      <p>Icones redes sociais</p>
    </footer>
  );
};

export default Home;
