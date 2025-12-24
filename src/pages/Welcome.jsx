import { Link } from "react-router-dom";
import MobileWrapper from "../components/MobileWrapper";
import { memo } from "react";
import "../styles/Welcome.css";

const Welcome = () => {
  return (
    <MobileWrapper>
      <div className="welcome-screen">
        <div className="dots">
          <div className="dot dot-6">6</div>
          <div className="dot dot-1">1</div>
          <div className="dot dot-2">2</div>
          <div className="dot dot-3">3</div>
          <div className="dot dot-4">4</div>
          <div className="dot dot-5">5</div>
        </div>

        <div className="main-content">
          <h1>Welcome to PopX</h1>
          <p>
            Lorem ipsum dolor sit amet,<br />
            consectetur adipiscing elit,
          </p>
        </div>

        <div className="action-buttons">
          <Link to="/signup">
            <button className="btn create-account">Create Account</button>
          </Link>
          <Link to="/login">
            <button className="btn already-login">Already Registered? Login</button>
          </Link>
        </div>
      </div>
    </MobileWrapper>
  );
};

export default memo(Welcome);
