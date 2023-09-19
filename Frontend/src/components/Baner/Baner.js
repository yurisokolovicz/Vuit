import React from "react";

import "./Baner.css";
import BanerImage from "../../img/Homepage/block_images/vuit-seguros.png";

function Baner() {
  return (
    <div className="baner-div">
      <img src={BanerImage} alt="PDF Icon" className="baner-img" />{" "}
    </div>
  );
}

export default Baner;
