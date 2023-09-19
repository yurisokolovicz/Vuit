import React from "react";

import PdfSvg from "../../CustomSvg/PdfSvg";
import imagemPdf from "../../../img/Homepage/botao/pdf.png";

import "./BotaoBaixePdf.css";

function BotaoBaixePdf() {
  return (
    <div className="botao-baixepdf">
      <button>
        <div className="icon-div">
          <img src={imagemPdf} alt="PDF Icon" className="pdf-icon" />{" "}
        </div>
        <div className="text-div">
          <PdfSvg width="24" height="24" /> Baixe PDF apresentação Tudo na Vuit!
        </div>
      </button>
    </div>
  );
}

export default BotaoBaixePdf;
