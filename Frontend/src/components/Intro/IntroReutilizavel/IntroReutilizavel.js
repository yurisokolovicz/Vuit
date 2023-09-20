import React from "react";

import Youtube from "../../Youtube/Youtube";
import "./IntroReutilizavel.css";

const IntroReutilizavel = ({
  showH3,
  showH4,
  showYoutube,
  showP,
  youtubeSrc,
  youtubeTitle,
}) => {
  return (
    <div className="video-container">
      {showH3 && <h3>O QUE É O GRUPO VUIT</h3>}
      {showH4 && <h4>O GRUPO VUIT</h4>}
      {showYoutube && <Youtube src={youtubeSrc} title={youtubeTitle} />}
      {showP && (
        <p>
          Vuit surge da necessidade de expansão de uma grande operação já
          existente, orientada para a customização da gestão de seguros de vida,
          saúde, crédito consignado e benefícios às empresas e empregados.
          <br></br>
          <br></br>
          Focada na consultoria de seguros e benefícios, a Vuit quebra
          paradigmas no mercado atuando de forma disruptiva com conceitos
          colaborativos que promovem todo o ecossistema envolvido.
        </p>
      )}
    </div>
  );
};

export default IntroReutilizavel;
