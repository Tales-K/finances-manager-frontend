import "./TransactionsList.css";
import TransactionsListBase from "./TransactionsListBase";
import { useState, useEffect } from "react";
import { getDashboardTransactions, getCategories } from "../../api";
import { formatTransactionsWithCategories } from "../../utils";

export default function TransactionsList() {
  const [dashboardData, setDashboardData] = useState({ overdue: [], upcoming: [] });
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [dashboardTransactions, categoriesData] = await Promise.all([
          getDashboardTransactions(),
          getCategories(),
        ]);

        setDashboardData(dashboardTransactions);
        setCategories(categoriesData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Helper function to convert icon components to JSX
  const addIconsToTransactions = (formattedTransactions) => {
    return formattedTransactions.map((transaction) => {
      const IconComponent = transaction.iconComponent;
      return {
        ...transaction,
        icon: <IconComponent color={transaction.color} />,
      };
    });
  };

  if (loading) {
    return <div>Carregando...</div>;
  }

  // Format transactions with category info
  const formattedOverdue = formatTransactionsWithCategories(dashboardData.overdue, categories);
  const formattedUpcoming = formatTransactionsWithCategories(dashboardData.upcoming, categories);

  return (
    <TransactionsListBase
      title="Contas a pagar"
      overdueLabel="Contas a pagar atrasadas"
      overdue={addIconsToTransactions(formattedOverdue)}
      upcomingLabel="Próximas"
      upcoming={addIconsToTransactions(formattedUpcoming)}
      overdueAlertColor="#fee2e2"
      overdueAlertTextColor="#e11d48"
    />
  );
}
