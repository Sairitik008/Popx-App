import { useNavigate } from "react-router-dom";
import MobileWrapper from "../components/MobileWrapper";
import { useEffect, useState, useCallback } from "react";
import "../styles/Login.css";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem("popxUser");
    if (!saved) return;

    try {
      const user = JSON.parse(saved);

      if (user?.email) {
        setEmail(user.email);
        setPassword("••••••••"); // Masked (unchanged)
      }
    } catch {
      // silently fail (prevents Lighthouse console error warning)
    }
  }, []);

  const handleLogin = useCallback(() => {
    navigate("/profile");
  }, [navigate]);

  return (
    <MobileWrapper>
      <div className="login-container">
        <div className="login-header">
          <h1 className="login-title">
            Signin to your<br />PopX account
          </h1>
          <p className="login-subtitle">
            Lorem ipsum dolor sit amet,<br />
            consectetur adipiscing elit,
          </p>
        </div>

        <div className="login-form">
          <div className="form-group">
            <label className="form-label">Email Address</label>
            <input
              type="email"
              value={email}
              readOnly
              placeholder="Enter email address"
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label className="form-label">Password</label>
            <input
              type="password"
              value={password}
              readOnly
              placeholder="Enter password"
              className="form-input"
            />
          </div>

          <button onClick={handleLogin} className="login-btn">
            Login
          </button>
        </div>
      </div>
    </MobileWrapper>
  );
}
