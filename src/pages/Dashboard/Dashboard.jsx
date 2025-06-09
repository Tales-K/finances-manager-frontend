import "./Dashboard.css";
import { FaArrowDown, FaArrowUp, FaExchangeAlt } from "react-icons/fa";
import TransactionsList from "./TransactionsList";
import ReceivablesList from "./ReceivablesList";
import AccountsCard from "./AccountsCard";
import CreditCardsCard from "./CreditCardsCard";

export default function Dashboard() {
  return (
    <div className="dashboard-container dashboard-wide">
      <div className="dashboard-top-card">
        <div className="dashboard-top-content">
          <div className="dashboard-top-left">
            <div className="dashboard-top-row dashboard-center">
              <div className="dashboard-top-item dashboard-center">
                <FaArrowUp className="dashboard-top-icon income" />
                <span>Receitas do mês</span>
                <div className="dashboard-top-value">R$5.000,00</div>
              </div>
              <div className="dashboard-top-item dashboard-center">
                <FaArrowDown className="dashboard-top-icon expense" />
                <span>Despesas do mês</span>
                <div className="dashboard-top-value">R$3.200,00</div>
              </div>
            </div>
          </div>
          <div className="dashboard-top-divider" />
          <div className="dashboard-top-right dashboard-center">
            <button className="dashboard-action-btn expense">
              <FaArrowDown /> Despesa
            </button>
            <button className="dashboard-action-btn income">
              <FaArrowUp /> Receita
            </button>
            <button className="dashboard-action-btn transfer">
              <FaExchangeAlt /> Transferência
            </button>
          </div>
        </div>
      </div>
      <div className="dashboard-columns">
        <div className="dashboard-col">
          <div className="graphic-card">
            <h3>Contas a pagar</h3>
            <TransactionsList />
          </div>
          <div className="graphic-card">
            <h3>Contas a receber</h3>
            <ReceivablesList />
          </div>
        </div>
        <div className="dashboard-col">
          <div className="graphic-card">
            <h3>Minhas contas</h3>
            <AccountsCard />
          </div>
          <div className="graphic-card">
            <h3>Meus cartões</h3>
            <CreditCardsCard />
          </div>
        </div>
        <div className="dashboard-col">
          <div className="graphic-card">
            <h3>Maiores gastos do mês atual</h3>
          </div>
          <div className="graphic-card"></div>
        </div>
      </div>
    </div>
  );
}
