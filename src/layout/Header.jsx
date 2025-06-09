import "./Header.css";
import {
  FaCog,
  FaUserCircle,
  FaChartPie,
  FaExchangeAlt,
  FaFileAlt,
} from "react-icons/fa";

export default function Header({ currentPage, onNavigate }) {
  return (
    <header className="header">
      <div className="header-content">
        <img src="/static/logo.svg" alt="Logo" className="header-logo" />
        <nav className="header-nav">
          <button
            className={currentPage === "dashboard" ? "active" : ""}
            onClick={() => onNavigate("dashboard")}
          >
            <FaChartPie size={18} color="#2563eb" /> Dashboard
          </button>
          <button
            className={currentPage === "transactions" ? "active" : ""}
            onClick={() => onNavigate("transactions")}
          >
            <FaExchangeAlt size={18} color="#2563eb" /> Transactions
          </button>
          <button
            className={currentPage === "reports" ? "active" : ""}
            onClick={() => onNavigate("reports")}
          >
            <FaFileAlt size={18} color="#2563eb" /> Reports
          </button>
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
