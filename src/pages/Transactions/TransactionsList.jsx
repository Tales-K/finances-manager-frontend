import "./TransactionsList.css";
import TransactionsListBase from "./TransactionsListBase";
import {
  FaRegSmile,
  FaHome,
  FaExchangeAlt,
  FaUserMd,
  FaPlusCircle,
} from "react-icons/fa";

const mockData = {
  overdue: [
    {
      id: 1,
      icon: <FaRegSmile color="#a3e635" />,
      title: "volei",
      date: "28/04/2025",
      value: 14,
      color: "#a3e635",
    },
    {
      id: 2,
      icon: <FaRegSmile color="#a3e635" />,
      title: "volei",
      date: "05/05/2025",
      value: 14,
      color: "#a3e635",
    },
    {
      id: 3,
      icon: <FaHome color="#818cf8" />,
      title: "apartamento",
      date: "10/05/2025",
      value: 929.91,
      color: "#818cf8",
    },
    {
      id: 4,
      icon: <FaExchangeAlt color="#a3a3a3" />,
      title: "Guardar",
      date: "10/05/2025",
      value: 750,
      color: "#a3a3a3",
    },
  ],
  upcoming: [
    {
      id: 5,
      icon: <FaRegSmile color="#a3e635" />,
      title: "volei",
      date: "26/05/2025",
      value: 14,
      color: "#a3e635",
    },
    {
      id: 6,
      icon: <FaUserMd color="#38bdf8" />,
      title: "Psicólogo",
      date: "26/05/2025",
      value: 150,
      color: "#38bdf8",
    },
    {
      id: 7,
      icon: <FaPlusCircle color="#a3a3a3" />,
      title: "Despesas gerais do mês",
      date: "30/05/2025",
      value: 1000,
      color: "#a3a3a3",
    },
    {
      id: 8,
      icon: <FaHome color="#818cf8" />,
      title: "Limpeza casa",
      date: "31/05/2025",
      value: 150,
      color: "#818cf8",
    },
  ],
};

export default function TransactionsList() {
  return (
    <TransactionsListBase
      title="Contas a pagar"
      overdueLabel="Contas a pagar atrasadas"
      overdue={mockData.overdue}
      upcomingLabel="Próximas"
      upcoming={mockData.upcoming}
      overdueAlertColor="#fee2e2"
      overdueAlertTextColor="#e11d48"
    />
  );
}
