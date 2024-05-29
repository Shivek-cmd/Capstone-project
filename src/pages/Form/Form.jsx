import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Superapp from "../../assets/Superapp.png";
import "./styles.css";

export default function Form() {
  const navigate = useNavigate();

  // State for form data and errors
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    mobile: "",
    checkbox: false,
  });
  const [errors, setErrors] = useState({
    name: "",
    username: "",
    email: "",
    mobile: "",
    checkbox: "",
  });

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle checkbox change
  const handleCheckbox = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.checked });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form fields
    let newErrors = { ...errors };
    for (const field in formData) {
      if (!formData[field]) {
        newErrors[field] = `${
          field.charAt(0).toUpperCase() + field.slice(1)
        } is required`;
      } else {
        newErrors[field] = "";
      }
    }
    if (!formData.checkbox) {
      newErrors.checkbox = "Please accept the terms and conditions";
    } else {
      newErrors.checkbox = "";
    }

    // Set errors state
    setErrors({ ...newErrors });

    // If no errors, proceed with form submission
    if (Object.values(newErrors).every((error) => !error)) {
      localStorage.setItem("userData", JSON.stringify(formData));
      navigate("/genre");
    }
  };

  return (
    <div className="container">
      {/* Left Panel */}
      <div className="left-panel">
        <img src={Superapp} alt="Superapp Logo" />
        <p>Discover new things on Superapp</p>
      </div>

      {/* Form */}
      <form className="form-container" onSubmit={handleSubmit}>
        {/* Form Header */}
        <div className="form-header">
          <h1 className="main-heading">Super App</h1>
          <p className="sub-heading">Create your new account</p>
        </div>

        {/* Form Fields */}
        <div className="form">
          {/* Name */}
          <div className="input-container">
            <input
              type="text"
              name="name"
              id="name"
              onChange={handleChange}
              placeholder="Name"
            />
            <p className="error-message">{errors.name}</p>
          </div>

          {/* Username */}
          <div className="input-container">
            <input
              type="text"
              name="username"
              id="username"
              onChange={handleChange}
              placeholder="Username"
            />
            <p className="error-message">{errors.username}</p>
          </div>

          {/* Email */}
          <div className="input-container">
            <input
              type="email"
              name="email"
              id="email"
              onChange={handleChange}
              placeholder="Email"
            />
            <p className="error-message">{errors.email}</p>
          </div>

          {/* Mobile */}
          <div className="input-container">
            <input
              type="tel"
              name="mobile"
              id="mobile"
              onChange={handleChange}
              placeholder="Mobile"
            />
            <p className="error-message">{errors.mobile}</p>
          </div>

          {/* Checkbox */}
          <div className="checkbox-container">
            <input
              onChange={handleCheckbox}
              type="checkbox"
              name="checkbox"
              id="checkbox"
            />
            <label htmlFor="checkbox">
              Share my registration data with Superapp
            </label>
            <p className="error-message">{errors.checkbox}</p>
          </div>

          {/* Submit Button */}
          <button type="submit">SIGN UP</button>

          {/* Additional Information */}
          <div className="info-text">
            <p className="info-text-item">
              By clicking on Sign up, you agree to Superapp{" "}
              <a href="/">Terms and Conditions of Use</a>
            </p>
            <p className="info-text-item">
              To learn more about how Superapp collects, uses, shares, and
              protects your personal data, please read the{" "}
              <a href="/">Superapp Privacy Policy</a>.
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}
