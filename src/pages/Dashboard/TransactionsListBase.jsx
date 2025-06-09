import React from "react";
import "./TransactionsList.css";

function formatValue(val) {
  return `R$ ${val.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}`;
}

export default function TransactionsListBase({
  title,
  overdueLabel,
  overdue,
  upcomingLabel,
  upcoming,
  overdueAlertColor = "#fee2e2",
  overdueAlertTextColor = "#e11d48",
}) {
  return (
    <div className="transactions-listing">
      <div className="transactions-list-title">{title}</div>
      <div
        className="transactions-list-overdue-alert"
        style={{ background: overdueAlertColor, color: overdueAlertTextColor }}
      >
        {overdueLabel}
      </div>
      <div className="transactions-list-section">
        {overdue.map((item) => (
          <div className="transactions-list-item" key={item.id}>
            <span
              className="transactions-list-icon"
              style={{ color: item.color }}
            >
              {item.icon}
            </span>
            <span className="transactions-list-info">
              <span className="transactions-list-title-main">{item.title}</span>
              <span className="transactions-list-date">{item.date}</span>
            </span>
            <span className="transactions-list-value overdue">
              {formatValue(item.value)}
            </span>
          </div>
        ))}
        <div className="transactions-list-more">ver mais</div>
      </div>
      <div className="transactions-list-next-title">{upcomingLabel}</div>
      <div className="transactions-list-section">
        {upcoming.map((item) => (
          <div className="transactions-list-item" key={item.id}>
            <span
              className="transactions-list-icon"
              style={{ color: item.color }}
            >
              {item.icon}
            </span>
            <span className="transactions-list-info">
              <span className="transactions-list-title-main">{item.title}</span>
              <span className="transactions-list-date">{item.date}</span>
            </span>
            <span className="transactions-list-value">
              {formatValue(item.value)}
            </span>
          </div>
        ))}
        <div className="transactions-list-more">ver mais</div>
      </div>
    </div>
  );
}
