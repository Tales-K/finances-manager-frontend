import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import "./App.css";
import Header from "./layout/Header";
import Login from "./pages/Login/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import Transactions from "./pages/Transactions/Transactions";
import Reports from "./pages/Reports/Reports";

function App() {
  const location = useLocation();

  // For debug purposes, skip login and go directly to pages
  const getCurrentPage = () => {
    const path = location.pathname;
    if (path === '/dashboard') return 'dashboard';
    if (path === '/transactions') return 'transactions';
    if (path === '/reports') return 'reports';
    if (path === '/login') return 'login';
    return 'dashboard';
  };

  const currentPage = getCurrentPage();

  return (
    <div className="app-container">
      {currentPage !== 'login' && (
        <Header currentPage={currentPage} />
      )}
      <main>
        <Routes>
          <Route path="/login" element={<Login onLogin={() => {}} />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
