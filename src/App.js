import React, { useState } from "react";
import './App.css';

const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!email.includes("@")) {
      setEmailError("invalid email format");

    } else {
      setEmailError("");
    }

    if (password.length < 8) {
      setPasswordError("Password must be at least 8 characters");

    } else {
      setPasswordError("");
    }

    if (confirmPassword !== password) {
      setConfirmPasswordError("Passwords do not match");

    } else {
      setConfirmPasswordError("");
    }

    if (emailError === "" && passwordError === "" && confirmPasswordError === "") {
      alert("Form submitted successfully!");
    }
    else {
      alert("Form cannot be submitted!");
    }
  };

  return (
    <>
    <div className="content">
    <form onSubmit={handleSubmit}>
    <div className="field">
        <label className="fieldsNames">Email:</label> <br />
        <input type="text" value={email} onChange={handleEmailChange} /> <br />
        {emailError !== "" && <span className="erors">{emailError}</span>}<br />
        <label className="fieldsNames">Password:</label> <br />
        <input type="password" value={password} onChange={handlePasswordChange} /> <br />
        {passwordError !== "" && <span className="erors">{passwordError}</span>}<br />
        <label className="fieldsNames">Confirm Password:</label> <br />
        <input type="password" value={confirmPassword} onChange={handleConfirmPasswordChange} /> <br />
        {confirmPasswordError !== "" && <span className="erors">{confirmPasswordError}</span>}<br /><br />
        <button id="signUp" type="submit">Sign Up</button>
      </div>
    </form>
    </div>
    </>
  );
};

export default Form;
