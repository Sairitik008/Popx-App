import { useNavigate } from "react-router-dom";
import MobileWrapper from "../components/MobileWrapper";
import { useMemo, useCallback } from "react";
import "../styles/Profile.css";

export default function Profile() {
  const navigate = useNavigate();

  const user = useMemo(() => {
    try {
      return JSON.parse(localStorage.getItem("popxUser") || "{}");
    } catch {
      return {};
    }
  }, []);

  const name = user?.name || "Marry Doe";
  const email = user?.email || "Marry@Gmail.Com";

  const handleBack = useCallback(() => {
    navigate(-1); // Goes back to previous screen: Signup or Login
  }, [navigate]);

  return (
    <MobileWrapper>
      <div className="profile-container">
        <div
          className="back-arrow"
          onClick={handleBack}
          role="button"
          aria-label="Go back"
          tabIndex={0}
        >
   
        </div>

        <h2 className="profile-title">Account Settings</h2>

        <div className="profile-card">
          <div className="profile-header">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=987&q=80"
              alt="Profile"
              className="profile-image"
              loading="lazy"
              decoding="async"
              width="120"
              height="120"
            />

            <div className="profile-info">
              <h3 className="profile-name">{name}</h3>
              <p className="profile-email">{email}</p>
            </div>

            {/* Initial badge is commented out as per your code */}
          </div>

          <p className="profile-description">
            Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
          </p>
        </div>

      </div>
    </MobileWrapper>
  );
}
