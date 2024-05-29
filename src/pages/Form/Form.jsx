import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";
import Superapp from "../../assets/Superapp.png";

export default function Form() {
  const navigate = useNavigate();
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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCheckbox = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.checked });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = { ...errors };
    if (
      formData.name.trim().length === 0 ||
      formData.name === undefined ||
      formData.name === null
    ) {
      newErrors.name = "Name is required";
    } else {
      newErrors.name = "";
    }
    if (
      formData.username.trim().length === 0 ||
      formData.username === undefined ||
      formData.username === null
    ) {
      newErrors.username = "Username is required";
    } else {
      newErrors.username = "";
    }
    if (
      formData.email.trim().length === 0 ||
      formData.email === undefined ||
      formData.email === null
    ) {
      newErrors.email = "Email is required";
    } else {
      newErrors.email = "";
    }
    if (
      formData.mobile.trim().length === 0 ||
      formData.mobile === undefined ||
      formData.mobile === null
    ) {
      newErrors.mobile = "Mobile is required";
    } else {
      newErrors.mobile = "";
    }
    if (!formData.checkbox) {
      newErrors.checkbox = "Please accept the terms and conditions";
    } else {
      newErrors.checkbox = "";
    }
    setErrors({ ...newErrors });
    if (
      newErrors.name === "" &&
      newErrors.username === "" &&
      newErrors.email === "" &&
      newErrors.mobile === "" &&
      newErrors.checkbox === ""
    ) {
      localStorage.setItem("userData", JSON.stringify(formData));
      navigate("/genre");
    }
  };

  return (
    <div className="container">
      <div className="left-panel">
        <img src={Superapp} alt="blank" />
        <p> Discover new things on Superapp</p>
      </div>

      <form className="form-container" onSubmit={handleSubmit}>
        <div className="form-header">
          <h1 className="main-heading">Super App</h1>
          <p className="sub-heading">Create your new account</p>
        </div>
        <div className="form">
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

          <button type="submit">SIGN UP</button>

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
