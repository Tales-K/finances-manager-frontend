import { Link } from "react-router-dom";
import "./Header.css";
import {
  FaCog,
  FaUserCircle,
  FaChartPie,
  FaExchangeAlt,
  FaFileAlt,
} from "react-icons/fa";

export default function Header({ currentPage }) {
  return (
    <header className="header">
      <div className="header-content">
        <img src="/logo.svg" alt="Logo" className="header-logo" />
        <nav className="header-nav">
          <Link
            to="/dashboard"
            className={currentPage === "dashboard" ? "active" : ""}
          >
            <FaChartPie size={18} color="#2563eb" /> Dashboard
          </Link>
          <Link
            to="/transactions"
            className={currentPage === "transactions" ? "active" : ""}
          >
            <FaExchangeAlt size={18} color="#2563eb" /> Transactions
          </Link>
          <Link
            to="/reports"
            className={currentPage === "reports" ? "active" : ""}
          >
            <FaFileAlt size={18} color="#2563eb" /> Reports
          </Link>
        </nav>
        <div className="header-icons">
          <button className="icon-btn" title="Settings">
            <FaCog size={22} color="#2563eb" />
          </button>
          <button className="icon-btn" title="Profile">
            <FaUserCircle size={22} color="#2563eb" />
          </button>
        </div>
      </div>
    </header>
  );
}
