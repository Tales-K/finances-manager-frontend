import {
  FaUtensils,
  FaTv,
  FaWineGlass,
  FaHome,
  FaShoppingCart,
  FaCut,
  FaCreditCard,
  FaGraduationCap,
  FaParking,
  FaBaby,
  FaUserGraduate,
  FaFileInvoiceDollar,
  FaChartLine,
  FaGamepad,
  FaAppleAlt,
  FaEllipsisH,
  FaPaw,
  FaGift,
  FaTshirt,
  FaMapMarkerAlt,
  FaHeartbeat,
  FaBriefcase,
  FaCar,
  FaPlane,
  FaMoneyBillWave,
  FaCoins,
  FaDollarSign,
  FaUsers,
  FaHandHoldingHeart,
  FaUserTie,
} from "react-icons/fa";

export const categoryTypes = {
  EXPENSE: 0,
  INCOME: 1,
};

export const defaultCategories = {
  expenses: [
    {
      id: 1,
      name: "Health",
      icon: FaHeartbeat,
      color: "#dc2626", // red-600
      type: categoryTypes.EXPENSE,
    },
    {
      id: 2,
      name: "Home",
      icon: FaHome,
      color: "#059669", // emerald-600
      type: categoryTypes.EXPENSE,
    },
    {
      id: 3,
      name: "Transportation",
      icon: FaCar,
      color: "#2563eb", // blue-600
      type: categoryTypes.EXPENSE,
    },
    {
      id: 4,
      name: "Subscriptions & Services",
      icon: FaTv,
      color: "#8b5cf6", // violet-500
      type: categoryTypes.EXPENSE,
    },
    {
      id: 5,
      name: "Grocery",
      icon: FaAppleAlt,
      color: "#16a34a", // green-600
      type: categoryTypes.EXPENSE,
    },
    {
      id: 6,
      name: "Bars & Restaurants",
      icon: FaWineGlass,
      color: "#ec4899", // pink-500
      type: categoryTypes.EXPENSE,
    },
    {
      id: 7,
      name: "Personal Care",
      icon: FaCut,
      color: "#d946ef", // fuchsia-500
      type: categoryTypes.EXPENSE,
    },
    {
      id: 8,
      name: "Education",
      icon: FaGraduationCap,
      color: "#1d4ed8", // blue-700
      type: categoryTypes.EXPENSE,
    },
    {
      id: 9,
      name: "Pets",
      icon: FaPaw,
      color: "#a3e635", // lime-400
      type: categoryTypes.EXPENSE,
    },
    {
      id: 10,
      name: "Clothing",
      icon: FaTshirt,
      color: "#0891b2", // cyan-600
      type: categoryTypes.EXPENSE,
    },
    {
      id: 11,
      name: "Food",
      icon: FaUtensils,
      color: "#f97316", // orange-500
      type: categoryTypes.EXPENSE,
    },
    {
      id: 12,
      name: "Shopping",
      icon: FaShoppingCart,
      color: "#dc2626", // red-600
      type: categoryTypes.EXPENSE,
    },
    {
      id: 13,
      name: "Travel",
      icon: FaPlane,
      color: "#0ea5e9", // sky-500
      type: categoryTypes.EXPENSE,
    },
    {
      id: 14,
      name: "Other",
      icon: FaEllipsisH,
      color: "#6b7280", // gray-500
      type: categoryTypes.EXPENSE,
    },
  ],
  incomes: [
    {
      id: 15,
      name: "Gifts",
      icon: FaHandHoldingHeart,
      color: "#be185d", // pink-700
      type: categoryTypes.INCOME,
    },
    {
      id: 16,
      name: "Other Income",
      icon: FaCoins,
      color: "#ca8a04", // yellow-600
      type: categoryTypes.INCOME,
    },
    {
      id: 17,
      name: "Salary",
      icon: FaUserTie,
      color: "#15803d", // green-700
      type: categoryTypes.INCOME,
    },
    {
      id: 18,
      name: "Investments",
      icon: FaChartLine,
      color: "#16a34a", // green-600
      type: categoryTypes.INCOME,
    },
    {
      id: 19,
      name: "Expense Sharing",
      icon: FaUsers,
      color: "#059669", // emerald-600
      type: categoryTypes.INCOME,
    },
    {
      id: 20,
      name: "Subscription Sharing",
      icon: FaTv,
      color: "#7c3aed", // violet-600
      type: categoryTypes.INCOME,
    },
  ],
};

export const getAllCategories = () => {
  return [...defaultCategories.expenses, ...defaultCategories.incomes];
};

export const getCategoriesByType = (type) => {
  return getAllCategories().filter((category) => category.type === type);
};

export const getCategoryById = (id) => {
  return getAllCategories().find((category) => category.id === id);
};

export const getCategoryByName = (name) => {
  return getAllCategories().find((category) => category.name === name);
};
