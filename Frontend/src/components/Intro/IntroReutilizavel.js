import React from "react";

import Youtube from "../Youtube/Youtube";
import "./IntroReutilizavel.css";

const IntroReutilizavel = ({
  showH3,
  showH4,
  showYoutube,
  showP,
  youtubeSrc,
  youtubeTitle,
  paragrafo1,
  paragrafo2,
}) => {
  return (
    <div className="video-container">
      {showH3 && <h3>O QUE É O GRUPO VUIT</h3>}
      {showH4 && <h4>O GRUPO VUIT</h4>}
      {showYoutube && <Youtube src={youtubeSrc} title={youtubeTitle} />}
      <div className="parag-container">
        {showP && <p>{paragrafo1}</p>}
        {showP && <p>{paragrafo2}</p>}
      </div>
    </div>
  );
};

export default IntroReutilizavel;
