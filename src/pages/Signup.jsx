import { useNavigate } from "react-router-dom";
import MobileWrapper from "../components/MobileWrapper";
import { useState, useEffect, useCallback } from "react";
import "../styles/Signup.css";

export default function Signup() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "Marry Doe",
    phone: "9876543210",
    email: "marry.doe@example.com",
    password: "password123",
    company: "Example Corp",
    agency: "yes",
  });

  useEffect(() => {
    const saved = localStorage.getItem("popxUser");
    if (!saved) return;

    try {
      const user = JSON.parse(saved);

      setForm(prev => ({
        ...prev,
        name: user?.name || "Marry Doe",
        phone: user?.phone || "9876543210",
        email: user?.email || "marry.doe@example.com",
        company: user?.company || "Example Corp",
      }));
    } catch {}
  }, []);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  }, []);

  const handleRadioChange = useCallback((e) => {
    setForm(prev => ({ ...prev, agency: e.target.value }));
  }, []);

  const handleSubmit = useCallback(() => {
    if (form.name && form.phone && form.email && form.password) {
      localStorage.setItem(
        "popxUser",
        JSON.stringify({
          name: form.name.trim(),
          phone: form.phone.trim(),
          email: form.email.trim(),
          company: form.company.trim(),
          agency: form.agency === "yes",
        })
      );
      navigate("/profile");
    } else {
      alert("Please fill all required fields");
    }
  }, [form, navigate]);

  return (
    <MobileWrapper>
      <div className="signup-container">
        <div className="signup-header">
          <h1 className="signup-title">
            Create your <span className="badge">1</span><br />
            PopX account
          </h1>
        </div>

        <form className="signup-form" onSubmit={(e) => e.preventDefault()}>
          {[
            { name: "name", label: "Full Name", required: true },
            { name: "phone", label: "Phone number", required: true },
            { name: "email", label: "Email address", required: true },
            { name: "password", label: "Password", required: true, type: "password" },
          ].map(field => (
            <div className="form-group" key={field.name}>
              <label className="form-label" htmlFor={field.name}>
                {field.label} {field.required && <span className="required">*</span>}
              </label>
              <input
                id={field.name}
                type={field.type || "text"}
                name={field.name}
                value={form[field.name]}
                onChange={handleChange}
                placeholder="Marry Doe"
                className="form-input"
                required={field.required}
              />
            </div>
          ))}

          <div className="form-group">
            <label className="form-label" htmlFor="company">Company name</label>
            <input
              id="company"
              type="text"
              name="company"
              value={form.company}
              onChange={handleChange}
              placeholder="Marry Doe"
              className="form-input"
            />
          </div>

          <div className="form-group">
              <legend className="form-label">
                Are you an Agency? <span className="required">*</span>
              </legend>
              <div className="radio-group">
                <label className="radio-label">
                  <input
                    type="radio"
                    name="agency"
                    value="yes"
                    checked={form.agency === "yes"}
                    onChange={handleRadioChange}
                    className="radio-input"
                  />
                  Yes
                </label>
                <label className="radio-label">
                  <input
                    type="radio"
                    name="agency"
                    value="no"
                    checked={form.agency === "no"}
                    onChange={handleRadioChange}
                    className="radio-input"
                  />
                  No
                </label>
              </div>
        
          </div>

          <button
            type="submit"
            onClick={handleSubmit}
            className="submit-btn"
          >
            Create Account
          </button>
        </form>
      </div>
    </MobileWrapper>
  );
}
