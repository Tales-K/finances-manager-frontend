import { FaEllipsisH } from "react-icons/fa";

/**
 * Utility functions for working with categories
 */

/**
 * Gets category information by ID from a list of categories
 * @param {Array} categories - Array of category objects
 * @param {string} categoryId - The ID of the category to find
 * @returns {Object} Category info with icon, color, and name
 */
export const getCategoryInfo = (categories, categoryId) => {
  const category = categories.find((cat) => cat.id === categoryId);
  if (category) {
    return {
      icon: category.icon,
      color: category.color,
      name: category.name,
      type: category.type,
      isUserCreated: category.isUserCreated || false,
    };
  }
  // Fallback for unknown categories
  return {
    icon: FaEllipsisH,
    color: "#6b7280",
    name: "Unknown Category",
    type: null,
    isUserCreated: false,
  };
};

/**
 * Formats transaction data with category information
 * @param {Array} transactions - Array of transaction objects
 * @param {Array} categories - Array of category objects
 * @returns {Array} Formatted transactions with icon component and color from categories
 */
export const formatTransactionsWithCategories = (transactions, categories) => {
  return transactions.map((transaction) => {
    const categoryInfo = getCategoryInfo(categories, transaction.categoryId);

    // Handle new API structure (value, title, paid, type) and old structure (amountInCents, description, done, activityType)
    const value = transaction.value || (transaction.amountInCents ? transaction.amountInCents / 100 : 0);
    const isIncome = transaction.type === "INCOME" || (transaction.activityType === 1) || value > 0;
    const isDone = transaction.paid !== undefined ? transaction.paid : transaction.done;
    const title = transaction.title || transaction.description;

    return {
      id: transaction.id,
      iconComponent: categoryInfo.icon || FaEllipsisH,
      title: title,
      date: new Date(transaction.date).toLocaleDateString("en-US"),
      value: Math.abs(value),
      color: categoryInfo.color,
      category: categoryInfo.name,
      account: transaction.account || "Main Account",
      isIncome: isIncome,
      paid: isDone, // Use 'paid' instead of 'isDone' to match timeline component
      originalTransaction: transaction,
    };
  });
};

/**
 * Groups transactions by date for timeline display
 * @param {Array} transactions - Array of transaction objects
 * @returns {Array} Array of date groups with transactions
 */
export const groupTransactionsByDate = (transactions) => {
  const grouped = transactions.reduce((acc, transaction) => {
    const fullDate = transaction.originalTransaction.date;
    // Use only the date part (YYYY-MM-DD) as the key to group transactions from the same day
    const dateKey = new Date(fullDate).toISOString().split('T')[0];
    const dateObj = new Date(fullDate);
    
    // Enhanced date formatting
    const dayOfMonth = dateObj.getDate().toString().padStart(2, "0");
    const dayName = dateObj.toLocaleDateString("en-US", { weekday: "short" }); // Mon, Tue, etc.
    const monthName = dateObj.toLocaleDateString("en-US", { month: "short" }); // Jan, Feb, etc.
    const fullDateDisplay = dateObj.toLocaleDateString("en-US", { 
      weekday: "short", 
      month: "short", 
      day: "numeric" 
    }); // "Mon, Jun 2"

    if (!acc[dateKey]) {
      acc[dateKey] = {
        date: fullDate, // Keep original date for sorting
        dayOfMonth: dayOfMonth,
        dayName: dayName,
        monthName: monthName,
        fullDateDisplay: fullDateDisplay,
        transactions: [],
      };
    }

    acc[dateKey].transactions.push(transaction);

    return acc;
  }, {});

  // Sort by date and return as array
  return Object.values(grouped).sort(
    (a, b) => new Date(a.date) - new Date(b.date)
  );
};

/**
 * Filters transactions by date and completion status
 * @param {Array} transactions - Array of transaction objects
 * @param {Date} currentDate - The current date to compare against
 * @returns {Object} Object with overdue and upcoming transaction arrays
 */
export const categorizeTransactionsByDate = (
  transactions,
  currentDate = new Date()
) => {
  const overdueTransactions = transactions.filter((transaction) => {
    const transactionDate = new Date(transaction.date);
    const isDone = transaction.paid !== undefined ? transaction.paid : transaction.done;
    const isExpense = transaction.type === "EXPENSE" || transaction.activityType === 0;
    return (
      !isDone &&
      transactionDate < currentDate &&
      isExpense
    );
  });

  const upcomingTransactions = transactions.filter((transaction) => {
    const transactionDate = new Date(transaction.date);
    const isDone = transaction.paid !== undefined ? transaction.paid : transaction.done;
    const isExpense = transaction.type === "EXPENSE" || transaction.activityType === 0;
    return (
      !isDone &&
      transactionDate >= currentDate &&
      isExpense
    );
  });

  return {
    overdue: overdueTransactions,
    upcoming: upcomingTransactions,
  };
};
