import { useState } from "react";
import { FaPlus, FaCreditCard, FaReceipt } from "react-icons/fa";
import "./AddTransactionButton.css";

export default function AddTransactionButton() {
  const [showOptions, setShowOptions] = useState(false);

  const handleOptionClick = (type) => {
    console.log(`Adding ${type} transaction`);
    setShowOptions(false);
  };

  return (
    <div
      className="add-transaction-container"
      onMouseEnter={() => setShowOptions(true)}
      onMouseLeave={() => setShowOptions(false)}
    >
      <button className="add-btn" title="Add Transaction">
        <FaPlus />
        <span>Add</span>
      </button>

      {showOptions && (
        <div className="add-transaction-options">
          <button
            className="add-option"
            onClick={() => handleOptionClick("expense")}
            title="New Expense"
          >
            <FaCreditCard />
            <span>New Expense</span>
          </button>
          <button
            className="add-option"
            onClick={() => handleOptionClick("income")}
            title="New Income"
          >
            <FaReceipt />
            <span>New Income</span>
          </button>
        </div>
      )}
    </div>
  );
}
