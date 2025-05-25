import React from "react";
import "./CreditCardsCard.css";
import { FaEye } from "react-icons/fa";

export default function CreditCardsCard() {
  // Mock data for demonstration
  const card = {
    bank: "Nubank Tales",
    type: "Cartão manual",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fb/Nubank_logo_2021.svg",
    available: 7890.06,
    bill: -2443.05,
    due: "12/5",
  };

  return (
    <div className="credit-cards-card">
      <div className="credit-cards-header">
        <span className="credit-cards-title">
          Faturas de Maio <span className="credit-cards-info">&#9432;</span>
        </span>
        <span className="credit-cards-bill-value negative">R$ -2.443,05</span>
        <FaEye className="credit-cards-eye" />
      </div>
      <hr className="credit-cards-divider" />
      <div className="credit-cards-section-title">Meus cartões</div>
      <div className="credit-cards-main">
        <img src={card.logo} alt="Nubank" className="credit-cards-logo" />
        <div className="credit-cards-details">
          <div className="credit-cards-bank">{card.bank}</div>
          <div className="credit-cards-type">{card.type}</div>
        </div>
        <button className="credit-cards-bill-btn">Ver fatura</button>
      </div>
      <div className="credit-cards-balance-row">
        <div className="credit-cards-balance-block">
          <div className="credit-cards-balance-label">Limite Disponível</div>
          <div className="credit-cards-balance-value">R$ 7.890,06</div>
        </div>
        <div className="credit-cards-balance-block">
          <div className="credit-cards-balance-label">
            Fatura atual <span className="credit-cards-due">(Venc. 12/5)</span>
          </div>
          <div className="credit-cards-balance-value negative">
            R$ -2.443,05
          </div>
        </div>
      </div>
      <button className="credit-cards-manage-btn">Gerenciar cartões</button>
    </div>
  );
}
