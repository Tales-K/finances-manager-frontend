import TransactionsListBase from "./TransactionsListBase";
import {
  FaSpotify,
  FaUtensils,
  FaRegStar,
  FaUserFriends,
} from "react-icons/fa";

const mockData = {
  overdue: [
    {
      id: 1,
      icon: <FaSpotify color="#60a5fa" />,
      title: "Spotify Melissa",
      date: "10/02/2025",
      value: 5.0,
      color: "#60a5fa",
    },
    {
      id: 2,
      icon: <FaSpotify color="#60a5fa" />,
      title: "Spotify Melissa",
      date: "09/03/2025",
      value: 5.0,
      color: "#60a5fa",
    },
    {
      id: 3,
      icon: <FaUtensils color="#60a5fa" />,
      title: "Janta RPG Tiago",
      date: "06/04/2025",
      value: 55.94,
      color: "#60a5fa",
    },
    {
      id: 4,
      icon: <FaSpotify color="#60a5fa" />,
      title: "Spotify Melissa",
      date: "09/04/2025",
      value: 5.0,
      color: "#60a5fa",
    },
  ],
  upcoming: [
    {
      id: 5,
      icon: <FaRegStar color="#22d3ee" />,
      title: "Sonega",
      date: "04/06/2025",
      value: 990.0,
      color: "#22d3ee",
    },
    {
      id: 6,
      icon: <FaRegStar color="#22d3ee" />,
      title: "Sonega",
      date: "07/06/2025",
      value: 1923.27,
      color: "#22d3ee",
    },
    {
      id: 7,
      icon: <FaRegStar color="#22d3ee" />,
      title: "Salário",
      date: "07/06/2025",
      value: 6624.14,
      color: "#22d3ee",
    },
    {
      id: 8,
      icon: <FaUserFriends color="#60a5fa" />,
      title: "Netflix mãe",
      date: "09/06/2025",
      value: 15.56,
      color: "#60a5fa",
    },
  ],
};

export default function ReceivablesList() {
  return (
    <TransactionsListBase
      title="Contas a receber"
      overdueLabel="Contas a receber atrasadas"
      overdue={mockData.overdue}
      upcomingLabel="Próximas"
      upcoming={mockData.upcoming}
      overdueAlertColor="#fee2e2"
      overdueAlertTextColor="#e11d48"
    />
  );
}
