import "./TransactionsPage.css";
import TransactionsTimeline from "./TransactionsTimeline";
import { useState, useEffect } from "react";
import { getTransactions, getCategories } from "../../api";
import {
  formatTransactionsWithCategories,
  groupTransactionsByDate,
} from "../../utils";
import { format, addMonths, subMonths } from "date-fns";
import { ptBR } from "date-fns/locale";
import { 
  AddTransactionButton, 
  AddCardButton, 
  TransactionCard, 
  FilterBar 
} from "../../components";

export default function Transactions() {
  const [transactions, setTransactions] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  
  // Filter states
  const [filterText, setFilterText] = useState("");
  const [filterType, setFilterType] = useState("all");
  const [selectedAccount, setSelectedAccount] = useState(null);
  const [selectedCard, setSelectedCard] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedTags, setSelectedTags] = useState([]);
  
  const [currentDate, setCurrentDate] = useState(new Date());
  const [leftCards, setLeftCards] = useState([]);
  const [rightCards, setRightCards] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [transactionsData, categoriesData] = await Promise.all([
          getTransactions(),
          getCategories(),
        ]);

        setTransactions(transactionsData);
        setCategories(categoriesData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Handle month navigation with date-fns
  const handlePrevMonth = () => {
    setCurrentDate((prev) => subMonths(prev, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate((prev) => addMonths(prev, 1));
  };

  // Handle card operations
  const handleAddLeftCard = () => {
    const filteredTransactions = transactions.filter((t) => {
      const title = t.title || t.description || '';
      return title.toLowerCase().includes(filterText.toLowerCase());
    });

    // Format transactions the same way as timeline
    const formattedForCard = formatTransactionsWithCategories(filteredTransactions, categories);

    setLeftCards((prev) => [
      ...prev,
      {
        id: Date.now() + Math.random(),
        title: `Custom title A${prev.length + 1}`,
        transactions: formattedForCard.slice(0, 3), // Sample first 3
        height: "medium",
      },
    ]);
  };

  const handleAddRightCard = () => {
    const filteredTransactions = transactions.filter((t) => {
      const title = t.title || t.description || '';
      return title.toLowerCase().includes(filterText.toLowerCase());
    });

    // Format transactions the same way as timeline
    const formattedForCard = formatTransactionsWithCategories(filteredTransactions, categories);

    setRightCards((prev) => [
      ...prev,
      {
        id: Date.now() + Math.random(),
        title: `Custom title B${prev.length + 1}`,
        transactions: formattedForCard.slice(0, 3), // Sample first 3
        height: "medium",
      },
    ]);
  };

  // Enhanced filtering logic
  const filteredTransactions = transactions.filter((t) => {
    const title = t.title || t.description || '';
    const matchesText = title.toLowerCase().includes(filterText.toLowerCase());
    
    // Account filter
    if (selectedAccount && t.accountId !== selectedAccount) return false;
    
    // Card filter  
    if (selectedCard && t.cardId !== selectedCard) return false;
    
    // Category filter
    if (selectedCategory && t.categoryId !== selectedCategory) return false;
    
    // Tags filter (transaction must have at least one of the selected tags)
    if (selectedTags.length > 0) {
      const transactionTags = t.tags || [];
      const hasMatchingTag = selectedTags.some(tagId => 
        transactionTags.includes(tagId)
      );
      if (!hasMatchingTag) return false;
    }
    
    // Type filter
    if (filterType === "all") return matchesText;
    if (filterType === "income") return matchesText && t.type === "INCOME";
    if (filterType === "income-received") return matchesText && t.type === "INCOME" && t.paid;
    if (filterType === "income-pending") return matchesText && t.type === "INCOME" && !t.paid;
    if (filterType === "expenses") return matchesText && t.type === "EXPENSE";
    if (filterType === "expenses-paid") return matchesText && t.type === "EXPENSE" && t.paid;
    if (filterType === "expenses-pending") return matchesText && t.type === "EXPENSE" && !t.paid;
    if (filterType === "transfers") return matchesText && t.type === "TRANSFER";
    if (filterType === "transfers-paid") return matchesText && t.type === "TRANSFER" && t.paid;
    if (filterType === "transfers-pending") return matchesText && t.type === "TRANSFER" && !t.paid;
    if (filterType === "fixed") return matchesText && t.isFixed;
    if (filterType === "installments") return matchesText && t.isInstallment;
    
    return matchesText;
  });

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  // Format all transactions with category info
  const formattedTransactions = formatTransactionsWithCategories(
    filteredTransactions,
    categories
  );

  // Group transactions by date for timeline display
  const transactionGroups = groupTransactionsByDate(formattedTransactions);

  return (
    <div className="transactions-page">
      {/* Header with title and month navigation */}
      <div className="transactions-header">
        <div className="title-section">
          <h1>Transactions</h1>
          <AddTransactionButton />
        </div>

        <div className="month-navigator">
          <button onClick={handlePrevMonth} className="nav-arrow">
            ←
          </button>
          <span className="month-display">
            {format(currentDate, "MMMM yyyy", { locale: ptBR })}
          </span>
          <button onClick={handleNextMonth} className="nav-arrow">
            →
          </button>
        </div>

        <div className="header-actions">
          <button className="action-btn" title="Menu">
            <span>⋮</span>
          </button>
        </div>
      </div>

      {/* Filter Bar */}
      <FilterBar
        filterText={filterText}
        onFilterTextChange={setFilterText}
        filterType={filterType}
        onFilterTypeChange={setFilterType}
        selectedAccount={selectedAccount}
        onAccountChange={setSelectedAccount}
        selectedCard={selectedCard}
        onCardChange={setSelectedCard}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        selectedTags={selectedTags}
        onTagsChange={setSelectedTags}
      />

      {/* Main Content Area */}
      <div className="transactions-content">
        {/* Left Sidebar */}
        <div className="sidebar left-sidebar">
          {leftCards.map((card) => (
            <TransactionCard key={card.id} {...card} />
          ))}
          <AddCardButton onClick={handleAddLeftCard} />
        </div>

        {/* Center Timeline */}
        <div className="center-content">
          <TransactionsTimeline
            title="All Transactions"
            transactionGroups={transactionGroups}
          />
        </div>

        {/* Right Sidebar */}
        <div className="sidebar right-sidebar">
          {rightCards.map((card) => (
            <TransactionCard key={card.id} {...card} />
          ))}
          <AddCardButton onClick={handleAddRightCard} />
        </div>
      </div>
    </div>
  );
}
