import React from "react";

import "./YoutubeImbedCred.css";

const YoutubeImbedCred = () => {
  return (
    <div className="video-container">
      <h3>O QUE É O GRUPO VUIT</h3>
      <h4>O GRUPO VUIT</h4>
      <iframe
        // Proporção original: 16/9
        width="700"
        height="394"
        src="https://www.youtube.com/embed/kdPSpUR9BLY?si=w3qNc5oU6pqDucBm"
        title="O Grupo Vuit"
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <p>
        Vuit surge da necessidade de expansão de uma grande operação já
        existente, orientada para a customização da gestão de seguros de vida,
        saúde, crédito consignado e benefícios às empresas e empregados.
        <br></br>
        <br></br>
        Focada na consultoria de seguros e benefícios, a Vuit quebra paradigmas
        no mercado atuando de forma disruptiva com conceitos colaborativos que
        promovem todo o ecossistema envolvido.
      </p>
    </div>
  );
};

export default YoutubeImbedCred;
