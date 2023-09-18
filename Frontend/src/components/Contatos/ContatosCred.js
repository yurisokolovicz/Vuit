import React from "react";

import Instagram from "../Instagram/Instagram";
import "./ContatosCred.css";

const ContatosCred = () => {
  return (
    <div className="contato-cred-container">
      <div className="contato-cred-text-container">
        <h3>CONTATOS</h3>
        <h4>VAMOS CONVERSAR?</h4>
      </div>
      <p>
        Venha fazer parte deste ecossistema que tem mudado a vida das pessoas.
        Será um prazer tê-los conosco.
      </p>
      <Instagram link="https://www.instagram.com/vuitcred/" />
    </div>
  );
};

export default ContatosCred;
