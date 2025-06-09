import { memo } from "react";
import "./TransactionCard.css";

// Helper to group transactions by day (mocked for now)
function groupByDay(transactions) {
  // For demo, assign all to a few days
  return {
    "02": transactions.slice(0, 1),
    "04": transactions.slice(1, 3),
  };
}

const TransactionCard = ({ title, transactions = [], onMoreClick }) => {
  const total = transactions.reduce((sum, t) => sum + t.amount, 0);
  const grouped = groupByDay(transactions);

  return (
    <div className="transaction-card">
      <div className="transaction-card-header">
        <h3>{title}</h3>
        <button className="more-button" onClick={onMoreClick}>
          ...
        </button>
      </div>
      <div className="transaction-card-content grouped-by-day">
        {Object.entries(grouped).map(([day, txs]) => (
          <div className="transaction-day-group" key={day}>
            <div className="transaction-day-label">{day}</div>
            <div className="transaction-day-list">
              {txs.map((transaction, index) => (
                <div key={index} className="transaction-row">
                  <span className="transaction-name">{transaction.name}</span>
                  <span className="transaction-amount">
                    {transaction.amount.toFixed(2)}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="transaction-card-footer">
        <span>total:</span>
        <span className="total-amount">{total.toFixed(2)}</span>
      </div>
    </div>
  );
};

export default memo(TransactionCard);
