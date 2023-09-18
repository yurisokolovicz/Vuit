import React from "react";

// import InstagramVuitSeguros from "../Instagram/InstagramVuitSeguros";
import "./ContatosHome.css";
import Instagram from "../Instagram/Instagram";

const ContatosHome = () => {
  return (
    <div className="contato-container">
      <h3>CONTATOS</h3>
      {/* <InstagramVuitSeguros /> */}
      <Instagram link="https://www.instagram.com/vuitseguros/" />
    </div>
  );
};

export default ContatosHome;
