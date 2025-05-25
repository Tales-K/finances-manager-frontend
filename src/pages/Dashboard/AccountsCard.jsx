import "./AccountsCard.css";
import { FaEye } from "react-icons/fa";

const mockAccount = {
  name: "Nuconta Tales",
  type: "Conta manual",
  value: 5742.75,
  color: "#a020f0",
  icon: (
    <svg
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="18" cy="18" r="18" fill="#a020f0" />
      <text
        x="50%"
        y="55%"
        textAnchor="middle"
        fill="#fff"
        fontSize="18"
        fontFamily="Arial"
        dy=".3em"
      >
        nu
      </text>
    </svg>
  ),
};

function formatValue(val) {
  return `R$ ${val.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}`;
}

export default function AccountsCard() {
  return (
    <div className="accounts-card">
      <div className="accounts-balance-row">
        <span className="accounts-balance-label">Saldo geral</span>
        <span className="accounts-balance-value">
          {formatValue(mockAccount.value)}
        </span>
        <FaEye className="accounts-balance-eye" />
      </div>
      <hr className="accounts-divider" />
      <div className="accounts-title">Minhas contas</div>
      <div className="accounts-list">
        <div className="accounts-list-item">
          <span className="accounts-list-icon">{mockAccount.icon}</span>
          <span className="accounts-list-info">
            <span className="accounts-list-name">{mockAccount.name}</span>
            <span className="accounts-list-type">{mockAccount.type}</span>
          </span>
          <span className="accounts-list-value">
            {formatValue(mockAccount.value)}
          </span>
        </div>
      </div>
      <button className="accounts-manage-btn" disabled>
        Gerenciar contas
      </button>
    </div>
  );
}
