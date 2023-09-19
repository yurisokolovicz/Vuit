import React from "react";

import PdfSvg from "../../CustomSvg/PdfSvg";
import "./BotaoBaixePdf.css";

function BotaoBaixePdf() {
  return (
    <div className="botao-baixepdf">
      <button>
        <PdfSvg width="24" height="24" /> Baixe PDF apresentação Tudo na Vuit!
      </button>
    </div>
  );
}

export default BotaoBaixePdf;
