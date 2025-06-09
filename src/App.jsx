import { useState } from "react";
import "./App.css";
import Header from "./layout/Header";
import Login from "./pages/Login/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import Transactions from "./pages/Transactions/Transactions";
import Reports from "./pages/Reports/Reports";

function App() {
  const [user, setUser] = useState(null);
  const [page, setPage] = useState("dashboard");

  const handleLogin = (username) => {
    setUser(username);
    setPage("dashboard");
  };
  if (!user) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <div className="app-container">
      <Header currentPage={page} onNavigate={setPage} />
      <main>
        {page === "dashboard" && <Dashboard />}
        {page === "transactions" && <Transactions />}
        {page === "reports" && <Reports />}
      </main>
    </div>
  );
}

export default App;
