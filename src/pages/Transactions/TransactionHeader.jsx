import { format } from "date-fns";
import { enUS } from "date-fns/locale";
import { AddTransactionButton } from "../../components";
import "./TransactionHeader.css";

export default function TransactionHeader({ 
  currentDate, 
  onPrevMonth, 
  onNextMonth 
}) {
  return (
    <div className="transactions-header">
      <div className="title-section">
        <h1>Transactions</h1>
        <AddTransactionButton />
      </div>

      <div className="month-navigator">
        <button onClick={onPrevMonth} className="nav-arrow">
          ←
        </button>
        <span className="month-display">
          {format(currentDate, "MMMM yyyy", { locale: enUS })}
        </span>
        <button onClick={onNextMonth} className="nav-arrow">
          →
        </button>
      </div>

      <div className="header-actions">
        <button className="action-btn" title="Menu">
          <span>⋮</span>
        </button>
      </div>
    </div>
  );
}
