// Mock data for API responses
// This file contains all the mocked data structures and sample data

/**
 * Mock  {
    id: 8,
    type: "EXPENSE",
    title: "Restaurant Dinner",
    value: -95.30,
    description: "Dinner at Italian restaurant",
    categoryId: 6, // Bars & Restaurants category
    accountId: 1,
    cardId: 2, // Itaú Gold
    tags: [2, 3], // Personal, Family
    date: "2025-06-12T20:00:00Z",
    paid: true,
  },
  // June 15th
  {
    id: 9,
    type: "EXPENSE",
    title: "Gym Membership",
    value: -89.90,
    description: "Monthly gym membership fee",
    categoryId: 1, // Health category
    accountId: 1,
    cardId: null,
    tags: [2, 7], // Personal, Healthructure based on API specification:
 * {
 *   id: number,
 *   type: string ("EXPENSE" | "INCOME"),
 *   title: string,
 *   value: number,
 *   description: string,
 *   categoryId: number,
 *   accountId: number,
 *   date: string (ISO date-time),
 *   paid: boolean
 * }
 */
export const mockTransactions = [
  // June 2nd - OVERDUE (past due date)
  {
    id: 1,
    type: "EXPENSE",
    title: "Psychologist",
    value: -150.00,
    description: "Monthly psychologist appointment",
    categoryId: 1, // Health category
    accountId: 1,
    cardId: null,
    tags: [4, 7], // Emergency, Health
    date: "2025-06-02T10:00:00Z",
    paid: false,
  },
  // June 1st - DEFINITELY OVERDUE for testing
  {
    id: 10,
    type: "EXPENSE",
    title: "Overdue Test Bill",
    value: -99.99,
    description: "Test overdue transaction",
    categoryId: 2, // Home category
    accountId: 1,
    cardId: null,
    tags: [],
    date: "2025-06-01T10:00:00Z",
    paid: false,
  },
  // June 4th
  {
    id: 2,
    type: "EXPENSE", 
    title: "Electricity Bill",
    value: -455.60,
    description: "Monthly electricity bill payment",
    categoryId: 2, // Home category
    accountId: 1,
    cardId: null,
    tags: [],
    date: "2025-06-04T14:30:00Z",
    paid: false,
  },
  {
    id: 3,
    type: "INCOME",
    title: "Uncle Vani's Gift",
    value: 800.00,
    description: "Gift received from uncle",
    categoryId: 15, // Gifts income category
    accountId: 2,
    cardId: null,
    tags: [3], // Family
    date: "2025-06-04T16:00:00Z",
    paid: true,
  },
  // June 7th
  {
    id: 4,
    type: "EXPENSE",
    title: "Car Insurance",
    value: -320.00,
    description: "Monthly car insurance payment",
    categoryId: 3, // Transportation category
    accountId: 1,
    cardId: 1, // Nubank Card
    tags: [1], // Work
    date: "2025-06-07T09:00:00Z",
    paid: false,
  },
  // June 8th
  {
    id: 5,
    type: "EXPENSE",
    title: "Internet",
    value: -120.00,
    description: "Monthly internet subscription",
    categoryId: 4, // Subscriptions category
    accountId: 1,
    cardId: null,
    tags: [1], // Work
    date: "2025-06-08T11:30:00Z",
    paid: false,
  },
  // June 9th
  {
    id: 6,
    type: "EXPENSE",
    title: "Grocery Shopping",
    value: -280.45,
    description: "Weekly grocery shopping",
    categoryId: 5, // Grocery category
    accountId: 1,
    cardId: 2, // Itaú Gold
    tags: [2, 3], // Personal, Family
    date: "2025-06-09T18:00:00Z",
    paid: true,
  },
  // June 10th
  {
    id: 7,
    type: "INCOME",
    title: "Freelance Project",
    value: 1200.00,
    description: "Payment for web development project",
    categoryId: 14, // Work income category
    accountId: 3, // Investment Account
    cardId: null,
    tags: [1, 5], // Work, Investment
    date: "2025-06-10T15:00:00Z",
    paid: true,
  },
  // June 12th
  {
    id: 8,
    type: "EXPENSE",
    title: "Restaurant Dinner",
    value: -95.30,
    description: "Dinner at Italian restaurant",
    categoryId: 6, // Bars & Restaurants category
    accountId: 1,
    date: "2025-06-12T20:00:00Z",
    paid: true,
  },
  // June 14th
  {
    id: 9,
    type: "EXPENSE",
    title: "Gym Membership",
    value: -80.00,
    description: "Monthly gym membership fee",
    categoryId: 7, // Personal Care category
    accountId: 1,
    date: "2025-06-14T07:00:00Z",
    paid: false,
  },
  // June 15th
  {
    id: 10,
    type: "INCOME",
    title: "Salary",
    value: 4200.00,
    description: "Monthly salary payment",
    categoryId: 17, // Salary income category
    accountId: 1,
    date: "2025-06-15T08:00:00Z",
    paid: true,
  },
  // June 16th
  {
    id: 11,
    type: "EXPENSE",
    title: "Online Course",
    value: -299.90,
    description: "React development course",
    categoryId: 8, // Education category
    accountId: 1,
    date: "2025-06-16T10:00:00Z",
    paid: true,
  },
  // June 18th
  {
    id: 12,
    type: "EXPENSE",
    title: "Pet Food",
    value: -85.60,
    description: "Monthly pet food supply",
    categoryId: 9, // Pets category
    accountId: 1,
    date: "2025-06-18T16:30:00Z",
    paid: false,
  },
  // June 20th
  {
    id: 13,
    type: "EXPENSE",
    title: "Netflix Subscription",
    value: -25.90,
    description: "Monthly Netflix subscription",
    categoryId: 4, // Subscriptions category
    accountId: 1,
    date: "2025-06-20T12:00:00Z",
    paid: true,
  },
  // June 22nd
  {
    id: 14,
    type: "EXPENSE",
    title: "Gas Station",
    value: -150.00,
    description: "Car fuel refill",
    categoryId: 3, // Transportation category
    accountId: 1,
    date: "2025-06-22T08:45:00Z",
    paid: true,
  },
  // June 24th
  {
    id: 15,
    type: "EXPENSE",
    title: "Coffee Shop",
    value: -35.80,
    description: "Coffee and snacks",
    categoryId: 11, // Food category
    accountId: 1,
    date: "2025-06-24T15:00:00Z",
    paid: true,
  },
  // June 25th
  {
    id: 16,
    type: "INCOME",
    title: "Investment Returns",
    value: 230.00,
    description: "Monthly investment dividends",
    categoryId: 18, // Investments income category
    accountId: 1,
    date: "2025-06-25T09:00:00Z",
    paid: true,
  },
  // June 26th
  {
    id: 17,
    type: "EXPENSE",
    title: "Shopping Mall",
    value: -180.45,
    description: "Clothing and accessories",
    categoryId: 10, // Clothing category
    accountId: 1,
    date: "2025-06-26T14:20:00Z",
    paid: true,
  },
  // June 28th
  {
    id: 18,
    type: "EXPENSE",
    title: "Phone Bill",
    value: -65.00,
    description: "Monthly phone plan",
    categoryId: 4, // Subscriptions category
    accountId: 1,
    date: "2025-06-28T10:30:00Z",
    paid: false,
  },
  // June 29th
  {
    id: 19,
    type: "EXPENSE",
    title: "Medical Consultation",
    value: -200.00,
    description: "General practitioner consultation",
    categoryId: 1, // Health category
    accountId: 1,
    date: "2025-06-29T11:00:00Z",
    paid: false,
  },
  // June 30th
  {
    id: 20,
    type: "EXPENSE",
    title: "Water Bill",
    value: -89.30,
    description: "Monthly water bill payment",
    categoryId: 2, // Home category
    accountId: 1,
    date: "2025-06-30T13:00:00Z",
    paid: false,
  },
  {
    id: 21,
    type: "EXPENSE",
    title: "Yard Cleaning",
    value: -170.00,
    description: "Professional yard cleaning service",
    categoryId: 2, // Home category
    accountId: 1,
    date: "2025-06-30T16:00:00Z",
    paid: false,
  },
  // Test transaction from previous year to demonstrate year display
  {
    id: 999,
    type: "EXPENSE",
    title: "Previous Year Bill",
    value: -250.00,
    description: "Test transaction from 2024",
    categoryId: 2, // Home category
    accountId: 1,
    cardId: null,
    tags: [],
    date: "2024-12-15T10:00:00Z",
    paid: true,
  },
];

