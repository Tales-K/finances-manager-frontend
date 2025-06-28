import "./TransactionsPage.css";
import TransactionsTimeline from "./TransactionsTimeline";
import TransactionHeader from "./TransactionHeader";
import TransactionSidebar from "./TransactionSidebar";
import { useState, useEffect } from "react";
import { getTransactions, getCategories } from "../../api";
import {
  formatTransactionsWithCategories,
  groupTransactionsByDate,
} from "../../utils";
import { addMonths, subMonths } from "date-fns";
import { FilterBar } from "../../components";
import { useTransactionFilters } from "../../hooks/useTransactionFilters";

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

  // Use the filtering hook with object composition
  const filteredTransactions = useTransactionFilters(transactions, {
    filterText,
    filterType,
    selectedAccount,
    selectedCard,
    selectedCategory,
    selectedTags
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [transactionsData, categoriesData] = await Promise.all([
          getTransactions(),
          getCategories(),
        ]);

        setTransactions(transactionsData);
        setCategories(categoriesData);

        // Add initial custom cards after data is loaded
        const formattedForCards = formatTransactionsWithCategories(transactionsData, categoriesData);
        
        // Create initial left card
        const initialLeftCard = {
          id: 'initial-left',
          title: 'Recent Expenses',
          transactions: formattedForCards.filter(t => !t.isIncome).slice(0, 3),
          height: "medium",
        };

        // Create initial right card  
        const initialRightCard = {
          id: 'initial-right',
          title: 'Recent Income',
          transactions: formattedForCards.filter(t => t.isIncome).slice(0, 3),
          height: "medium",
        };

        setLeftCards([initialLeftCard]);
        setRightCards([initialRightCard]);

      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Handle month navigation
  const handlePrevMonth = () => {
    setCurrentDate((prev) => subMonths(prev, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate((prev) => addMonths(prev, 1));
  };

  // Handle card operations - extracted to helper function
  const createCustomCard = (transactions, categories, cardType, cardsLength) => {
    const filteredTransactions = transactions.filter((t) => {
      const title = t.title || t.description || '';
      return title.toLowerCase().includes(filterText.toLowerCase());
    });

    const formattedForCard = formatTransactionsWithCategories(filteredTransactions, categories);

    return {
      id: Date.now() + Math.random(),
      title: `Custom title ${cardType}${cardsLength + 1}`,
      transactions: formattedForCard.slice(0, 3),
      height: "medium",
    };
  };

  const handleAddLeftCard = () => {
    const newCard = createCustomCard(transactions, categories, 'A', leftCards.length);
    setLeftCards((prev) => [...prev, newCard]);
  };

  const handleAddRightCard = () => {
    const newCard = createCustomCard(transactions, categories, 'B', rightCards.length);
    setRightCards((prev) => [...prev, newCard]);
  };

  // Handle toggle paid status
  const handleTogglePaid = (transactionId, newPaidStatus) => {
    setTransactions((prevTransactions) =>
      prevTransactions.map((transaction) =>
        transaction.id === transactionId
          ? { ...transaction, paid: newPaidStatus }
          : transaction
      )
    );
  };

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
      <TransactionHeader
        currentDate={currentDate}
        onPrevMonth={handlePrevMonth}
        onNextMonth={handleNextMonth}
      />

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
        <TransactionSidebar
          cards={leftCards}
          onAddCard={handleAddLeftCard}
          position="left"
        />

        {/* Center Timeline */}
        <div className="center-content">
          <TransactionsTimeline
            title="All Transactions"
            transactionGroups={transactionGroups}
            onTogglePaid={handleTogglePaid}
          />
        </div>

        {/* Right Sidebar */}
        <TransactionSidebar
          cards={rightCards}
          onAddCard={handleAddRightCard}
          position="right"
        />
      </div>
    </div>
  );
}
