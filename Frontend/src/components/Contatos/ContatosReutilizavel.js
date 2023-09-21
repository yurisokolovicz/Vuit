import React from "react";

import Instagram from "../Instagram/Instagram";
import "./ContatosReutilizavel.css";

const ContatosReutilizavel = () => {
  return (
    <div className="contato-container">
      <div className="instagram-center">
        <Instagram link="https://www.instagram.com/vuitcred/" />
      </div>
    </div>
  );
};

export default ContatosReutilizavel;
