// API client utilities
import { defaultCategories } from '../data/categories';
import { mockTransactions, mockUserCategories, mockAccounts, mockCreditCards, mockTags } from './mockData';

// Mock API base URL - replace with actual API URL
const API_BASE_URL = 'http://localhost:3001/api';

/**
 * Categories API
 * Fetches both default and user-created categories
 */
export const getCategories = async () => {
  try {
    // Mock API call - replace with actual API call
    const response = await new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          data: mockUserCategories
        });
      }, 300);
    });

    // Combine default categories with user-created categories
    const userCategories = response.data.map((category) => ({
      ...category,
      icon: null, // User categories don't have predefined icons
      color: "#6b7280", // Default gray color for user categories
      isUserCreated: true,
    }));

    const allDefaultCategories = [
      ...defaultCategories.expenses,
      ...defaultCategories.incomes,
    ];

    return [...allDefaultCategories, ...userCategories];
  } catch (error) {
    console.error("Error fetching categories:", error);
    // Fallback to default categories only
    return [...defaultCategories.expenses, ...defaultCategories.incomes];
  }
};

/**
 * Transactions API
 * Fetches all transactions
 */
export const getTransactions = async () => {
  try {
    // Mock API call - replace with actual API call
    const response = await new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          data: mockTransactions,
        });
      }, 300);
    });

    return response.data;
  } catch (error) {
    console.error("Error fetching transactions:", error);
    return [];
  }
};

/**
 * Dashboard Transactions API
 * Fetches limited transactions for dashboard overview
 * Returns overdue and upcoming transactions separately
 */
export const getDashboardTransactions = async () => {
  try {
    // Mock API call - replace with actual API call
    const response = await new Promise((resolve) => {
      setTimeout(() => {
        const currentDate = new Date();
        
        // Filter for expense transactions only (type = "EXPENSE")
        const expenseTransactions = mockTransactions.filter(t => t.type === "EXPENSE");
        
        // Get overdue transactions (past due and not paid)
        const overdue = expenseTransactions
          .filter(transaction => {
            const transactionDate = new Date(transaction.date);
            return !transaction.paid && transactionDate < currentDate;
          })
          .slice(0, 4); // Limit to 4 for dashboard
        
        // Get upcoming transactions (future and not paid)
        const upcoming = expenseTransactions
          .filter(transaction => {
            const transactionDate = new Date(transaction.date);
            return !transaction.paid && transactionDate >= currentDate;
          })
          .slice(0, 4); // Limit to 4 for dashboard

        resolve({
          data: {
            overdue,
            upcoming
          }
        });
      }, 300);
    });

    return response.data;
  } catch (error) {
    console.error("Error fetching dashboard transactions:", error);
    return { overdue: [], upcoming: [] };
  }
};

/**
 * Accounts API
 * Fetches all user accounts
 */
export const getAccounts = async () => {
  try {
    const response = await new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          data: mockAccounts
        });
      }, 200);
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching accounts:", error);
    return [];
  }
};

/**
 * Credit Cards API
 * Fetches all user credit cards
 */
export const getCreditCards = async () => {
  try {
    const response = await new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          data: mockCreditCards
        });
      }, 200);
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching credit cards:", error);
    return [];
  }
};

/**
 * Tags API
 * Fetches all user tags
 */
export const getTags = async () => {
  try {
    const response = await new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          data: mockTags
        });
      }, 200);
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching tags:", error);
    return [];
  }
};
