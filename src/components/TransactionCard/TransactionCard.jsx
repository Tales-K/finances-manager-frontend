import { memo } from "react";
import "./TransactionCard.css";

const TransactionCard = ({ title, transactions = [], height = "medium" }) => {
  // Calculate total correctly based on transaction values
  const total = transactions.reduce((sum, t) => {
    // Use the value directly from API structure
    const amount = t.value || 0;
    return sum + amount;
  }, 0);

  const formatCurrency = (amount) => {
    const absAmount = Math.abs(amount);
    return `R$ ${absAmount.toLocaleString("pt-BR", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}`;
  };

  return (
    <div className={`transaction-card ${height}`}>
      <div className="card-header">
        <h3>{title}</h3>
        <button className="card-menu">⋯</button>
      </div>
      <div className="card-content">
        {transactions.length > 0 ? (
          transactions.map((transaction, index) => {
            const IconComponent = transaction.iconComponent;
            const amount = transaction.value || 0;
            const isIncome = amount > 0;
            
            return (
              <div key={index} className="card-transaction-item">
                <div 
                  className="transaction-icon"
                  style={{ backgroundColor: transaction.color || '#6b7280' }}
                >
                  {IconComponent && <IconComponent size={16} />}
                </div>
                
                <div className="transaction-details">
                  <div className="transaction-title">
                    {transaction.title || transaction.description || 'Transaction'}
                  </div>
                  <div className="transaction-account">
                    {transaction.account || 'Main Account'}
                  </div>
                </div>

                <div className="transaction-amount-section">
                  <div className={`transaction-amount ${isIncome ? "income" : "expense"}`}>
                    {isIncome ? "+" : "-"}{formatCurrency(amount)}
                  </div>
                  <div className="transaction-status">
                    {transaction.paid || transaction.isDone ? "✓" : "⏱"}
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div className="empty-card">
            <span>No transactions</span>
          </div>
        )}
      </div>
      <div className="card-footer">
        <span className="total-label">total:</span>
        <span className={`total-amount ${total < 0 ? "negative" : "positive"}`}>
          {total < 0 ? "-" : "+"}R$ {Math.abs(total).toLocaleString("pt-BR", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
        </span>
      </div>
    </div>
  );
};

export default memo(TransactionCard);
