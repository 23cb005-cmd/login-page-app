import { useState } from "react";
import LoginForm from "./components/LoginForm";
import Dashboard from "./components/Dashboard";
import "./App.css";

function App() {
  const [loggedInEmail, setLoggedInEmail] = useState(null);

  const handleLoginSuccess = (email) => {
    setLoggedInEmail(email);
  };

  const handleLogout = () => {
    setLoggedInEmail(null);
  };

  return (
    <div className="app-shell">
      {loggedInEmail ? (
        <Dashboard email={loggedInEmail} onLogout={handleLogout} />
      ) : (
        <LoginForm onLoginSuccess={handleLoginSuccess} />
      )}
    </div>
  );
}

export default App;
