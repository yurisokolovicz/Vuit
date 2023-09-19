import React from "react";

import "./VuitCredInfo.css";

const VuitCredInfo = () => {
  const paragraphs = [
    "A Vuit Cred é uma empresa do Grupo Vuit, que é responsável pela gestão de mais de 150 mil pessoas e mais de 1.500 empresas assistidas por seus produtos e benefícios.",
    "Devido à capilaridade de clientes espalhados em todos os estados brasileiros, foi possível conquistar reduções nas taxas, nos custos e personalizar os processos.",
    "Contratando o crédito consignado com a Vuit Cred é possível ajudar seus colaboradores a terem crédito ágil e simples, tudo com desburocratização, sendo um facilitador ao RH da empresa.",
    "- MENOR TAXA DE JUROS",
    "- EDUCAÇÃO FINANCEIRA E DE QUALIDADE",
    "41 2101 1724",
    "41 99267 2010",
    "@VUITCRED",
  ];

  return (
    <div className="conteudo-cred-container">
      {paragraphs.map((text, index) => (
        <p key={index}>{text}</p>
      ))}
    </div>
  );
};

export default VuitCredInfo;
