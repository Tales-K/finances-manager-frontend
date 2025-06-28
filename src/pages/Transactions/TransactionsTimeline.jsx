import React from "react";
import "./TransactionsTimeline.css";

function formatValue(val, isIncome = false) {
  const formattedValue = `R$ ${val.toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
  })}`;
  return isIncome ? `+${formattedValue}` : `-${formattedValue}`;
}

export default function TransactionsTimeline({ title, transactionGroups }) {
  return (
    <div className="transactions-timeline">
      <div className="transactions-timeline-header">
        <h2 className="transactions-timeline-title">{title}</h2>
      </div>

      <div className="transactions-timeline-content">
        {transactionGroups.map((group) => (
          <div key={group.date} className="transactions-timeline-group">
            <div className="transactions-timeline-date">
              <span className="transactions-timeline-day">
                {group.dayOfMonth}
              </span>
            </div>

            <div className="transactions-timeline-items">
              {group.transactions.map((transaction) => {
                const IconComponent = transaction.iconComponent;
                return (
                  <div
                    key={transaction.id}
                    className="transactions-timeline-item"
                  >
                    <div className="transactions-timeline-icon-wrapper">
                      <div
                        className="transactions-timeline-icon"
                        style={{ backgroundColor: transaction.color }}
                      >
                        <IconComponent color="white" size={16} />
                      </div>
                    </div>

                    <div className="transactions-timeline-content-wrapper">
                      <div className="transactions-timeline-info">
                        <div className="transactions-timeline-description">
                          {transaction.title}
                        </div>
                        <div className="transactions-timeline-account">
                          {transaction.account}
                        </div>
                      </div>

                      <div className="transactions-timeline-amount-wrapper">
                        <div
                          className={`transactions-timeline-amount ${
                            transaction.isIncome ? "income" : "expense"
                          }`}
                        >
                          {formatValue(transaction.value, transaction.isIncome)}
                        </div>
                        <div className="transactions-timeline-status">
                          <span className="transactions-timeline-status-icon">
                            {transaction.isDone ? "✓" : "⏱"}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
