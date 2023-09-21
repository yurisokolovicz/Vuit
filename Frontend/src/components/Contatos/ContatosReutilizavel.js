import React from "react";

import Instagram from "../Instagram/Instagram";
import "./ContatosReutilizavel.css";

const ContatosReutilizavel = ({ link }) => {
  return (
    <div className="contato-container">
      <div className="instagram-center">
        <Instagram link={link} />
      </div>
    </div>
  );
};

export default ContatosReutilizavel;
