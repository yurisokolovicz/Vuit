import React from "react";

import "./VuitBeneficiosInfo.css";

const VuitBeneficiosInfo = () => {
  const advantages = [
    "A Sodexo possui vasta rede credenciada em todo o território nacional;",
    "Redução do tempo de recrutamento;",
    "Redução com absenteísmos;",
    "Redução da folha de pagamento;",
    "Implantação diferenciada aos clientes;",
    "Praticidade na gestão dos benefícios e relatórios;",
    "Possibilidade de negociação diferenciada.",
  ];

  return (
    <div className="conteudo-beneficios-container">
      <p>Conheça as vantagens das empresas que utilizam Vuit Benefícios:</p>
      <ul className="lista-com-hifens">
        {advantages.map((advantage, index) => (
          <li key={index}>{advantage}</li>
        ))}
      </ul>
    </div>
  );
};

export default VuitBeneficiosInfo;
