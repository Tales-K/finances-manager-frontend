import React from "react";
import "./TransactionsTimeline.css";

function formatValue(val, isIncome = false) {
  const formattedValue = val.toLocaleString("en-US", {
    minimumFractionDigits: 2,
  });
  return isIncome ? `+${formattedValue}` : `-${formattedValue}`;
}

export default function TransactionsTimeline({ title, transactionGroups, onTogglePaid }) {
  const handleTogglePaid = (transactionId, currentPaidStatus) => {
    if (onTogglePaid) {
      onTogglePaid(transactionId, !currentPaidStatus);
    }
  };

  return (
    <div className="transactions-timeline">
      <div className="transactions-timeline-header">
        <h2 className="transactions-timeline-title">{title}</h2>
      </div>

      <div className="transactions-timeline-content">
        {transactionGroups.map((group, groupIndex) => (
          <div key={group.date} className="transactions-timeline-group">
            {/* Day Header */}
            <div className="transactions-timeline-day-header">
              <span className="transactions-timeline-day-number">
                {group.dayOfMonth}
              </span>
            </div>

            {/* Transactions List for this day */}
            <div className="transactions-timeline-day-list">
              {group.transactions.map((transaction, index) => {
                const IconComponent = transaction.iconComponent;
                return (
                  <div key={transaction.id}>
                    <div className="transactions-timeline-item">
                      {/* Transaction Icon */}
                      <div className="transactions-timeline-icon-wrapper">
                        <div
                          className="transactions-timeline-icon"
                          style={{ backgroundColor: transaction.color }}
                        >
                          <IconComponent color="white" size={16} />
                        </div>
                      </div>

                      {/* Transaction Content */}
                      <div className="transactions-timeline-info">
                        <div className="transactions-timeline-description">
                          {transaction.title}
                        </div>
                        <div className="transactions-timeline-account">
                          {transaction.account}
                        </div>
                      </div>

                      {/* Amount */}
                      <div className="transactions-timeline-amount">
                        <span
                          className={`amount-value ${
                            transaction.isIncome ? "income" : "expense"
                          }`}
                        >
                          {formatValue(transaction.value, transaction.isIncome)}
                        </span>
                      </div>

                      {/* Payment Status Toggle */}
                      <div className="transactions-timeline-status">
                        <button
                          className={`status-toggle ${
                            transaction.paid ? "paid" : "unpaid"
                          }`}
                          onClick={() => handleTogglePaid(transaction.id, transaction.paid)}
                          title={transaction.paid ? "Mark as unpaid" : "Mark as paid"}
                        />
                      </div>
                    </div>

                    {/* Divider between transactions (except last one) */}
                    {index < group.transactions.length - 1 && (
                      <div className="transaction-divider"></div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Divider between days (except last group) */}
            {groupIndex < transactionGroups.length - 1 && (
              <div className="day-divider"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
