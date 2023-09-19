import React from "react";

import GoogleMapsApi from "../GoogleMapsApi/GoogleMapsApi";
import "./Localizacao.css";

const Localizacao = () => {
  return (
    <div className="localizacao-container">
      <h3>LOCALIZAÇÃO:</h3>
      <div className="container-map">
        <GoogleMapsApi />
      </div>
    </div>
  );
};

export default Localizacao;
