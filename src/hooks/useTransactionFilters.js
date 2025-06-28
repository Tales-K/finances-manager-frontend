import { useMemo } from 'react';

// Filter composition objects
const textFilter = (filterText) => (transaction) => {
  if (!filterText) return true;
  const title = transaction.title || transaction.description || '';
  return title.toLowerCase().includes(filterText.toLowerCase());
};

const accountFilter = (selectedAccount) => (transaction) => {
  if (!selectedAccount) return true;
  return transaction.accountId === selectedAccount;
};

const cardFilter = (selectedCard) => (transaction) => {
  if (!selectedCard) return true;
  return transaction.cardId === selectedCard;
};

const categoryFilter = (selectedCategory) => (transaction) => {
  if (!selectedCategory) return true;
  return transaction.categoryId === selectedCategory;
};

const tagsFilter = (selectedTags) => (transaction) => {
  if (!selectedTags.length) return true;
  const transactionTags = transaction.tags || [];
  return selectedTags.some(tagId => transactionTags.includes(tagId));
};

// Type filter mappings using object composition
const typeFilters = {
  all: () => true,
  income: (t) => t.type === "INCOME",
  'income-received': (t) => t.type === "INCOME" && t.paid,
  'income-pending': (t) => t.type === "INCOME" && !t.paid,
  expenses: (t) => t.type === "EXPENSE",
  'expenses-paid': (t) => t.type === "EXPENSE" && t.paid,
  'expenses-pending': (t) => t.type === "EXPENSE" && !t.paid,
  transfers: (t) => t.type === "TRANSFER",
  'transfers-paid': (t) => t.type === "TRANSFER" && t.paid,
  'transfers-pending': (t) => t.type === "TRANSFER" && !t.paid,
  fixed: (t) => t.isFixed,
  installments: (t) => t.isInstallment,
};

/**
 * Custom hook for filtering transactions using object composition
 * Avoids multiple if statements by composing filter functions
 */
export function useTransactionFilters(transactions, filters) {
  const {
    filterText,
    filterType,
    selectedAccount,
    selectedCard,
    selectedCategory,
    selectedTags
  } = filters;

  const filteredTransactions = useMemo(() => {
    // Compose all filter functions
    const filterFunctions = [
      textFilter(filterText),
      accountFilter(selectedAccount),
      cardFilter(selectedCard),
      categoryFilter(selectedCategory),
      tagsFilter(selectedTags),
      typeFilters[filterType] || typeFilters.all
    ];

    // Apply all filters using composition
    return transactions.filter(transaction => 
      filterFunctions.every(filterFn => filterFn(transaction))
    );
  }, [
    transactions,
    filterText,
    filterType,
    selectedAccount,
    selectedCard,
    selectedCategory,
    selectedTags
  ]);

  return filteredTransactions;
}
