import React from "react";

import backgroundImage from "../..//src/img/Homepage/block_images/logo-footer.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <p>Rua Pasteur, 463 - Água Verde -13 andar</p>
      <p>Curitiba-PR</p>
      <img src={backgroundImage} alt="Background" />
    </footer>
  );
};

export default Footer;
