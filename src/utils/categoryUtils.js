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
    name: "Categoria desconhecida",
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
      date: new Date(transaction.date).toLocaleDateString("pt-BR"),
      value: Math.abs(value),
      color: categoryInfo.color,
      category: categoryInfo.name,
      account: transaction.account || "Conta Principal",
      isIncome: isIncome,
      isDone: isDone,
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
    const date = transaction.originalTransaction.date;
    const dayOfMonth = new Date(date).getDate().toString().padStart(2, "0");

    if (!acc[date]) {
      acc[date] = {
        date: date,
        dayOfMonth: dayOfMonth,
        transactions: [],
      };
    }

    acc[date].transactions.push(transaction);

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
