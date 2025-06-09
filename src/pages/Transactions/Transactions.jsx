import { useState } from "react";
import TransactionCard from "../../components/TransactionCard";
import "./Transactions.css";

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export default function Transactions() {
  // Sample data - in a real app this would come from an API
  const mockTransactions = [
    { name: "transaction A", amount: 200.0 },
    { name: "transaction B", amount: 500.0 },
    { name: "transaction C", amount: 1200.0 },
  ];

  // State for cards in columns 1 and 3
  const [leftCards, setLeftCards] = useState([]);
  const [rightCards, setRightCards] = useState([]);

  // Month selection state
  const today = new Date();
  const [selectedMonth, setSelectedMonth] = useState(today.getMonth());
  const [selectedYear, setSelectedYear] = useState(today.getFullYear());

  const handleAddLeft = () => {
    setLeftCards((cards) => [
      ...cards,
      {
        id: Date.now() + Math.random(),
        title: `Custom title L${cards.length + 1}`,
        transactions: mockTransactions,
      },
    ]);
  };
  const handleAddRight = () => {
    setRightCards((cards) => [
      ...cards,
      {
        id: Date.now() + Math.random(),
        title: `Custom title R${cards.length + 1}`,
        transactions: mockTransactions,
      },
    ]);
  };

  const handlePrevMonth = () => {
    setSelectedMonth((prev) => {
      if (prev === 0) {
        setSelectedYear((y) => y - 1);
        return 11;
      }
      return prev - 1;
    });
  };
  const handleNextMonth = () => {
    setSelectedMonth((prev) => {
      if (prev === 11) {
        setSelectedYear((y) => y + 1);
        return 0;
      }
      return prev + 1;
    });
  };

  return (
    <div className="transactions-page">
      <div className="month-selector-card">
        <button
          className="month-arrow"
          onClick={handlePrevMonth}
          aria-label="Previous month"
        >
          &#8592;
        </button>
        <div className="month-label">
          <span>{monthNames[selectedMonth]}</span>
          <span style={{ fontWeight: 600, fontSize: "1.3rem" }}>
            {selectedYear}
          </span>
        </div>
        <button
          className="month-arrow"
          onClick={handleNextMonth}
          aria-label="Next month"
        >
          &#8594;
        </button>
        <div className="month-actions">
          <button
            className="month-action-btn"
            title="Add transaction"
            onClick={() => {}}
          >
            +
          </button>
          <button
            className="month-action-btn"
            title="Remove transaction"
            onClick={() => {}}
          >
            -
          </button>
          <button
            className="month-action-btn"
            title="Transfer"
            onClick={() => {}}
          >
            &#8646;
          </button>
        </div>
      </div>
      <div className="transactions-columns">
        {/* Column 1 */}
        <div className="transactions-col">
          <button
            className="add-card-btn"
            onClick={handleAddLeft}
            title="Add card"
          >
            +
          </button>
          {leftCards.map((card) => (
            <TransactionCard
              key={card.id}
              title={card.title}
              transactions={card.transactions}
              onMoreClick={() => {}}
            />
          ))}
        </div>
        {/* Column 2 (center) */}
        <div className="transactions-col center-col">
          <TransactionCard
            title="Default transactions"
            transactions={mockTransactions}
            onMoreClick={() => {}}
          />
        </div>
        {/* Column 3 */}
        <div className="transactions-col">
          <button
            className="add-card-btn"
            onClick={handleAddRight}
            title="Add card"
          >
            +
          </button>
          {rightCards.map((card) => (
            <TransactionCard
              key={card.id}
              title={card.title}
              transactions={card.transactions}
              onMoreClick={() => {}}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
