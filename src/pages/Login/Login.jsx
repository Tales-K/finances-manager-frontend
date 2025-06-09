import { useState } from "react";
import Button from "../../components/Button";
import "../../styles/theme.css";
import "./Login.css"; // Make sure Login.css is imported
import GoogleIcon from "../../static/google-icon.svg";
import GitHubIcon from "../../static/github-icon.svg";
import Logo from "../../static/logo.svg";

export default function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !password) {
      setError("Please enter both username and password.");
      return;
    }
    setError("");
    // onLogin({ username, rememberMe }); // Pass rememberMe state if needed
    onLogin(username);
  };

  return (
    <div className="login-container">
      <div className="login-logo">
        <img src={Logo} alt="BankCo Logo" />
      </div>
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Sign in to Bankco.</h2>
        <p className="subtitle">Send, spend and save smarter</p>

        <div className="social-buttons">
          <button type="button" className="social-btn">
            <img src={GoogleIcon} alt="Google" />
            Sign In with Google
          </button>
          <button type="button" className="social-btn">
            <img src={GitHubIcon} alt="GitHub" />
            Sign In with GitHub
          </button>
        </div>

        <div className="divider">Or continue with</div>

        <input
          type="text"
          placeholder="Username or email"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          aria-label="Username or email"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          aria-label="Password"
        />

        <div className="login-options">
          <label htmlFor="rememberMe">
            <input
              type="checkbox"
              id="rememberMe"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            Remember me
          </label>
          <a href="#" className="forgot">
            Forgot Password?
          </a>
        </div>

        {error && <div className="error">{error}</div>}

        <Button type="submit" variant="primary">
          Sign In
        </Button>

        <p className="signup">
          Don't have an account? <a href="#">Sign Up</a>
        </p>
      </form>
      <footer className="login-footer">
        <a href="#">Terms & Condition</a>
        <a href="#">Privacy Policy</a>
        <a href="#">Help</a>
        <a href="#">English</a>
        <p>&copy; 2023 Bankco. All Right Reserved.</p>
      </footer>
    </div>
  );
}