/**
 * Mock user categories data structure based on API specification:
 * {
 *   id: number,
 *   name: string,
 *   type: string ("EXPENSE" | "INCOME"),
 *   userId: number,
 *   createdAt: string (ISO date)
 * }
 */
export const mockUserCategories = [
  {
    id: 100,
    name: "Freelance",
    type: "INCOME",
    userId: 1,
    createdAt: "2025-06-01T00:00:00Z",
  },
  {
    id: 101,
    name: "Side Business",
    type: "INCOME", 
    userId: 1,
    createdAt: "2025-06-01T00:00:00Z",
  },
  {
    id: 102,
    name: "Hobby Expenses",
    type: "EXPENSE",
    userId: 1,
    createdAt: "2025-06-01T00:00:00Z",
  },
];

// Mock Accounts
export const mockAccounts = [
  {
    id: 1,
    name: "Main Account",
    type: "checking",
    balance: 5420.00,
    currency: "BRL"
  },
  {
    id: 2,
    name: "Savings Account",
    type: "savings", 
    balance: 12500.00,
    currency: "BRL"
  },
  {
    id: 3,
    name: "Investment Account",
    type: "investment",
    balance: 8750.00,
    currency: "BRL"
  }
];

// Mock Credit Cards
export const mockCreditCards = [
  {
    id: 1,
    name: "Nubank Card",
    type: "credit",
    limit: 5000.00,
    currentBalance: -1250.00,
    dueDate: "2025-07-15"
  },
  {
    id: 2,
    name: "Itaú Gold",
    type: "credit",
    limit: 8000.00,
    currentBalance: -850.00,
    dueDate: "2025-07-20"
  },
  {
    id: 3,
    name: "Bradesco Platinum",
    type: "credit",
    limit: 12000.00,
    currentBalance: -2100.00,
    dueDate: "2025-07-10"
  }
];

// Mock Tags
export const mockTags = [
  {
    id: 1,
    name: "Work",
    color: "#3b82f6"
  },
  {
    id: 2,
    name: "Personal",
    color: "#10b981"
  },
  {
    id: 3,
    name: "Family",
    color: "#f59e0b"
  },
  {
    id: 4,
    name: "Emergency",
    color: "#ef4444"
  },
  {
    id: 5,
    name: "Investment",
    color: "#8b5cf6"
  },
  {
    id: 6,
    name: "Vacation",
    color: "#06b6d4"
  },
  {
    id: 7,
    name: "Health",
    color: "#84cc16"
  },
  {
    id: 8,
    name: "Education",
    color: "#f97316"
  }
];
