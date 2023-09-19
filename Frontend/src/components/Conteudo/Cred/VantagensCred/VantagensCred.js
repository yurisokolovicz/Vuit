import React from "react";

import "./VantagensCred.css";

const VantagensCred = () => {
  const advantages = [
    "APOIO EM EVENTOS E CAMPANHAS DA EMPRESA OU INSTITUIÇÃO",
    "AÇÕES COMERCIAIS PARA COLABORADORES E PARCEIROS",
    "REBATE DE ATÉ 2% PARA A EMPRESA SOBRE A PRODUÇÃO MENSAL PAGA",
    "CURSO DE EDUCAÇÃO FINANCEIRA, DIGITAL, GRATUITO E COM CERTIFICADO PARA TODOS OS COLABORADORES",
  ];

  return (
    <div className="vantagens-cred-container">
      <ul className="lista-com-hifens">
        {advantages.map((advantage, index) => (
          <li key={index}>{advantage}</li>
        ))}
      </ul>
    </div>
  );
};

export default VantagensCred;
