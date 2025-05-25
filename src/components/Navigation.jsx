import "../App.css";

export default function Navigation({ onNavigate, currentPage }) {
  return (
    <nav className="navigation">
      <button
        onClick={() => onNavigate("dashboard")}
        className={currentPage === "dashboard" ? "active" : ""}
      >
        Dashboard
      </button>
      <button
        onClick={() => onNavigate("transactions")}
        className={currentPage === "transactions" ? "active" : ""}
      >
        Transactions
      </button>
      <button
        onClick={() => onNavigate("reports")}
        className={currentPage === "reports" ? "active" : ""}
      >
        Reports
      </button>
      <button
        onClick={() => onNavigate("logout")}
        className={currentPage === "logout" ? "active" : ""}
      >
        Logout
      </button>
    </nav>
  );
}
